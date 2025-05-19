import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../Data'
import { Col, Container, Row } from 'react-bootstrap'

function Details() {
  let {productId}=useParams()
  let data=ProductData.find(a=>a.id==productId)
  return (
    <>
      <Container>
        <Row>
          <Col lg={3}>
          <img src={data.image} alt="" className="w-100" />
          </Col>
          <Col lg={9}>
          <h4>{data.title}</h4>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Details
