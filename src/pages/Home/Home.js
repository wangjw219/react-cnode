import React from 'react';
import './Home.css';
import HomeTab from '../../components/HomeTab/HomeTab';
import QuestionList from '../../components/QuestionList/QuestionList';
import Pagination from '../../components/Pagination/Pagination';
import {getTopics} from '../../common/service';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 顶部菜单
            tabList: [
                {
                    id: 0,
                    name: '全部'
                },
                {
                    id: 1,
                    name: '精华',
                    key: 'good'
                },
                {
                    id: 2,
                    name: '分享',
                    key: 'share'
                },
                {
                    id: 3,
                    name: '问答',
                    key: 'ask'
                },
                {
                    id: 4,
                    name: '招聘',
                    key: 'job'
                },
            ],
            activeTabId: 0,
            // 分页
            maxPage: 10,
            currentPage: 1,
            // 问题列表
            questionList: [],
            // 加载
            isLoading: true
        };
    }

    componentDidMount() {
        this.getTopicList({page: 1});
    }

    async getTopicList({page, tab}) {
        this.setState({isLoading: true});
        let list = await getTopics({
            page,
            tab
        });
        list = list.map(item => {
            item.avatar = item.author.avatar_url;
            item.time = this.setTopicTime(item.last_reply_at);
            return item;
        });
        this.setState({questionList: list, isLoading: false});
    }

    /**
     * 将时间字符串转换成相对当前的时间
     * @param {String} timeString ISO 时间，例如：'2020-05-13T05:55:32.554Z'
     */
    setTopicTime(timeString) {
        const timeStamp = new Date(timeString).getTime();
        const timeStampDistance = Math.floor((Date.now() - timeStamp) / 1000);
        const tenMinuteSecond = 600;
        const oneHourSecond = 3600;
        const oneDateSecond = 3600 * 24;
        if (timeStampDistance <= tenMinuteSecond) {
            return '刚刚';
        }
        if (timeStampDistance > tenMinuteSecond && timeStampDistance < oneHourSecond) {
            return `${Math.floor(timeStampDistance / 60)}分钟前`;
        }
        if (timeStampDistance >= oneHourSecond && timeStampDistance < oneDateSecond) {
            return `${Math.ceil(timeStampDistance / oneHourSecond)}小时前`;
        }
        if (timeStampDistance >= oneDateSecond) {
            return `${Math.ceil(timeStampDistance / oneDateSecond)}天前`;
        }
    }

    setActiveTabId = (id) => {
        const {tabList, activeTabId} = this.state;
        if (id !== activeTabId) {
            this.setState({activeTabId: id, currentPage: 1});
            const activeTab = tabList.find(item => item.id === id);
            this.getTopicList({
                page: 1,
                tab: activeTab.key
            });
        }
    }

    setCurrentPage = (page) => {
        const {tabList, activeTabId, currentPage} = this.state;
        if (page !== currentPage) {
            this.setState({currentPage: page});
            const activeTab = tabList.find(item => item.id === activeTabId);
            this.getTopicList({
                page,
                tab: activeTab.key
            });
        }
    }

    render() {
        const {
            tabList,
            activeTabId,
            currentPage,
            maxPage,
            questionList,
            isLoading
        } = this.state;
        return (
            <div className="home">
                <HomeTab
                    tabList={tabList}
                    activeTabId={activeTabId}
                    setActiveTabId={this.setActiveTabId}
                />
                {
                    isLoading ? <div className="loading">加载中...</div> : <QuestionList list={questionList}/>
                }
                <Pagination
                    currentPage={currentPage}
                    maxPage={maxPage}
                    setCurrentPage={this.setCurrentPage}
                />
            </div>
        );
    }
}