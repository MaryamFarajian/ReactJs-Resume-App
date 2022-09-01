const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      
      <span className="mb-3 mb-md-0 text-muted">© 2022 Maryam Farajian</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://linkedin.com/in/maryam-farajian-4561a518a" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="https://github.com/maryamfarajian" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a></li>
    </ul>
  </footer>
  );
};

export default Footer;
