import React, { useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import {Row,Col} from 'react-bootstrap'
  import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';



function Home() {
  const fetchData=useFetch("https://dummyjson.com/products")
  console.log(fetchData);

  const dispatch =useDispatch()
  return (
    <div>
        <Row>
            {
              fetchData?.length>0?fetchData.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={3}>
                <MDBCard className='shadow' style={{width:'280px',height:'400px',margin:'20px'}}>
          <MDBCardImage style={{width:'100%', height:'200px', padding:'20px'}} src={item.thumbnail} position='top' alt='...' />
          <MDBCardBody className='text-center'>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle className='text-success' style={{fontSize:'30px'}}>$ {item.price}</MDBCardTitle>

            <MDBCardText>
              {item.description.slice(0,38)}
            </MDBCardText>
            <div className='d-flex gap-5 justify-content-center'>
            <MDBBtn onClick={()=>dispatch(addToWishlist(item))} color='danger' ><i className='fa-solid fa-heart text-light'></i></MDBBtn>
            <MDBBtn onClick={()=>dispatch(addToCart(item))} color='info' href='#'><i className='fa-solid fa-cart-plus text-light'></i></MDBBtn>
            </div>
    
          </MDBCardBody>
        </MDBCard>
                </Col>
              )):"No data available"
            }
        </Row>
        
    </div>
  )
}

export default Home