import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userReources } from '../slice/adminSlice';
import { AccountLayout } from '../container/account/account.main';

export const Admin = () => {
  const dispatch = useDispatch();
  const { fetchUser } = useSelector((state) => state);
  useEffect(() => {
    async function fetchData() {
      dispatch(userReources());
    }
    fetchData();
  }, [dispatch]);
  return (
    <>
      {fetchUser.user
        ? Object.values(fetchUser.user).map((details) => {
            return (
              <h1 key={details.email}>
                Hello: <span> {details.name} </span>{' '}
              </h1>
            );
          })
        : 'no data'}
      <AccountLayout>
        <Outlet />
      </AccountLayout>
    </>
  );
};
