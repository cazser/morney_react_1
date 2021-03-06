import { useState } from "react"
import { Record } from "d";
const useRecordList = ()=>{
    let localData = JSON.parse(localStorage.getItem("recordList") as string);
    const [recordList, _setRecordList] = useState(localData as Record[]) ;
    const setRecordList = (newList: Array<Record>)=>{
        localStorage.setItem('recordList', JSON.stringify(newList));
        _setRecordList(newList);
    }
    const getRecordList= ()=>{let obj = JSON.parse(localStorage.getItem("recordList") as string)
    console.log(obj);
    return obj;
    }
    return{
        getRecordList,
        setRecordList
    }

}

export {useRecordList};