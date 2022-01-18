import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Tweets from '../twitter/Tweets';

const Home = () => {
  const [tweets, setTweets] = useState([])

  useEffect( () => {
    axios.get('/api/tweets')
      .then( res => {
        setTweets(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={4} >
          
        </Col>
        <Col xs={12} md={12} lg={10}>
          <>
            <Tweets tweets={tweets} />
          </>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;