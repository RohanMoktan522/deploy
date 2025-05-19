import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductData } from '../Data'
import { Col, Container, Row } from 'react-bootstrap'

function Category() {
  let {categoryid}=useParams()
  let filterData = ProductData.filter(a=>a.category==categoryid)
  return (
    <>
      <Container>
        <h2>product of {categoryid}</h2>
        <Row>
          {filterData.map(a => (
            <Col lg={3} key={a.id}>
              <div className="shadow p-2 border">
                <img src={a.image} className='w-100 pp' alt="" />
                <p className="fw-bold py-2"><Link to={`/details/${a.id}`} className='link-dark text-decoration-none'>{a.title}</Link></p>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </Col>
          ))}

        </Row>
      </Container>
    </>
  )
}

export default Category
