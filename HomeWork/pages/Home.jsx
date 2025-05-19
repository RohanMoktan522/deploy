import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { categoryData } from '../Data'
import ProductByCat from '../Component/ProductByCat'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={3}>
              <ListGroup>
                {categoryData.map(a => (
                  <ListGroup.Item key={a}><Link to={`/category/${a}`}>{a}</Link></ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col lg={9}>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/d5bca32c-70ca-4dbd-a8d4-84109f2c70c8_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/5f1ef282-3dc5-4729-8493-6340fcd7d612_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/50b532d0-18b6-4d25-a6a4-9d97fb0b0e89_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/be4292e2-90ee-4235-8acb-5945ea47371a_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/06c3f91f-e65d-4156-83ca-0799dcd162b8_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/c6aeb09c-a6ac-47b7-99cb-0782cbbcb43a_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/4ce06249-5cda-4322-8d85-5a2b211e8179_NP-1976-688.png_2200x2200q80.png" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/fb22e4c3-c283-4dc3-90b6-25cc2137ead8_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.lazcdn.com/us/domino/23ae8409-1a94-41f2-a877-99d9d1fc87bb_NP-1976-688.jpg_2200x2200q80.jpg" className='w-100' alt="" /></SwiperSlide>
      </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <ProductByCat cat="electronics" />
        <ProductByCat cat="jewelery" />
        <ProductByCat cat="men's clothing" />
        <ProductByCat cat="women's clothing" />
      </section>
    </>
  )
}

export default Home
