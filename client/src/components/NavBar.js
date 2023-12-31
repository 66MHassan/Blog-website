import {Link} from "react-router-dom";
import 'D:/Blog-website/client/node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function NavBar (){
    return(

        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">BLOG-WEBSITE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-sm-right">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="PostCreation">Add Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="ListData">All Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="AboutUs">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contact">Contact us</Link>
        </li>
        {/* <li className="nav-item dropdown"> */}
          {/* <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul> */}
        {/* </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}