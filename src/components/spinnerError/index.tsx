import Spinner from 'react-bootstrap/Spinner';

const SpinnerError = () => {
    return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
}

export default SpinnerError