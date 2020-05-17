import ajax from './ajax';
import config from './config';

/**
 * 请求统一接口
 * @param {String} url 请求链接
 * @param {Object} params 请求参数对象，用于 GET 方法
 * @param {Object} data 请求实体数据，用于 POST 方法
 * @param {String} method 请求方法
 */
export function sendRequest(requestObject: {url: string, params?: {[key: string]: any}, data?: {[key: string]: any}, method?: 'GET' | 'POST'}): Promise<any> {
    return new Promise((resolve, reject) => {
        ajax(requestObject).then(res => {
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
 * @param {Object} cancelToken axios 取消请求 token
 */
export function getTopics(requestObject: {tab?: string,  mdrender?: boolean, cancelToken: any, limit: number, page: number}): Promise<Array<any>> {
    return sendRequest({
        url: config.API.getTopics,
        params: requestObject
    });
}

/**
 * 获取主题详情
 * @param {String} id 主题 id
 */
export function getOneTopic(id: string): Promise<{title: string; content: string}> {
    return sendRequest({
        url: `${config.API.getOneTopic}/${id}`
    });
}