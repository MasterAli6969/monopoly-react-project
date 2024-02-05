//<!--------------------- БЛОК - 3 Что такое электронные подарочные карты ------------------->
import React from "react";
function Block3() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex flex-wrap justify-content-center">
          <div class="card" style={{ width: "14rem", margin: "10px" }}>
            <div class="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
              <i
                class="bi bi-question-lg mb-2"
                style={{ fontSize: "50px" }}
              ></i>
              <p class="card-text text-center">
                Что такое электронные подарочные карты?
              </p>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="d-flex flex-wrap justify-content-between align-items-center mt-auto"
              >
                <h6 class="card-link custom_index_block3_card_link my-0 mx-3">
                  Подробнее
                </h6>

                <i class="bi bi-arrow-right fs-2"></i>
              </div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel ">
                        Что такое электронные подарочные карты?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Электронные подарочные карты (или сертификаты) — это
                        удобный, быстрый и экологичный способ сделать подарок
                        родным и близким! И вот почему:
                      </p>
                      <ul class="custom_index_block3_card_link_exampleModal">
                        <li>
                          <p>
                            мгновенная доставка по email: не нужно ходить по
                            магазинам и выбирать подарок, тратиться на упаковку
                            и отправлять курьера
                          </p>
                        </li>
                        <li>
                          <p>
                            большой выбор: более 100 известных брендов в
                            каталоге Giftery
                          </p>
                        </li>
                        <li>
                          <p>
                            подарки, которые «всегда кстати»: выберите бренд, а
                            получатель сам решит какие товары этого бренда
                            приобрести с помощью своей подарочной карты
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "14rem", margin: "10px" }}>
            <div class="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
              <i class="bi bi-envelope" style={{ fontSize: "50px" }}></i>
              <p class="card-text text-center">
                Как отправить электронную подарочную карту?
              </p>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                class="d-flex flex-wrap justify-content-between align-items-center mt-auto"
              >
                <h6 class="card-link custom_index_block3_card_link my-0 mx-3">
                  Подробнее
                </h6>

                <i class="bi bi-arrow-right fs-2"></i>
              </div>
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Как отправить электронную подарочную карту?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h5 class="fw-bolder mb-3">
                        Как подарить одну или несколько карт друзьям?
                      </h5>
                      <h5 class="mb-3">
                        Дарить электронные карты легко, быстро и приятно:
                      </h5>
                      <ul class="custom_index_block3_card_link_exampleModal">
                        <li>
                          <p>
                            выберите бренд подарочной карты в каталоге Giftery
                          </p>
                        </li>
                        <li>
                          <p>впишите Ваше персональное поздравление адресату</p>
                        </li>
                        <li>
                          <p>
                            укажите адрес электронной почты получателя и его
                            телефон для смс уведомления о подарке
                          </p>
                        </li>
                        <li>
                          <p>оплатите подарок он-лайн</p>
                        </li>
                      </ul>
                      <h5 class="mb-5">
                        Подарочный сертификат будет мгновенно доставлен на email
                        адресата!
                      </h5>
                      <h5 class="fw-bolder mb-3">
                        Корпоративным клиентам — разные сценарии применения
                        электронных подарочных карт:
                      </h5>
                      <ul class="custom_index_block3_card_link_exampleModal">
                        <li>
                          <p>
                            Экономьте на доставке корпоративных подарков. В
                            Личном кабинете доступна одновременная отправка
                            подарков по всей России и подробный отчет о
                            доставке.
                          </p>
                        </li>
                        <li>
                          <p>
                            Используйте подарочные карты для обмена накопленных
                            участниками баллов в Витрине мотивации.
                          </p>
                        </li>
                        <li>
                          <p>
                            Расширьте каталог вознаграждений в Программах
                            лояльности с помощью Интеграции по API
                          </p>
                        </li>
                        <li>
                          <p>оплатите подарок он-лайн</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "14rem", margin: "10px" }}>
            <div class="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
              <i
                class="bi bi-person-check-fill"
                style={{ fontSize: "50px" }}
              ></i>
              <p class="card-text text-center">
                Как воспользоваться электронной подарочной картой?
              </p>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                class="d-flex flex-wrap justify-content-between align-items-center mt-auto"
              >
                <h6 class="card-link custom_index_block3_card_link my-0 mx-3">
                  Подробнее
                </h6>

                <i class="bi bi-arrow-right fs-2"></i>
              </div>
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Как воспользоваться электронной подарочной картой?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <ul>
                        <li class="mb-3">
                          <p>
                            Получатель сможет воспользоваться полученной
                            электронной подарочной картой, предъявив ее в
                            магазине в распечатанном виде.
                          </p>
                        </li>
                        <li class="mb-3">
                          <p>
                            Некоторые магазины принимают сертификат с экрана
                            мобильного устройства (необходимо читать условия
                            приема конкретного ритейлера, они будут описаны в
                            полученном подарочном сертификате).
                          </p>
                        </li>
                        <li class="mb-3">
                          <p>
                            Некоторые магазины принимают сертификат с экрана
                            мобильного устройства (необходимо читать условия
                            приема конкретного ритейлера, они будут описаны в
                            полученном подарочном сертификате).
                          </p>
                        </li>
                        <li class="mb-3">
                          <p>
                            Если обладатель подарочной карты не воспользуется ей
                            сразу же, Giftery пришлет напоминание о сроке
                            действия сертификата по электронной почте.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "14rem", margin: "10px" }}>
            <div class="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
              <i class="bi bi-gift-fill" style={{ fontSize: "50px" }}></i>
              <p class="card-text text-center">
                Что такое Универсальный подарочный сертификат Giftery Card?
              </p>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                class="d-flex flex-wrap justify-content-between align-items-center mt-auto"
              >
                <h6 class="card-link custom_index_block3_card_link my-0 mx-3">
                  Подробнее
                </h6>

                <i class="bi bi-arrow-right fs-2"></i>
              </div>
              <div
                class="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Что такое Универсальный подарочный сертификат Giftery
                        Card?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p class="mb-3">
                        Giftery Card — идеальный вариант если не знаете что
                        подарить! И вот почему:
                      </p>
                      <ul class="custom_index_block3_card_link_exampleModal">
                        <li>
                          <p>
                            Универсальная карта Giftery Card отправляется на
                            email мгновенно или по расписанию.
                          </p>
                        </li>
                        <li>
                          <p>
                            Ее можно оформить в своем собственном стиле,
                            фотографиями из личного архива или воспользоваться
                            готовыми дизайнами.
                          </p>
                        </li>
                        <li>
                          <p>
                            Получатель сам решит на какой бренд обменять Giftery
                            Card — в каталоге Giftery более 100 известных
                            компаний.
                          </p>
                        </li>
                      </ul>
                      <h5 class="fw-bolder mb-3">
                        Преимущества Giftery Card для корпоративных клиентов:
                      </h5>
                      <ul class="custom_index_block3_card_link_exampleModal">
                        <li>
                          <p>
                            Брендирование бесплатно. Giftery Card может быть
                            оформлен в соответствии с фирменным стилем Вашей
                            компании.
                          </p>
                        </li>
                        <li>
                          <p>
                            Удобные корпоративные подарки. В Личном кабинете
                            доступна одновременная отправка подарков по всей
                            России и подробный отчет о доставке.
                          </p>
                        </li>
                      </ul>
                      <p class="mt-3">
                        Смотрите видео на этой странице: "Как оформить,
                        отправить и воспользоваться Giftery card"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "14rem", margin: "10px" }}>
            <div class="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
              <i
                class="bi bi-envelope-paper-fill"
                style={{ fontSize: "50px" }}
              ></i>
              <p class="card-text text-center">
                Как воспользоваться полученным сертификатом Giftery Card?
              </p>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                class="d-flex flex-wrap justify-content-between align-items-center mt-auto"
              >
                <h6 class="card-link custom_index_block3_card_link my-0 mx-3">
                  Подробнее
                </h6>

                <i class="bi bi-arrow-right fs-2"></i>
              </div>
              <div
                class="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Как воспользоваться полученным сертификатом Giftery
                        Card?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h5 class="fw-bolder mb-3">Шаг 1</h5>
                      <p class="mb-5">
                        В полученном email-письме нажмите на оранжевую кнопку
                        «Активация»
                      </p>
                      <h5 class="fw-bolder mb-3">Шаг 2</h5>
                      <p class="mb-5">
                        Вы попадёте в раздел Каталог, где представлены более 100
                        брендов. Обменять Giftery Card можно на один или
                        несколько подарочных сертификатов выбранных брендов.
                      </p>
                      <h5 class="fw-bolder mb-3">Шаг 3</h5>
                      <p class="mb-5">
                        Подарочный сертификат выбранного Вами бренда мгновенно
                        придёт на электронную почту в виде PDF-файла. Сертификат
                        можно распечатать и предъявить на кассе магазина или же
                        ввести его номер в соответствующем поле на сайте
                        интернет-магазина и совершить покупку онлайн.
                      </p>
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
export default Block3;
