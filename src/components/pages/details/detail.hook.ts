

import { useEffect } from "react";
import useGetPositionDetail from "./hooks/useGetDetail";
import { useParams } from 'next/navigation'

const useDetail = () =>{
    const params = useParams<{ id: string }>();
    const { data: detailData,
        isLoading: isDetailDataLoading,
        isError:isError,
    } = useGetPositionDetail({
        id: params?.id
        
    },);
    useEffect(()=>{
        console.log('log param', detailData)
    },[detailData])
    return{
        detailData,
        isDetailDataLoading
    }
}

export default useDetail;