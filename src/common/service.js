import ajax from './ajax';
import config from './config';

/**
 * 请求统一接口
 * @param {String} url 请求链接
 * @param {Object} params 请求参数对象，用于 GET 方法
 * @param {Object} data 请求实体数据，用于 POST 方法
 * @param {String} method 请求方法
 */
export function sendRequest({url, params, data, method}) {
    return new Promise((resolve, reject) => {
        ajax({
            url,
            params,
            data,
            method
        }).then(res => {
            if (res.data.success) {
                resolve(res.data.data);
            } else {
                reject(res.data);
            }
        }).catch(err => {
            reject(err);
        });
    });
}

/**
 * 获取主题列表
 * @param {Number} page 页数
 * @param {String} tab 主题分类。目前有 'ask'、'share'、'job'、'good'
 * @param {Number} limit 每一页的主题数量
 * @param {String} mdrender 是否渲染 markdown 格式文本，可选 'true'/'false'
 * @param {String} cancelToken axios 取消请求对象
 */
export function getTopics({page = 1, tab, limit = 20, mdrender, cancelToken}) {
    return sendRequest({
        url: config.API.getTopics,
        params: {
            page,
            tab,
            limit,
            mdrender
        }
    });
}