//<!--------------------- БЛОК - 7 Подарки к Новому году с Giftery! ------------------->

import React from "react";
function Block7() {
  return (
    <>
      <div class="col-12 mt-5 mb-5 pt-5 pb-5 bg-accent-colors">
        <div class="container d-flex justify-content-center flex-wrap my-5">
          <div class="container d-flex justify-content-center flex-wrap">
            <div style={{ maxWidth: "500px" }}>
              <img src="./img/slider-test-img.png" class="img-thumbnail" />
            </div>
            <div class="m-4" style={{ maxWidth: "500px" }}>
              <h1>Подарки к Новому году с Giftery!</h1>
              <p class="">
                В период с 1 по 28 декабря у вас есть возможность приобрести
                подарочные сертификаты от наших партнеров со скидками до 70% для
                ваших близких, друзей и коллег.
              </p>
            </div>
          </div>
        </div>
        <div class="container d-flex justify-content-around flex-wrap">
          <a
            href="pages/card-page.html"
            class="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
          >
            Подарить карту
          </a>
        </div>
      </div>
    </>
  );
}
export default Block7;
