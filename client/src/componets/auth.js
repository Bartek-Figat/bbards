import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationPage } from '../slice/authenticationSlice';

export const Authentication = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(authenticationPage(params));
        navigate('/login');
      } catch (err) {
        navigate('/login');
      }
    }
    fetchData();
  }, [dispatch, navigate, params]);

  return <div>...</div>;
};
