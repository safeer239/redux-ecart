import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';


function Cart() {

  const cartArray =useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  
  const [total,setTotal]=useState()

  const getCartTotal =()=>{
    if(cartArray.length > 0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  const dispatch = useDispatch()
  const navigate =useNavigate()

  const handleCartEmpty=()=>{
    dispatch(emptyCart())
    alert('Your order has been placed successfully')
    navigate('/')
  }
  return (
    <>
      <Row className='p-3'>
        <Col>
          {
            cartArray.length>0?
            <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product Name</th>
                <th scope='col'>Image</th>
                <th scope='col'>Price</th>
                <th scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                cartArray.map((item,index)=>(
                  <tr>
                <th scope='row'>{index+1}</th>
                <td>{item.title}</td>
                <td><img src={item.thumbnail} width={'100px'} height={'100px'} alt="" /></td>
                <td>$ {item.price}</td>
                <td><i onClick={()=>dispatch(deleteFromCart(item.id))}  className='fa-solid fa-trash text-danger'></i></td>
              </tr>
                ))
              }
             
            </MDBTableBody>
          </MDBTable>
            :
            <div className='text-center' style={{backgroundColor:'#FECDA6'}}>
        <img src="https://media.giphy.com/media/U8MXoKqFlTtfsOYrnl/giphy.gif" style={{height:'450px'}} alt="" />
        <h1>Your Cart is Empty</h1>
        <Link to={'/'}>
          <MDBBtn className='mb-5'>
          Back to Home
          </MDBBtn>
       
        </Link>
      </div>
          }
        </Col>
        <Col>
        <div className='container border rounded shadow m-3'>
          <h1 className='text-center m-4 '>Cart Summary</h1>
          <h3>Total Cart Items:{cartArray.length}</h3>
          <h2>Total Price:$ {total}</h2>
            <div className='text-center '>
              <button onClick={handleCartEmpty} className='btn btn-success'>CheckOut</button>
            </div>
          
        </div>
        </Col>
      </Row>
    </>
  )
}

export default Cart