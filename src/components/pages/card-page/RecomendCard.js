//<!--------------------- КАРТОЧКИ РЕКОМЕНДАЦИЙ ------------------->
import React from "react";
function RecomendCard() {
  return (
    <>
      <div className="col-12 mb-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bolder">Также вас может заинтересовать</h2>
          <div className="container d-flex justify-content-center flex-wrap">
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
              <div className="card-body d-flex flex-column align-items-start justify-content-between">
                <div>
                  <img
                    alt=""
                    src="../img/lorem-inage-default1.jpg"
                    className="img-thumbnail mb-3"
                  />
                  <h5 className="card-title mb-5">
                    Подписка на онлайн-кинотеатр PREMIER
                  </h5>
                </div>
                <div>
                  <p className="card-text">Номинал</p>
                  <h5 className="card-text">От 149 до 799</h5>
                  <button
                    type="button"
                    className="btn btn-light accent-colors text-accent-colors w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal6"
                  >
                    Купить
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal6"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content bg-accent-colors">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Giftery Card
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="d-flex justify-content-between flex-wrap mb-5">
                            <img
                              alt=""
                              src="../img/lorem-inage-default1.jpg"
                              className="img-thumbnail modal-body__image-size m-3 mb-3"
                            />
                            <div className="px-2 modal-body__description-size m-3">
                              <p>
                                Дарите только нужные подарки. Получатель сможет
                                обменять Giftery Card на подарочные карты
                                известных брендов из списка обмена (ссылка на
                                список обмена расположена в разделе "Правила",
                                пункт 2).
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around flex-wrap mb-5">
                            <a
                              href="card-page.html"
                              className="btn btn-light btn-lg rounded-5 m-3 modal-body__button-size accent-colors text-accent-colors"
                            >
                              Отправить себе
                            </a>
                            <a
                              href="card-page.html"
                              className="btn btn-light btn-lg rounded-5 m-3 modal-body__button-size over-accent-color text-accent-colors"
                            >
                              Отправить в подарок
                            </a>
                          </div>
                          <div className="container-fluid d-flex justify-content-around flex-wrap mb-5 p-3 accent-colors">
                            <div
                              className="card d-flex flex-column align-items-center rounded-3 m-3"
                              style={{ width: "18rem" }}
                            >
                              <i className="bi bi-mailbox-flag fs-1"></i>
                              <div className="card-body">
                                <p className="card-text">
                                  Обменяйте Giftery Card в рамках номинала на
                                  один или несколько сертификатов из каталога
                                  Giftery
                                </p>
                              </div>
                            </div>
                            <div
                              className="card d-flex flex-column align-items-center rounded-3 m-3"
                              style={{ width: "18rem" }}
                            >
                              <i className="bi bi-mailbox-flag fs-1"></i>
                              <div className="card-body">
                                <p className="card-text">
                                  Обменяйте Giftery Card в рамках номинала на
                                  один или несколько сертификатов из каталога
                                  Giftery
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around flex-wrap">
                            <div className="px-2 custom_index_block3_card_modal_description">
                              <h4 className="mb-3 fw-bolder">
                                Корпоративный заказ
                              </h4>
                              <p>Закажите подарочные карты оптом.</p>
                            </div>
                            <a
                              href="/card-pade"
                              className="btn btn-light btn-lg rounded-5 m-3 accent-colors text-accent-colors"
                            >
                              Оставить заявку
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecomendCard;
