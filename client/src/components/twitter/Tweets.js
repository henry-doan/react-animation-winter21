import { ListGroup, Image } from 'react-bootstrap';

const Tweets = ({ tweets }) => (
  <ListGroup>
    { tweets.map( tweet =>
      <ListGroup.Item 
        key={tweet.id} as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div>
          <div>{tweet.user.name}</div>
            {tweet.text}
            <br />
            <a href={tweet.user.url} target="_blank">@{tweet.user.screen_name}</a>
            <Image thumbnail src={tweet.user.profile_image_url} />
        </div>
      </ListGroup.Item>
    )}
  </ListGroup>
)

export default Tweets;