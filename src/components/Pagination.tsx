import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #f1f1f1;
`;

const PageList = styled.ul`
    margin: 0 auto;
    border-left: 1px solid #ddd;
`;

const PageItem = styled.li`
    display: inline-block;
    padding: 4px 12px;
    border: 1px solid #ddd;
    border-left-width: 0;
    color: #999;
    font-size: 14px;
    user-select: none;
`;

const PageItemActive = styled(PageItem)`
    color: #80bd01;
`;

interface PaginationProps {
    maxPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
    const {maxPage, currentPage, setCurrentPage} = props;
    const pageList = Array.from({length: maxPage}).map((_, index) => index + 1);
    const pageStartIndex = Math.min(Math.max(currentPage - 1 - 2, 0), maxPage - 5);
    const showedPageList = pageList.slice(pageStartIndex, pageStartIndex + 5);

    return (
        <PaginationWrapper>
            <PageList>
                {currentPage !== 1 && <PageItem key="last" onClick={() => setCurrentPage(currentPage - 1)}>&#60;&#60;</PageItem>}
                {
                    showedPageList.map(item => {
                        if (item === currentPage) {
                            return <PageItemActive key={item} onClick={() => setCurrentPage(item)}>{item}</PageItemActive>
                        }
                        return <PageItem key={item} onClick={() => setCurrentPage(item)}>{item}</PageItem>
                    })
                }
                {currentPage !== maxPage && <PageItem key="next" onClick={() => setCurrentPage(currentPage + 1)}>&#62;&#62;</PageItem>}
            </PageList>
        </PaginationWrapper>
    )
}