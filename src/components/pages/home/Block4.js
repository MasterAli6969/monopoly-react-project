//<!--------------------- БЛОК - 4 Выбирайте из 300 подарочных ------------------->

import React from "react";
function Block4() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex justify-content-center flex-wrap">
          <h3>Выбирайте из 300 подарочных карт известных брендов!</h3>
          <h6>
            Дарите друзьям, вознаграждайте клиентов и сотрудников - мгновенная
            бесплатная доставка на email!
          </h6>
        </div>
        <div class="container d-flex justify-content-center flex-wrap">
          <div class="card" style={{ width: "18rem", margin: "10px" }}>
            <div class="card-body d-flex flex-column align-items-start justify-content-between">
              <div>
                <img
                  src="./img/lorem-inage-default1.jpg"
                  class="img-thumbnail mb-3"
                />
                <h5 class="card-title mb-5">
                  Подписка на онлайн-кинотеатр PREMIER
                </h5>
              </div>
              <div>
                <p class="card-text">Номинал</p>
                <h5 class="card-text">От 149 до 799</h5>
                <button
                  type="button"
                  class="btn btn-light accent-colors text-accent-colors w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  Купить
                </button>

                <div
                  class="modal fade"
                  id="exampleModal6"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content bg-accent-colors">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Giftery Card
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="d-flex justify-content-between flex-wrap mb-5">
                          <img
                            src="./img/lorem-inage-default1.jpg"
                            class="img-thumbnail modal-body__image-size m-3 mb-3"
                          />
                          <div class="px-2 modal-body__description-size m-3">
                            <p>
                              Дарите только нужные подарки. Получатель сможет
                              обменять Giftery Card на подарочные карты
                              известных брендов из списка обмена (ссылка на
                              список обмена расположена в разделе "Правила",
                              пункт 2).
                            </p>
                          </div>
                        </div>
                        <div class="d-flex justify-content-around flex-wrap mb-5">
                          <a
                            href="pages/card-page.html"
                            class="btn btn-light btn-lg rounded-5 m-3 modal-body__button-size accent-colors text-accent-colors"
                          >
                            Отправить себе
                          </a>
                          <a
                            href="pages/card-page.html"
                            class="btn btn-light btn-lg rounded-5 m-3 modal-body__button-size over-accent-color text-accent-colors"
                          >
                            Отправить в подарок
                          </a>
                        </div>
                        <div class="container-fluid d-flex justify-content-around flex-wrap mb-5 p-3 accent-colors">
                          <div
                            class="card d-flex flex-column align-items-center rounded-3 m-3"
                            style={{ width: "18rem" }}
                          >
                            <i class="bi bi-mailbox-flag fs-1"></i>
                            <div class="card-body">
                              <p class="card-text">
                                Обменяйте Giftery Card в рамках номинала на один
                                или несколько сертификатов из каталога Giftery
                              </p>
                            </div>
                          </div>
                          <div
                            class="card d-flex flex-column align-items-center rounded-3 m-3"
                            style={{ width: "18rem" }}
                          >
                            <i class="bi bi-mailbox-flag fs-1"></i>
                            <div class="card-body">
                              <p class="card-text">
                                Обменяйте Giftery Card в рамках номинала на один
                                или несколько сертификатов из каталога Giftery
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex justify-content-around flex-wrap">
                          <div class="px-2 custom_index_block3_card_modal_description">
                            <h4 class="mb-3 fw-bolder">Корпоративный заказ</h4>
                            <p class="">Закажите подарочные карты оптом.</p>
                          </div>
                          <a
                            href="#"
                            class="btn btn-light btn-lg rounded-5 m-3 accent-colors text-accent-colors"
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

          <div class="container d-flex justify-content-center flex-wrap py-5">
            <a
              href="pages/catalog-page.html"
              class="btn btn-light btn-lg rounded-5 over-accent-color text-accent-colors"
            >
              Купить подарочную карту
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Block4;
