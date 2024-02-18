import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
const BookInfo = () => {
  let { bookInfo } = useSelector(state => state.bookSlice)

  return (
    <Fragment>
      <h2>Book Details</h2>

      {
        bookInfo ?
          (
            <div>
              <p className='fw-bold'>Title: {bookInfo.title}</p>
              <p className='fw-light'>Description: {bookInfo.Description}</p>
              <p className='fst-italic'>Price: {bookInfo.price}</p>
            </div>
          )
          :
          (<div className='alert alert-secondary' role='alert'>
            There is no post selected yet. Please select!
          </div>
          )

      }

    </Fragment>
  );
};

export default BookInfo;
