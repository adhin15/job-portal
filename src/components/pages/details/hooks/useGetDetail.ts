import { getDetail } from "@/services/services";
import { useQuery } from "@tanstack/react-query"; 

type payload = {
    id?:string
}
const useGetPositionDetail = 
      (payload: payload) => {
    const query = useQuery({
      queryFn: async () => {
        const res = await getDetail(payload);
        return res || null;
      },
      queryKey: ['detail-data',payload],
    },);
   return query
  };

  export default useGetPositionDetail;