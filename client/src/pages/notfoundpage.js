import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>PAGE NOT FOUND</h1>
          <h2>ERROR: 404</h2>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <h1>
            <Link to="/home">Go to Home </Link>
          </h1>
        </Jumbotron>
      </div>
    );
  }
}
export default NotFoundPage;
