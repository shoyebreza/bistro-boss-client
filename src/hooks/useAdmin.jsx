import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
   const {user, loading} = useAuth();
   const axiosSecure = useAxiosSecure();
  const {data : isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data;
    }
  });

  return { isAdmin: isAdmin?.isAdmin, isAdminLoading: isAdminLoading };
};

export default useAdmin;