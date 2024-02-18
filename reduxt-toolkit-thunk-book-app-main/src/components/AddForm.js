import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../redux/Reducers/bookSlice';




const Addform = () => {
  const { islogin } = useSelector(state => state.authSlice)

  const titleV = useRef()
  const DescriptionV = useRef()
  const priceV = useRef()

  const Dispatch = useDispatch()
  
  const handelClickSub = (e) => {

    if (priceV.current.value == "") {
      return false
    }
    if (titleV.current.value == "") {
      return false
    }

    let obj = {
      title: titleV.current.value,
      price: priceV.current.value,
      Description: DescriptionV.current.value,
    }
    e.preventDefault()
    Dispatch(insertBook(obj))
    priceV.current.value = ""
    titleV.current.value = ""
    DescriptionV.current.value = ""


  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input ref={titleV} type='text' className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input ref={priceV} type='number' className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              ref={DescriptionV}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button onClick={(e) => handelClickSub(e)} className='btn btn-primary' disabled={!islogin}>
            Submit
          </button>
        </form>
      </div>
    </div >
  );
};

export default Addform;
