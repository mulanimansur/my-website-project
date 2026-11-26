const Header = () => {
    return(
        <>
        <nav ClassName="navbar md:navbar-expand bg-1">
  <div ClassName="container-fluid">
    <Navlink to="/" ClassName="navbar-brand" href="#">my website</Navlink>
    <button ClassName="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    
      <div ClassName="drawer-body mb-2 md:mb-0">
        <ul ClassName="nav navbar-nav me-auto">
          <li ClassName="nav-item">
            <NavLink to="/Home" ClassName="nav-link to=">Home</NavLink>
           
          </li>
           <li ClassName="nav-item">
            <NavLink to="/About" ClassName="nav-link to=">About</NavLink>
           
          </li>
           <li ClassName="nav-item">
            <NavLink to="/Services" ClassName="nav-link to=">Services</NavLink>
           
          </li>
           <li ClassName="nav-item">
            <NavLink to="Contact/" ClassName="nav-link to=">Contact </NavLink>
           
          </li>
          </ul>
   </div>     
  </div>
</nav>
        </>
    );
};

export default Header