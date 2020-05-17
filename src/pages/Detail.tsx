import React from 'react';
import {getOneTopic} from 'common/service';
import styled from 'styled-components';

const DetailPage = styled.div`
    padding: 0 15px;
`;

const DetailLoading = styled.div`
    padding-top: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #666;
`;

const DetailTitle = styled.h1`
    font-size: 22px;
    font-weight: bold;
    color: #000;
`;

const DetailContent = styled.div`
    line-height: 30px;

    p {
        margin-bottom: 15px;
        word-wrap: break-word;
    }

    a {
        color: #08c;
    }

    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }
`;


interface DetailProps {
    match: {
        params: {
            id: string
        }
    }
};

interface DetailState {
    topicInfo: {
        title: string;
        content: string;
    };
    isLoading: boolean;
}

export default class Detail extends React.Component<DetailProps, DetailState> {
    constructor(props: DetailProps) {
        super(props);
        this.state = {
            topicInfo: {
                title: '',
                content: ''
            },
            isLoading: false
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.getTopic(id);
    }

    async getTopic(id: string) {
        this.setState({isLoading: true});
        const data = await getOneTopic(id);
        this.setState({topicInfo: data, isLoading: false});
    }

    render() {
        const {topicInfo, isLoading} = this.state;
        const {title, content} = topicInfo;
        const detailContent = (
            <React.Fragment>
                <DetailTitle>{title}</DetailTitle>
                <DetailContent dangerouslySetInnerHTML={{__html: content}}></DetailContent>
            </React.Fragment>
        )
        return (
            <DetailPage>
                {
                    isLoading ? <DetailLoading>加载中...</DetailLoading> : detailContent
                }
            </DetailPage>
        )
    }
}