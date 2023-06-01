import React, { useEffect, useMemo, useState } from 'react';
import DataTape from '../module/DataTape/DataTape';
import UsersGet from '../../API/get_request/UsersGet';
import TokenGet from '../../localStorage/TokenGet';
import UsersCard from '../module/users_card/UsersCard';
import './Users.css';
import getTotalPage from '../../utils/getTotalPage';
import Pagination from '@mui/material/Pagination';
import { createPagination } from '../../utils/createPagination';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 13;
    const [totalPage, setTotalPage] = useState(1);
    const lastIndexUser = page * limit;
    const firstIndexUser = lastIndexUser - limit;

    const handleChange = (event, value) => {
        setPage(value);
    };

    const pageWithUsers = useMemo(() => {
        return createPagination(users, firstIndexUser, lastIndexUser);
    }, [users, firstIndexUser, lastIndexUser]);

    const getUsers = async() => {
        const token = TokenGet.tryGetToken();
        const res = await UsersGet.tryGetUsers(token);

        if (res.length !== 0) {
            setTotalPage(getTotalPage(res.length, limit))
            setUsers(res);
        };
    };

    useEffect(() => {
        getUsers();
    }, []);

    return users.length !== 0? 
    ( 
        <DataTape name="Users" type="users">
            <div className='datatape__users_list'>
            {
                users? 
                pageWithUsers.map((item, index) => 
                    <UsersCard getUsers={getUsers} key={index} data={item} />
                    ):
                "loading..."
            }
            </div>
            <div className='datatape__users_footer'>
                <Pagination page={page} count={totalPage} onChange={handleChange} color="primary" />
            </div>
        </DataTape>
     ) :
        <DataTape name="Users">
            Loading...
        </DataTape>
    ;
};
 
export default Users;