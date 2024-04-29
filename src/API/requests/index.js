import axios from "axios";
import BASE_URL, { endpoints } from "../constans";

export async function getAll(endpoint) {
    let result={
        data:null,
        error:null,
    };
    await axios.get(BASE_URL + endpoint).then((res)=>{
        result.data=res.data
    }).catch((err)=>{
        result.error=err
    })
    return result;
}

export async function delOne(endpoint,id){
    let result={
        data:null,
        error:null,
    };
    await axios.delete(BASE_URL + endpoint+`/${id}`).then((res)=>{
        result.data=res.data
    }).catch((err)=>{
        result.error=err
    })
    return result;
}

export async function addOne(endpoint,obj){
    let result={
        data:null,
        error:null,
    };
    await axios.post(BASE_URL + endpoint,obj).then((res)=>{
        result.data=res.data
    }).catch((err)=>{
        result.error=err
    })
    return result;
}