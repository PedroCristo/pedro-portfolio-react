import PropTypes from "prop-types";

function Navbar({ logoStart, logoUrl, logoEnd, navbarData, thanksPage, errorPage404 }) {
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href={logoUrl}>
            {logoStart}
            <span>{logoEnd}</span>
          </a>
        </div>
        {!thanksPage && !errorPage404 && (
          <ul className="menu">
            {navbarData.map((item) => (
              <li className={item.classnameLi} key={item.id}>
                <a
                  data-after={item.id === 7 ? item.dataAfter : item.name}
                  className={item.classnameA}
                  href={item.linkUrl}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        {!thanksPage && !errorPage404 && (
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoStart: PropTypes.string.isRequired,
  logoEnd: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  navbarData: PropTypes.string.isRequired,
  thanksPage: PropTypes.string.isRequired,
  errorPage404 : PropTypes.string.isRequired,
};

export default Navbar;
