//<!--------------------- БЛОК - 6 Как воспользоваться полученной ------------------->

import React from "react";
import { hoverTabs } from "./data";
function Block6() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex justify-content-center flex-wrap mt-5 mb-5">
          <h2>Как воспользоваться полученной электронной подарочной картой?</h2>
        </div>
        <div class="container d-flex justify-content-center flex-wrap">
          {hoverTabs.map((item) => {
            return (
              <>
                <div
                  class="card custom_index_block6_card_body"
                  style={{ width: "20rem", height: "30rem", margin: "15px" }}
                >
                  <div class="card-body">
                    <div class="mb-5">
                      <img
                        src={`${item.img}`}
                        class="rounded mx-auto d-block img-fluid custom_index_block6_card_body_hover_img"
                        alt="..."
                      />
                    </div>
                    <h6 class="card-subtitle mt-5 text-body-secondary">
                      {item.title}
                    </h6>
                  </div>
                </div>
              </>
            );
          })}

          <div class="container d-flex justify-content-around flex-wrap my-5">
            <a
              href="pages/catalog-page.html"
              class="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
            >
              Отправить карту
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Block6;
