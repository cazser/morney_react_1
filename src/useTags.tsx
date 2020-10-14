import { useState } from "react";

const useTags = ()=>{
    const localState = localStorage.getItem('tags')===null ? ['衣','食','住','行']:
                                    JSON.parse(localStorage.getItem('tags') as string);
    const [tags, _setTags] = useState(localState);
    const setTags=(newTags: any)=>{
        localStorage.setItem("tags", JSON.stringify(newTags));
        _setTags(newTags);
    }

    const getTags=()=>{
        return (
        localStorage.getItem('tags')===null ? ['衣','食','住','行']:
        JSON.parse(localStorage.getItem('tags') as string)
        );
    }
    return{
        getTags: getTags,
        setTags
    }
}

export {useTags};