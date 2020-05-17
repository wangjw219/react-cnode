import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const QuestionListWrapper = styled.ul`
    overflow-y: scroll;
    box-sizing: border-box;
    height: 100%;
    padding: 40px 0;
`;

const QuestionItem = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 30px;
    padding: 0 10px;
    text-decoration: none;
`;

const QuestionItemAvatar = styled.img`
    flex: 0 0 15px;
    height: 15px;
    border-radius: 3px;
    background-color: #ccc;
    font-size: 0;
`;

const QuestionItemTitle = styled.p`
    flex: 1 1 auto;
    margin-left: 15px;
    text-align: left;
    font-size: 16px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const QuestionItemTime = styled.p`
    flex: 0 0 55px;
    text-align: right;
    font-size: 12px;
    color: #666;
`;

type QuestionListProps = {list: Array<any>};

export default function QuestionList(props: QuestionListProps) {
    const {list} = props;
    return (
        <QuestionListWrapper>
            {
                list.map(item => {
                    return (
                        <QuestionItem to={`/detail/${item.id}`} key={item.id}>
                            <QuestionItemAvatar src={item.avatar} alt="avatar" />
                            <QuestionItemTitle>{item.title}</QuestionItemTitle>
                            <QuestionItemTime>{item.time}</QuestionItemTime>
                        </QuestionItem>
                    )
                })
            }
        </QuestionListWrapper>
    );
}