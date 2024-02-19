//<!--------------------- БЛОК - 2  СЛАЙДЕР ------------------->
import React from "react";
import { carouselInner } from "./data";
function Slider() {
  return (
    <>
      <div className="col-12 mb-5">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
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
          <div className="carousel-inner">
            {carouselInner.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`carousel-item ${item.className} py-5`}
                  data-bs-interval="10000"
                >
                  <div className="container d-flex justify-content-center flex-wrap py-5">
                    <div style={{ maxWidth: "500px" }}>
                      <img src={item.img} className="img-thumbnail" alt="" />
                    </div>
                    <div
                      className="mx-5"
                      style={{ width: "500px", height: "300px" }}
                    >
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <a
                        href={item.links.url}
                        className="btn btn-light btn-lg rounded-5 mt-2 accent-colors text-accent-colors"
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
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
