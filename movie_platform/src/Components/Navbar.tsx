import "./Navbar.css";
import logo from "D:/My_Projects/movie_platform/movie_platform/public/SSoap2Day.png";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        {/* <div className="image"> */}
        <div className="logo-div">
          <img
            src={logo}
            alt=""
            className="img-logo"
            width={"80px"}
            height={"50px"}
          />
        </div>
        <div className="NavbarNavigation">
          <a href="/" className="NavbarNavigationLink">
            HOME
          </a>
          <a
            href="D:\My_Projects\movie_platform\movie_platform\src\Components\LatestMovies.tsx"
            className="NavbarNavigationLink"
          >
            LATEST MOVIES
          </a>

          <a href="" className="NavbarNavigationLink">
            TOP MOVIES
          </a>

          <a href="" className="NavbarNavigationLink">
            TV SHOWS
          </a>

          <a href="" className="NavbarNavigationLink">
            ABOUT
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;
