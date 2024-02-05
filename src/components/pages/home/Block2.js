//<!--------------------- БЛОК - 2  СЛАЙДЕР ------------------->
import React from "react";
function Block2() {
  return (
    <>
      <div class="col-12 mb-5">
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active py-5" data-bs-interval="10000">
              <div class="container d-flex justify-content-center flex-wrap py-5">
                <div style={{ maxWidth: "500px" }}>
                  <img src="./img/slider-test-img.png" class="img-thumbnail" />
                </div>
                <div class="mx-5" style={{ width: "500px", height: "300px" }}>
                  <h1>Подарки к Новому году с Giftery!</h1>
                  <p>
                    В период с 1 по 28 декабря у вас есть возможность приобрести
                    подарочные сертификаты от наших партнеров со скидками до 70%
                    для ваших близких, друзей и коллег.
                  </p>
                  <a
                    href="#"
                    class="btn btn-light btn-lg rounded-5 mt-2 accent-colors text-accent-colors"
                  >
                    Узнать подробнее
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item py-5" data-bs-interval="10000">
              <div class="container d-flex justify-content-center flex-wrap py-5">
                <div style={{ maxWidth: "500px" }}>
                  <img
                    src="./img/lorem-inage-default1.jpg"
                    class="img-thumbnail"
                  />
                </div>
                <div class="mx-5" style={{ width: "500px", height: "300px" }}>
                  <h1>Подарки к Новому году с Giftery!</h1>
                  <p>
                    В период с 1 по 28 декабря у вас есть возможность приобрести
                    подарочные сертификаты от наших партнеров со скидками до 70%
                    для ваших близких, друзей и коллег.
                  </p>
                  <a
                    href="#"
                    class="btn btn-light btn-lg rounded-5 mt-2 accent-colors text-accent-colors"
                  >
                    Узнать подробнее
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item py-5" data-bs-interval="10000">
              <div class="container d-flex justify-content-center flex-wrap py-5">
                <div style={{ maxWidth: "500px" }}>
                  <img
                    src="./img/lorem-inage-default2.jpg"
                    class="img-thumbnail"
                  />
                </div>
                <div class="mx-5" style={{ width: "500px", height: "300px" }}>
                  <h1>Подарки к Новому году с Giftery!</h1>
                  <p>
                    В период с 1 по 28 декабря у вас есть возможность приобрести
                    подарочные сертификаты от наших партнеров со скидками до 70%
                    для ваших близких, друзей и коллег.
                  </p>
                  <a
                    href="#"
                    class="btn btn-light btn-lg rounded-5 mt-2 accent-colors text-accent-colors"
                  >
                    Узнать подробнее
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Block2;
