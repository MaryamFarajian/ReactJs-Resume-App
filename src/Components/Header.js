const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4">My Resume</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            href="#about"
            className="nav-link  link-secondary"
            aria-current="page"
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a href="#educations" className="nav-link link-secondary">
            Educations
          </a>
        </li>
        <li className="nav-item">
          <a href="#work-experiences" className="nav-link link-secondary">
            Work Experiences
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link link-secondary">
            Skills
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
