import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page404 set-bg-image">
      <div className="content-box">
        <h1 className="title">404</h1>
        <div className="content-item">
          <img src="../images/flags/gb-flag.png" alt="" />
          <h2>Page Not Foud</h2>
        </div>
        <div className="content-item">
          <img src="../images/flags/pt-flag.jpg" alt="" />
          <h2>Página Não Encontrada</h2>
        </div>
      </div>
      <div className="btn-box">
        <Link to="/" className="btn">
          Go Back
        </Link>
        <Link to="/home-pt" className="btn">
          Voltar
        </Link>
      </div>
    </div>
  );
};

PageNotFound.propTypes = {
  title404: PropTypes.string.isRequired,
  content404: PropTypes.string.isRequired,
};

export default PageNotFound;
