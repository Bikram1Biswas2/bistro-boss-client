import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user,loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false, isPending: isAdminLoading, error } = useQuery({
        queryKey: user?.email ? ['isAdmin', user.email] : [],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        },
        enabled: !!user?.email // Ensures query doesn't run if user is null or undefined
    });

    return  [isAdmin,isAdminLoading];
};

export default useAdmin;
