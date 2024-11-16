import { useEffect, useState } from "react";
import useGetPositionData from "./hooks/useGetPosition";

const useGetJobs = () =>{
    const [data, setData] = useState<any[]>([]);
    const [payload,setPayload] = useState({
        page:1
    })
    const [filter,setFilter] = useState({});
    const [lazyLoader, setLazyLoader] = useState(true)

    const { data: jobData,
        isLoading: isjobDataLoading,
        isError:isError,
    } = useGetPositionData(payload);
 
    useEffect(()=>{
        setData([])
        if(jobData){
            setData((prevData) => [...prevData, ...jobData]);
        }
    },[jobData,payload])

    const onSearch = () =>{
        if(payload !== filter){
            setData([]);
        }
        setPayload({...filter, page:1});
    }

    return({
        data,
        filter,
        setFilter,
        onSearch,
        setPayload,
        payload,
        isjobDataLoading
    })
}

export default useGetJobs;