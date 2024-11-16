import { getPosition } from "@/services/services";
import { useQuery } from "@tanstack/react-query"; 

type payload = {
    page?:string | number,
    location?:string,
    description?:string,
    fulltime?:boolean,
}
const useGetPositionData = 
      (payload: payload) => {
    const query = useQuery({
      queryFn: async () => {
        const res = await getPosition(payload);
        return res || null;
      },
      queryKey: ['position-data',payload],
    },);
   return query
  };

  export default useGetPositionData;