import { useSelector } from "react-redux";
import logoMono from "../../assets/img/logoMono.png";
import { navDropLincks } from "./data";

function NavBar() {
  const cartValueReducer = useSelector((state) => state.cartValueReducer ?? 0);
  return (
    <>
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ position: "fixed", backgroundColor: "red", zIndex: 999 }}
      >
        <h5 style={{ color: "white" }}>COMING SOON. Сайт в разработке.</h5>
      </div>
      <nav className="mb-5">
        <div className="shadow-lg">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container px-0 d-block">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none nav-menu__logo-mobile">
                    <a href="/">
                      <img src={logoMono} width="150" height="150" alt="" />
                    </a>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse flex-column align-items-start py-3"
                  id="navbarNavDropdown"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center nav-menu__logo-desktop">
                      <a href="/">
                        <img src={logoMono} width="160" height="160" alt="" />
                      </a>
                    </div>

                    <div className="w-100">
                      <div className="d-flex flex-wrap justify-content-end">
                        <div className="d-flex align-items-center flex-wrap navbar-collapse__menu-item mb-3">
                          <a
                            href="/login"
                            className="btn btn-light rounded-5 accent-colors text-accent-colors"
                          >
                            Вход
                          </a>

                          <a
                            href="/shopping-cart"
                            className="btn btn-light position-relative m-3 rounded-5 accent-colors"
                          >
                            <i className="bi bi-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {cartValueReducer}
                              <span className="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </a>
                          <div>
                            <select
                              className="form-select"
                              id="floatingSelect"
                              aria-label="Floating label select example"
                            >
                              <option selected>Русский</option>
                              <option value="1">Английский</option>
                            </select>
                          </div>
                          <div className="w-70 d-flex justify-content-around align-items-center m-3 flex-wrap">
                            <h4>8 800 55 35 35</h4>
                          </div>
                        </div>
                      </div>
                      <ul className="navbar-nav d-flex flex-wrap justify-content-around">
                        {navDropLincks.map((item) => {
                          return (
                            <li key={item.id} className="nav-item dropdown">
                              <button
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {item.name}
                              </button>

                              <ul className="dropdown-menu">
                                {item.links.map((item) => {
                                  return (
                                    <li key={item.id}>
                                      <a
                                        className="dropdown-item"
                                        href={item.url}
                                      >
                                        {item.text}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
