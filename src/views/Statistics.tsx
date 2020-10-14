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
            max-width: 30%;
        }
    }
`//
const Statistics = () =>{ 
    const {getRecordList, setRecordList}= useRecordList();
    return(
    <Layout>
        <HeaderWrapper>记录</HeaderWrapper>

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