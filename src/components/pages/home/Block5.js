//<!--------------------- БЛОК - 5 Ассортимент подарочных ------------------->
import React from "react";
function Block5() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex justify-content-center flex-wrap mt-5 mb-5">
          <h2>Ассортимент подарочных сертификатов</h2>
        </div>
        <div class="container">
          <div class="d-flex justify-content-center align-items-center">
            <p>
              Компания Giftery осуществляет продажу подарочных карт для женщин и
              мужчин в таких категориях:
            </p>
          </div>

          <ul class="container d-flex justify-content-around flex-wrap text-main-colors-lists">
            <li
              class="text-center d-flex flex-column"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-house fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Mагазины бытовой техники
              </a>
            </li>
            <li
              class="text-center d-flex flex-column"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-bag-heart fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Популярные магазины косметики
              </a>
            </li>
            <li
              class="text-center d-flex flex-column j"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-bag fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Магазины одежды и обуви
              </a>
            </li>
            <li
              class="text-center d-flex flex-column"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-gem fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Ювелирные салоны
              </a>
            </li>
            <li
              class="text-center d-flex flex-column j"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-balloon-fill fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Детские товары
              </a>
            </li>
            <li
              class="text-center d-flex flex-column"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-clipboard-heart-fill fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Салоны красоты
              </a>
            </li>
            <li
              class="text-center d-flex flex-column j"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-fire fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Развлечения
              </a>
            </li>
            <li
              class="text-center d-flex flex-column"
              style={{ margin: "10px", maxWidth: "150px" }}
            >
              <i class="bi bi-airplane fs-1"></i>
              <a
                class="container__block5-link-list"
                href="pages/catalog-page.html"
              >
                Путешествия и многое другое
              </a>
            </li>
          </ul>
        </div>
        <div class="container d-flex justify-content-center flex-wrap my-5">
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal14"
            type="button"
            class="btn btn-light btn-lg rounded-5 accent-colors text-accent-colors"
          >
            Читать дальше
          </button>
          <div
            class="modal fade"
            id="exampleModal14"
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
                  <p>
                    У нас можно купить подарочные сертификаты магазинов в
                    электронном виде с мгновенной доставкой по email или
                    заказать их выпуск в пластиковом виде, оформив в тематике
                    праздника или фирменном стиле вашей компании. Тем, кто
                    боится ошибиться в выборе категории, мы предлагаем
                    универсальную подарочную карту Giftery Card, которую ее
                    владелец сможет обменять по своему желанию на подарочную
                    карту одного из 100 известных брендов. В разделе
                    «Благотворительность» вы найдете список благотворительных
                    фондов, которым можно пожертвовать деньги от своего имени
                    или от имени друга при»помощи нашего сайта. Чтобы купить
                    электронный подарочный сертификат в Москве или любом другом
                    населенном пункте России при помощи нашей платформы
                    электронных подарочных решений, выберите из нашего каталога
                    подарочных карт наиболее подходящую карту или универсальную
                    карту Giftery»Card, укажите номинал и заполните поля
                    электронной формы. Доставка подарка будет произведена
                    моментально после оплаты или»в»указанную вами дату.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Block5;
