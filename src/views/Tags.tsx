import React from "react";
import { useTags } from "useTags";
import Layout from "../components/Layout"
import styled from 'styled-components';


const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    padding: 12px 16px;
  }
`//



const Tags = () => {
  const {tags, setTags} = useTags();
  return(
    <Layout>
      <TagList>
        {tags.map(tag=>
          <li key={tag}>{tag}</li>)}
      </TagList>
    </Layout>
  )
}

  export default Tags;