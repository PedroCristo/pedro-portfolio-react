import PropTypes from "prop-types";

function Navbar({ logoStart, logoUrl, logoEnd, navbarData }) {
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href={logoUrl}>
            {logoStart}
            <span>{logoEnd}</span>
          </a>
        </div>
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
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoStart: PropTypes.string.isRequired,
  logoEnd: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  navbarData: PropTypes.string.isRequired,
};

export default Navbar;
