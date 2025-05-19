import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductData } from '../Data'

function ProductByCat(props) {
    let filter = ProductData.filter(a =>a.category==props.cat)
    return (
        <>
            <section className='py-5'>
                <Container>
                    <h4 className='fw-bold'>Product of {props.cat} Category</h4>
                    <Row>
                        {filter.slice(0,4).map(a =>(
                            <Col lg={3} key={a.id}>
                                <div className="shadow p-2 border">
                                    <img src={a.image} className='w-100 pp' alt="" />
                                    <p className="fw-bold py-2">{a.title}</p>
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductByCat
