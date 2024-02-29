//<!--------------------- БЛОК - 7 Подарки к Новому году с Giftery! ------------------->
import sliderTestImg from "../../../assets/img/sliderTestImg.png";
function Banner() {
  return (
    <>
      <div className="col-12 mt-5 mb-5 pt-5 pb-5 bg-accent-colors">
        <div className="container d-flex justify-content-center flex-wrap my-5">
          <div className="container d-flex justify-content-center flex-wrap">
            <div style={{ maxWidth: "500px" }}>
              <img src={sliderTestImg} className="img-thumbnail" alt="" />
            </div>
            <div className="m-4" style={{ maxWidth: "500px" }}>
              <h1>Подарки к Новому году с Giftery!</h1>
              <p>
                В период с 1 по 28 декабря у вас есть возможность приобрести
                подарочные сертификаты от наших партнеров со скидками до 70% для
                ваших близких, друзей и коллег.
              </p>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          <a
            href="/catalog"
            className="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
          >
            Подарить карту
          </a>
        </div>
      </div>
    </>
  );
}
export default Banner;
