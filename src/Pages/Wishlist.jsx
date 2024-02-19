import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';



function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const handleWishlist=(item) => {
    //ad to cart
    dispatch(addToCart(item))
    //delete from wishlist
    dispatch(deleteFromWishlist(item.id))
  }


  const dispatch =useDispatch()
  return (
    <div>
        <Row>
      {
        wishlistArray.length>0?wishlistArray.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='shadow' style={{width:'280px',height:'380px',margin:'20px'}}>
    <MDBCardImage style={{width:'100%', height:'200px', padding:'20px'}} src={item.thumbnail} position='top' alt='...' />
    <MDBCardBody className='text-center'>
      <MDBCardTitle>{item.title}</MDBCardTitle>
      <MDBCardTitle className='text-success' style={{fontSize:'30px'}}>$ {item.price}</MDBCardTitle>

      <MDBCardText>
        {item.description.slice(0,38)}
      </MDBCardText>
      <div className='d-flex gap-5 justify-content-center'>
      <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))} color='danger' href='#'><i className='fa-solid fa-trash text-light'></i></MDBBtn>
      <MDBBtn onClick={()=>handleWishlist(item)} color='info' href='#'><i className='fa-solid fa-cart-plus text-light'></i></MDBBtn>
      </div>

    </MDBCardBody>
  </MDBCard>
          </Col>
        )):
        <div className='text-center' style={{backgroundColor:'#FECDA6'}}>
        <img src="https://media.giphy.com/media/U8MXoKqFlTtfsOYrnl/giphy.gif" style={{height:'450px'}} alt="" />
        <h1>Your Wishlist is Empty</h1>
        <Link to={'/'}>
          <MDBBtn className='mb-5'>
          Back to Home
          </MDBBtn>
       
        </Link>
      </div>
         

        
       
      }
        </Row>
    </div>
  )
}

export default Wishlist