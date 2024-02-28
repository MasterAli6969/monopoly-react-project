//<!--------------------- СЛАЙДЕР ИЗОБРАЖЕНИЙ САМОЙ КАРТОЧКИ ------------------->
function CardSlider({ dataImg }) {
  return (
    <>
      <div className="col-md-6 col-sm-12 mb-5 p-0">
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
          <div className="carousel-inner rounded-5">
            <>
              <div
                className="carousel-item active shadow-lg rounded-5 p-5"
                data-bs-interval="10000"
              >
                <div className="container d-flex justify-content-center flex-wrap">
                  <div>
                    <img src={dataImg} className="img-thumbnail" alt="" />
                  </div>
                </div>
              </div>
            </>
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
export default CardSlider;
