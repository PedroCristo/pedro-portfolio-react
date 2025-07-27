import { Link } from "react-router-dom";
import NavbarEn from "../../components/en/NavbarEn";

const PageNotFound = () => {
  return (
    <>
    <NavbarEn errorPage404={true} />
    <div className="page404 set-bg-image">
      <div className="content-box">
        <h1 className="title">404</h1>
        <div className="content-item">
          <img src="../images/flags/gb-flag.png" alt="Flag IMage" />
          <h2>Page Not Foud</h2>
        </div>
        <div className="content-item">
          <img src="../images/flags/pt-flag.jpg" alt="Flag IMage" />
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
    </>
  );
};

export default PageNotFound;
