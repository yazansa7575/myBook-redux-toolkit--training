import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { getBooks } from '../../redux/Reducers/bookSlice';

import './book.css';

const PostContainer = () => {
  const { islogin } = useSelector(state => state.authSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooks())
  }, [])
  const dataBooks = useSelector(state => state.bookSlice.books)


  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row my-5 '>
        <div className='col-md-6 col-sm-12'>
          <BooksList dataBooks={dataBooks} islogin={islogin} />
        </div>
        <div className='col-md-6 col-sm-12 side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
