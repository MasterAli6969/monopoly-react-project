//<!--------------------- БЛОК - 2  СЛАЙДЕР ------------------->
import React from "react";
import { carouselInner } from "./data";
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
            {carouselInner.map((item) => {
              return (
                <div
                  key={item.id}
                  class={`carousel-item ${item.class} py-5`}
                  data-bs-interval="10000"
                >
                  <div class="container d-flex justify-content-center flex-wrap py-5">
                    <div style={{ maxWidth: "500px" }}>
                      <img src={item.img} class="img-thumbnail" alt="" />
                    </div>
                    <div
                      class="mx-5"
                      style={{ width: "500px", height: "300px" }}
                    >
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <a
                        href={item.links.url}
                        class="btn btn-light btn-lg rounded-5 mt-2 accent-colors text-accent-colors"
                      >
                        {item.links.text}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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
