/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import PrimeClientsMock from './PrimeClientsMock';

function PrimeClients() {
    return (
        <>
            <section className='prime-clientbox'>
                <Container>
                    <Row>
                        <Col xl={4} md={4} sm={12} >
                            <div className='sectionsix-texts'>
                                <p>Brands Who Trust Us With Their</p>
                                <h3>Advertising Campaigns</h3>
                            </div>
                        </Col>
                        <Col xl={8} md={8} sm={12} >
                            <div>
                                <PrimeClientsMock/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};
export default PrimeClients
