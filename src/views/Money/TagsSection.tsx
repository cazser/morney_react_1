import React from 'react';
import styled from 'styled-components';
import {useTags} from "useTags";

const Wrapper = styled.section`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 12px 16px;
    flex-grow: 1;
    > ol{
        margin: 0 -12px;
    > li{
        background: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px;
        &.selected{
            background: #f60;
        }
    }
    }
    > button{
        background: none;
        border: none;
        border-bottom: 1px solid #333;
        poadding: 2px 4px;
        color: #666;
        margin-top: 8px;
    }
`
type Props ={
    value: string[];
    onChange:(selected: string[])=>void}
const TagsSection: React.FC<Props>=(props)=>{
    const {getTags, setTags} = useTags();
    const selectedTags = props.value;
    const onAddTag=()=>{
        const tagName = window.prompt('新标签的名称为');
        if(tagName!==null){
            setTags([...getTags(), tagName])
        }
    }
    const onToggleTag =(tag: string)=>{
        const index = selectedTags.indexOf(tag);
        if(index>=0){
            props.onChange( selectedTags.filter(t => t!==tag));
        }else{
            props.onChange([...selectedTags, tag]);
        }
    }

    const getClass=(tag: string)=>selectedTags.indexOf(tag)>=0? "selected" : ""
    return(
        <Wrapper>
            <ol>
                {   
                    getTags().map((tag: string)=>
                    <li key={tag}
                        onClick={
                            ()=>{onToggleTag(tag)}
                        }
                        className={getClass(tag)}>{tag}</li>)
                }
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
}
export {TagsSection};