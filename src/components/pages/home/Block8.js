//<!--------------------- БЛОК - 8 Возможности Универсальной------------------->
import React from "react";
import { staticTabs } from "./data";
function Block8() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex justify-content-center flex-wrap mb-5 text-center">
          <h3>Возможности Универсальной подарочной карты Giftery Card</h3>
        </div>
        <div class="container d-flex justify-content-center flex-wrap">
          {staticTabs.map((item) => {
            return (
              <>
                <div
                  class="card"
                  style={{ width: "24rem", padding: "15px", margin: "10px" }}
                >
                  <div class="card-body">
                    <i class={`${item.icons} fs-1`}></i>
                    <p class="card-text">{item.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div class="container d-flex justify-content-center flex-wrap mt-5 mb-5">
          <h3>
            Преимущества Электронных подарочных сертификатов для корпоративных
            клиентов
          </h3>
        </div>
        <div class="container">
          <p class="fw-bolder">
            1. Экономия бюджета до 20% на подарки для промо-акций, программ
            мотивации и лояльности
          </p>
          <p>
            Электронные сертификаты отправляются на email и дают значительную
            экономию на логистике — нет производства, хранения, упаковки и
            доставки, как в случае с обычными физическими подарками.
          </p>
        </div>
        <div class="container d-flex justify-content-center flex-wrap my-5">
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal21"
            type="button"
            class="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
          >
            Узнать больше
          </button>
          <div
            class="modal fade"
            id="exampleModal21"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <ol>
                    <li>
                      <div>
                        <h6 class="fw-bolder">
                          Экономия бюджета до 20% на подарки для промо-акций,
                          программ мотивации и лояльности
                        </h6>
                        <p>
                          Электронные сертификаты отправляются на email и дают
                          значительную экономию на логистике — нет производства,
                          хранения, упаковки и доставки, как в случае с обычными
                          физическими подарками.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h6 class="fw-bolder">
                          Скорость и удобство организации корпоративных закупок
                        </h6>
                        <p>
                          Даже если остался 1 день, можно легко сделать подарки
                          клиентам/партнерам/сотрудникам по всей России;
                        </p>
                        <p>
                          Настройте моментальную доставку через
                          <a href="/">Личный b2b кабинет</a>
                          всем адресатам одновременно, и получите удобный отчет
                          о доставке.
                        </p>
                        <p>
                          Воспользуйтесь нашей
                          <a href="/">Витриной вознаграждений</a>с
                          интегрированным каталогом подарочных карт для удобного
                          обмена баллов, которые ваши сотрудники и партнеры
                          копят в рамках программ мотивации
                        </p>
                        <p>
                          Мгновенно расширьте выбор вознаграждений в вашей
                          Программе лояльности при помощи
                          <a href="/">API интеграции</a>
                          каталога электронных подарочных карт, которые
                          предлагает Giftery
                        </p>
                        <p>
                          Моментально запустите продажу собственных подарочных
                          карт с собственного сайта при помощи
                          <a href="/">виджета Giftery</a>
                        </p>
                      </div>
                    </li>
                  </ol>
                  <div class="d-flex justify-content-center align-items-center">
                    <a href="/">Далее</a>
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
export default Block8;
