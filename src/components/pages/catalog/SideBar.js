// <!--------------------- Левый SIDEBAR ------------------->
import React from "react";
import { sideBarItemsCart } from "./data";
function SideBar() {
  return (
    <>
      <div className="col-md-3 col-sm-12 mb-5 p-0">
        <form className="d-flex flex-column mb-3">
          <input
            className="form-control mb-3 rounded-5 form-control-search__input"
            type="search"
            placeholder="Поиск"
            aria-label="Search"
          />
          {sideBarItemsCart.map((item) => {
            return (
              <>
                <div key={item.id} className="dropdown mb-3">
                  <button
                    className="w-100 btn btn-light btn-lg dropdown-toggle rounded-5 accent-colors text-accent-colors"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.name}
                  </button>
                  <ul className="dropdown-menu dropdown-menu__height">
                    {item.links.map((item) => {
                      return (
                        <>
                          <li key={item.id}>
                            <a className="dropdown-item" href={`${item.url}`}>
                              {item.text}
                            </a>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
          <div>
            <button
              type="submit"
              href="user-profile.html"
              className="btn btn-light rounded-5 over-accent-color text-accent-colors w-100 mt-5 fs-5"
            >
              Применить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SideBar;
