import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';


const NavWrapper = styled.nav`
    box-shadow:0 0 3px rgba(0,0,0,0.25);
    line-height: 24px;
    > ul{
        display: flex;
        >li{
            width: 33.33%;
            text-align: center;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > .item{
                padding: 4px 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                &.selected{
                    color: orange;
                    .icon{
                    fill: orange;
                    }
                }
                > .icon{
                    width: 24px;
                    heigth: 24px;
                }
            }
        }
    }
`
const Nav = ()=>{
    return (
        <NavWrapper>
        <ul>
        <li>
            <NavLink to="/tags" className="item"
                        activeClassName="selected">  
            <Icon name="labels"/>
                标签页
            </NavLink>
            
        </li>
        <li>
            <NavLink to="/money" className="item"
                        activeClassName="selected">  
            <Icon name="coin"/>
            记账页
            </NavLink>
        </li>
        <li>
            <NavLink to="/statistics" className="item"
                        activeClassName="selected">  
            <Icon name="chart"/>
            统计页
            </NavLink>
        </li>
        </ul>
        </NavWrapper>
    )
}
export default Nav;