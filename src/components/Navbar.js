import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`} data-bs-theme={props.mode}>
    <nav className={`navbar navbar-expand-lg bg-${props.theme} border-bottom border-body`} data-bs-theme={props.theme}>
      <div className="container-fluid">
        <a className="navbar-brand" href="">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" exact to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page"  href="">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" exact to="/about">{props.aboutText}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div> */}

          <div>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Theme</label>
              <input type="radio" className="btn-check" name="options" id="option1" onClick={() => props.toggleTheme('light')} autoComplete="off" />
              <label className="btn btn-light m-1" htmlFor="option1">Light</label>

              <input type="radio" className="btn-check" name="options" id="option2" onClick={() => props.toggleTheme('dark')} autoComplete="off" />
              <label className="btn btn-dark m-1" htmlFor="option2">Dark</label>

              <input type="radio" className="btn-check" name="options" id="option3" onClick={() => props.toggleTheme('primary')} autoComplete="off" />
              <label className="btn btn-primary m-1" htmlFor="option3">Blue</label>

              <input type="radio" className="btn-check" name="options" id="option4" onClick={() => props.toggleTheme('success')} autoComplete="off" />
              <label className="btn btn-success m-1" htmlFor="option4">Green</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: 'Textutils',
//   aboutText: 'About',
// };
