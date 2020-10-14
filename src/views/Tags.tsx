import React from "react";
import { useTags } from "useTags";
import Layout from "../components/Layout"
import styled from 'styled-components';
import Icon from "components/Icon";


const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`//

const Button = styled.button`
  font-size: 18px;
  border: none; padding: 8px 12px;
  background: #767676; border-radius: 4px;
  color: white;
`//

const Center=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`//

const Space = styled.div`
height: 16px;
`//
const Tags = () => {
  const {tags, setTags} = useTags();
  const deleteTag = (tag: string)=>{
    setTags(tags.filter(t => t!==tag))
  }
  return(
    <Layout>
      <TagList>
        {tags.map(tag=>
          {
          return(
          <li key={tag}>
            <span>{tag}</span>
          <div onClick={()=>deleteTag(tag)}>
          <Icon name="delete"/>
          </div>
          </li>
          );
        }
          )}
      </TagList>
      <Center>
        <Space/>
        <Button>新增标签</Button>
        <Space/>
      </Center>
    </Layout>
  )
}

  export default Tags;