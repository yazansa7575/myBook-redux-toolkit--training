import React, { Fragment } from 'react';
import './book.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBook } from '../../redux/Reducers/bookSlice';

const BooksList = ({ dataBooks, islogin }) => {
  const { error } = useSelector(state => state.bookSlice)
  const dispatch = useDispatch()


  return (
    <div>
      <h2>Books List</h2>
      <ul className='list-group '>
        {
          dataBooks ? (
            dataBooks.map((e) => {
              return (
                <Fragment key={e.id}>
                  <li className='list-group-item d-flex  justify-content-between align-items-center'>
                    <div>
                      {e.id}
                    </div>
                    <div>
                      {e.title}
                    </div>
                    <span>
                      {e.price}
                    </span>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-primary' onClick={() => dispatch(getBook(e))}>
                        Read
                      </button>
                      <button type='button' className='btn btn-danger' disabled={!islogin} onClick={() => dispatch(deleteBook(e)).unwrap()
                        .then((originalPromiseResult) => {
                          console.log(originalPromiseResult);
                        })
                        .catch((rejectedValueOrSerializedError) => {
                          console.log(rejectedValueOrSerializedError);

                        })}>
                        Delete
                      </button>
                    </div>
                  </li>
                </Fragment>
              )
            }

            )
          ) :

            (
              error ?
                (<div className="alert alert-danger m-0 " style={{ textAlign: 'right' }} role="alert">
                  لا يوجد اتصال
                </div>) :
                (<div className="lds-spinner "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
            )

        }



      </ul>
    </div>
  )
}

export default BooksList;
