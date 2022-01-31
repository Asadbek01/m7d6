import React from 'react'
import { Container, Row, Col, Card, Jumbotron, } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFav } from '../store/actions'

const  Favourites =()=> {
  const favourites = useSelector(state=>state.favourites)
  const dispatch = useDispatch()
  
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>Welcome to Favourites Page</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio.
              </p>
              <p>
                <Link to="/" className="btn btn-primary">Back to Main</Link>
              </p>
            </Jumbotron>



            {
              favourites.elements.map(f => (
                <div>
                  <Card className="mt-3">
                    <Card.Body >
                     
                      <Trash color='red' size={20} className='mx-2' onClick={() => dispatch(removeFromFav(f))} />
                      <a href={f.url}>{f}</a>
                          
                    </Card.Body>
                  </Card>
                </div>
              ))

            }

          </Col>
        </Row>
      </Container>
    )
  }


export default Favourites