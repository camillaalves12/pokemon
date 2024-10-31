import Spinner from 'react-bootstrap/Spinner';
import S from './styles.module.scss';

const SpinnerError = () => {
    return (
        <Spinner animation="border" role="status" className={S.spinnerLoading}>
        </Spinner>
      );
}

export default SpinnerError