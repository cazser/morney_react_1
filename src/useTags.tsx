
const useTags = ()=>{
    const getTags=()=> {
            if(JSON.parse(localStorage.getItem("tags") as string)){
                return JSON.parse(localStorage.getItem("tags") as string);
            } else{
                return ["衣","食","住","行"];
            }
    };

    const setTags=(newArray: string[])=>{
        localStorage.setItem("tags", JSON.stringify(newArray));
    }
    return{
        getTags: getTags,
        setTags
    }
}

export {useTags};