import { Link } from 'react-router-dom';
import "./Error.scss";
import errorBg from '../../assets/images/background/error-bg.jpg';

const Error = () => {
  return (
    <>
      <div
        className="loginBox"
        style={{ background: `url(${errorBg}) no-repeat bottom center #fff` }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="text-center">
            <h1 className='error-title'>404</h1>
            <div className="my-3">
              <h4>PAGE NOT FOUND !</h4>
              <span className="text-muted d-block fs-5">
                You seem to be trying to find his way home{' '}
              </span>
            </div>

            <Link to="/" className="btn btn-danger">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
