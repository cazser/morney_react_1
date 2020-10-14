import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout"
const HeaderWrapper = styled.header`
    text-align: center;
`//

const TableWrapper = styled.table`
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
    table td, table th
        {
            border: 1px solid #cad9ea;
            color: #666;
            height: 30px;
        }
        table thead th
        {
            background-color: #CCE8EB;
            width: 100px;
        }
        tr{
            border: 1px solid inherit;
        }
        table tr:nth-child(odd)
        {
            background: #fff;
        }
        table tr:nth-child(even)
        {
            background: #F5FAFA;
        }

`//
const Statistics = () => (
    <Layout>
        <HeaderWrapper>记录</HeaderWrapper>
        <br/>
            <TableWrapper>
            <thead>
            <tr>
                <th>
                    时间
                </th>
                <th>
                    支出/收入
                </th>
                <th>
                    金额（￥）
                </th>
                <th>
                    种类
                </th>
            </tr>
            </thead>
            </TableWrapper>
        
    </Layout>
)

export default Statistics;