//<!--------------------- БЛОК - 10  СЛАЙДЕР ОТЗЫВОВ ------------------->
import React from "react";
import { feedbackCarousel } from "./data";
function Block10() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex justify-content-center flex-wrap mb-5">
          <h3 class="fw-bolder">Отзывы B2B-клиентов</h3>
        </div>
        <div
          id="carouselExampleDark1"
          class="carousel carousel-dark slide mb-5"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            {feedbackCarousel.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    class={`carousel-item ${item.class} bg-accent-colors`}
                    data-bs-interval="10000"
                  >
                    <div class="container d-flex justify-content-between flex-wrap my-5">
                      <div class="mx-5">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <div class="d-flex justify-content-end align-items-center custom_index_block3_card_body">
                          <p class="card-link custom_index_block3_card_link m-0 mx-3">
                            Подробнее
                          </p>

                          <i class="bi bi-arrow-right fs-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="container d-flex justify-content-around flex-wrap">
          <a
            href="/"
            class="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
          >
            Читать другие отзывы
          </a>
        </div>
      </div>
    </>
  );
}
export default Block10;
