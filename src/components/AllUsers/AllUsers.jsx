import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDeleteUser = async (id) => {
        await axiosSecure.delete(`/users/${id}`);
        queryClient.invalidateQueries({ queryKey: ['users'] });
    };

    const handleMakeAdmin = async (user) => {
        await axiosSecure.patch(`/users/admin/${user._id}`);
        queryClient.invalidateQueries({ queryKey: ['users'] });
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-2 border-b border-base-300 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-3xl font-semibold">All Users</h2>
                <h2 className="text-xl font-bold sm:text-2xl">Total Users: {users.length}</h2>
            </div>
            <div className="mt-6 overflow-x-auto rounded-lg border border-base-300 bg-base-100">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Sl#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name || user?.userInfo?.name || 'N/A'}</td>
                                <td>{user.email || user?.userInfo?.email || 'N/A'}</td>
                                <td> <button onClick={()=> handleMakeAdmin(user)} className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white"><FaUsers className="text-white font-2xl" /></button></td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="btn btn-warning btn-xs"
                                        aria-label={`Delete ${user.name}`}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
