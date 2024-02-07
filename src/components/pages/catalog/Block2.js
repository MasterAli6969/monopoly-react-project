// <!--------------------- Левый SIDEBAR ------------------->
import React from "react";
import { sideBarItemsCart } from "./data";
function Block2() {
  return (
    <>
      <div class="col-md-3 col-sm-12 mb-5 p-0">
        <form class="d-flex flex-column mb-3">
          <input
            class="form-control mb-3 rounded-5 form-control-search__input"
            type="search"
            placeholder="Поиск"
            aria-label="Search"
          />
          {sideBarItemsCart.map((item) => {
            return (
              <>
                <div key={item.id} class="dropdown mb-3">
                  <button
                    class="w-100 btn btn-light btn-lg dropdown-toggle rounded-5 accent-colors text-accent-colors"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.name}
                  </button>
                  <ul class="dropdown-menu dropdown-menu__height">
                    {item.links.map((item) => {
                      return (
                        <>
                          <li key={item.id}>
                            <a class="dropdown-item" href={`${item.url}`}>
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
              class="btn btn-light rounded-5 over-accent-color text-accent-colors w-100 mt-5 fs-5"
            >
              Применить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Block2;
