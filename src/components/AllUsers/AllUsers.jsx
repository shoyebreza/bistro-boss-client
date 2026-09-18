import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    });

    const handleDeleteUser = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.delete(`/users/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Delete failed',
                        text: 'The server could not delete this user.'
                    });
                });
                queryClient.invalidateQueries({ queryKey: ['users'] });
            }
        });
    };

    const handleMakeAdmin = async user => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to make ${user.name || user?.userInfo?.name || 'this user'} an admin?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make admin!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name || user?.userInfo?.name || 'User'} is now an admin!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.error('Error making user admin:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Make Admin failed',
                        text: 'The server could not make this user an admin.'
                    });
                });
                queryClient.invalidateQueries({ queryKey: ['users'] });
            }
        });
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
                                <td> { user.role === 'admin' ? 'Admin' : <button onClick={()=> handleMakeAdmin(user)} className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white"><FaUsers className="text-white font-2xl" /></button>}</td>
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
