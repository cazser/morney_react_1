import React from "react";
import styled from "styled-components";
import { useRecordList } from "useRecordList";
import Layout from "../components/Layout"
const HeaderWrapper = styled.header`
    text-align: center;
`//

const LiWrapper = styled.ul`
    >li {
        display: flex;
        justify-content: space-between;
        text-align: center;
        background: white;
        border: 1px solid #333333;
        > span{
            max-width: 20%;
        }
    }
`//

const Wrapper = styled.ul`
    display: flex;
    background: white;
    justify-content: space-between;
`//
const Statistics = () =>{ 
    const {getRecordList, setRecordList}= useRecordList();
    return(
    <Layout>
        <HeaderWrapper>记录</HeaderWrapper>
        <Wrapper>
            <li>备注</li>
            <li>金额</li>
            <li>种类</li>
            <li>支出/收入</li>
            <li>日期</li>
        </Wrapper>
        <LiWrapper>
            
        {
        
        getRecordList().map((record: any)=>
        {
        return(
        <li key={record}>
            <span>{record.note}</span>
            <span>{record.amount}</span>
            <span>{record.tags}</span>
            <span>{record.category==='-'? '支出' : '收入'}</span>
            <span>{record.time}</span>
        </li>
        );
        }
        )}
        </LiWrapper>    
        
    </Layout>
)
}
export default Statistics;