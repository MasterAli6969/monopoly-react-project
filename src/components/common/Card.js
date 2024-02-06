import React from "react";
import { cardData } from "./data";
function Card() {
  return (
    <>
      <div>
        {cardData.map((item) => {
          return (
            <>
              <div
                key={item.id}
                class="card"
                style={{ width: "18rem", margin: "10px" }}
              >
                <div class="card-body d-flex flex-column align-items-start justify-content-between">
                  <div>
                    <img
                      src={`${item.img}`}
                      class="img-thumbnail mb-3"
                      alt=""
                    />
                    <h5 class="card-title mb-5">{item.cardTitle}</h5>
                  </div>
                  <div>
                    <p class="card-text">{item.value}</p>
                    <h5 class="card-text">
                      От {item.valueFrom} до {item.valueBefore}
                    </h5>
                    <button
                      type="button"
                      class="btn btn-light accent-colors text-accent-colors w-100"
                      data-bs-toggle="modal"
                      data-bs-target={`#${item.dataBsTargetId}`}
                    >
                      Купить
                    </button>

                    <div
                      class="modal fade"
                      id={`${item.dataBsTargetId}`}
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content bg-accent-colors">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              {item.modalWindow.modalTitle}
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
                                src={`${item.img}`}
                                class="img-thumbnail modal-body__image-size m-3 mb-3"
                                alt=""
                              />
                              <div class="px-2 modal-body__description-size m-3">
                                <p>{item.modalWindow.description}</p>
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
                              {item.modalWindow.tiles.map((item) => {
                                return (
                                  <>
                                    <div
                                      key={item.id}
                                      class="card d-flex flex-column align-items-center rounded-3 m-3"
                                      style={{ width: "18rem" }}
                                    >
                                      <i class={`${item.icons}`}></i>
                                      <div class="card-body">
                                        <p class="card-text">{item.text}</p>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                            <div class="d-flex justify-content-around flex-wrap">
                              <div class="px-2 custom_index_block3_card_modal_description">
                                <h4 class="mb-3 fw-bolder">
                                  Корпоративный заказ
                                </h4>
                                <p class="">Закажите подарочные карты оптом.</p>
                              </div>
                              <a
                                href="/"
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
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
