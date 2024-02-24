import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { islogInOut } from '../redux/Reducers/authSlice';

const Header = () => {
  const Dispatch = useDispatch()
  const { islogin } = useSelector(state => state.authSlice)
  const { error } = useSelector(state => state.bookSlice)
  return (
    <Fragment>
      {error &&
        <div className="alert alert-danger m-0 " style={{ textAlign: 'right' }} role="alert">
          لا يوجد اتصال
        </div>

      }
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit' onClick={() => Dispatch(islogInOut())}>
          {
            islogin ? "Log Out" : " Log In"
          }
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
