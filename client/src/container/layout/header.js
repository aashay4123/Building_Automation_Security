import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../components/helper";
import Logo from "../../images/logo.png";

const Header = ({ match, history }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#eaa001", textDecoration: "none" };
    } else {
      return { color: "#3f435e", textDecoration: "none" };
    }
  };

  return (
    <Fragment>
      <header className="header">
        <nav className="user-nav">
          <div className="user-nav__first">
            <li className="user-nav__user-head ">
              <Link
                to="/"
                className="user-nav__user-head-link"
                style={isActive("/")}
              >
                <img src={Logo} alt="Building logo" className="logo" /> Home
              </Link>
            </li>
          </div>
          {!isAuth() && (
            <div className="user-nav__last">
              <li className=" user-nav__user-head-link">
                <Link to="/signin" className="" style={isActive("/signin")}>
                  signin
                </Link>
              </li>
            </div>
          )}
          {isAuth() && (
            <div className="user-nav__last">
              <li className=" user-nav__user-head-link">
                <Link to="/house" className="" style={isActive("/house")}>
                  My Home
                </Link>
              </li>
              <button className="user-nav__icon-box">
                <svg className="user-nav__notification-svg">
                  <use
                    className="svg__use-bell"
                    xlinkHref={
                      window.location.origin + "/images/sprite.svg#icon-bell"
                    }
                  ></use>
                </svg>
                <span className="user-nav__notification">3</span>
              </button>
              <div className="user-nav__user">
                <img
                  src={
                    window.location.origin + `/images/users/${isAuth().photo}`
                  }
                  alt="User "
                  className="user-nav__user-photo"
                />
                <li className="user-nav__user-head-link">
                  <Link to="/profile" className="" style={isActive("/profile")}>
                    {isAuth().name}
                  </Link>
                </li>
              </div>
              <li className=" user-nav__user-head-link">
                <span
                  className=""
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  signout
                </span>
              </li>
            </div>
          )}
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;

// {isAuth() && isAuth().role === "admin" && (
//   <div className="user-nav__last">
//     <li className=" user-nav__user-head-link">
//       <Link to="/house" className="" style={isActive("/house")}>
//         Dashboard
//       </Link>
//     </li>
//     <button className="user-nav__icon-box">
//       <svg className="user-nav__notification-svg">
//         <use
//           className="svg__use-bell"
//           xlinkHref={
//             window.location.origin + "/images/sprite.svg#icon-bell"
//           }
//         ></use>
//       </svg>
//       <span className="user-nav__notification">3</span>
//     </button>

//     <div className="user-nav__user">
//       <img
//         src={window.location.origin + "/images/user.jpg"}
//         alt="User "
//         className="user-nav__user-photo"
//       ></img>
//       <li className="user-nav__user-head-link">
//         <Link to="/profile" className="" style={isActive("/profile")}>
//           {isAuth().name}
//         </Link>
//       </li>
//     </div>
//     <li className="">
//       <span
//         className=" user-nav__user-head-link"
//         onClick={() => {
//           signout(() => {
//             history.push("/");
//           });
//         }}
//       >
//         signout
//       </span>
//     </li>
//   </div>
// )}
