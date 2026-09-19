import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
   const {user} = useAuth();
   const axiosSecure = useAxiosSecure();
  const {data : isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: () => {
        const res = axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data;
    }
  });

  return { isAdmin: isAdmin?.isAdmin, isAdminLoading: isAdminLoading };
};

export default useAdmin;