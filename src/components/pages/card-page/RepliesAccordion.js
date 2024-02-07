//<!--------------------- АККОРДИОНЫ ------------------->
import React from "react";
import { accordionData } from "./data";
function RepliesAccordion() {
  return (
    <>
      <div className="col-12 mb-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5">
          <div>
            <h3 className="mb-3 fw-bolder">
              Хотите сделать корпоративный заказ?
            </h3>
            <p>
              Оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <a
            href="/card-page"
            className="btn btn-light btn-lg rounded-5 over-accent-color text-accent-colors"
          >
            Оставить заявку
          </a>
        </div>
        <div className="accordion" id="accordionExample">
          <div id="accordionItem1" className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-accent-colors"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Как отправить?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse p-3"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body d-flex justify-content-center flex-wrap p-0 mb-5">
                <div className="card" style={{ width: "25rem" }}>
                  <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                    <img
                      alt=""
                      src="./img/lorem-inage-default1.jpg"
                      className="img-thumbnail mb-4"
                    />
                    <h5 className="card-title mb-3">Оформите</h5>
                    <p className="card-text">
                      Выберите номинал, дизайн, количество и напишите
                      поздравление
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <strong>Протестируйте:</strong>
                  отправьте себе письмо с примером
                </p>
              </div>
              <form className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-light btn-lg rounded-5 over-accent-color text-accent-colors"
                >
                  Далее
                  <i className="bi bi-arrow-right-circle-fill text-accent-colors"></i>
                </button>
              </form>
            </div>
          </div>
          <div id="accordionItem2" className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-accent-colors"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Как воспользоваться?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse p-3"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="mb-5">
                  <h3 className="fw-bolder mb-3">
                    Как воспользоваться сертификатом Giftery Card
                  </h3>
                  <p className="mb-3">
                    Дарите только нужные подарки. Получатель сможет обменять
                    Giftery Card на подарочные карты известных брендов из списка
                    обмена (ссылка на список обмена расположена в разделе
                    "Правила", пункт 2). Для получения полной информации
                    <a href="/card-page"> посетите сайт</a>. Полный список
                    доступных для обмена брендов можно посмотреть
                    <a href="/card-page"> здесь</a>.
                  </p>
                  <p className="p-0 m-0">
                    Для получения полной информации
                    <a href="/card-page"> посетите сайт</a>.
                  </p>
                  <p className="p-0 m-0">
                    Полный список доступных для обмена брендов можно посмотреть
                    <a href="/card-page">здесь</a>.
                  </p>
                </div>
                <div className="d-flex justify-content-center flex-wrap p-0 mb-5">
                  <div className="card p-5 m-1" style={{ width: "20rem" }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                      <i className="bi bi-clock-history fs-1"></i>
                      <p className="card-text">
                        Обратите внимание на срок действия сертификата и
                        <a href="/card-page">условия использования</a>
                      </p>
                    </div>
                  </div>
                  <div className="card p-5 m-1" style={{ width: "20rem" }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                      <i className="bi bi-box-seam fs-1"></i>
                      <p className="card-text">
                        Обменяйте Giftery Card в рамках номинала на один или
                        несколько сертификатов
                        <a href="/card-page">из этого списка</a>
                        брендов.
                      </p>
                    </div>
                  </div>
                  <div className="card p-5 m-1" style={{ width: "20rem" }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                      <i className="bi bi-envelope-paper fs-1"></i>
                      <p className="card-text">
                        Сразу после обмена Вам на почту придет письмо с
                        подарочной картой выбранного бренда
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="accordionItem3" className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-accent-colors"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Правила
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body p-5">
                <ol>
                  <li className="mb-3">
                    <p>
                      Универсальный подарочный сертификат Giftery Card
                      необходимо обменять на сайте
                      <a href="/card-page">'Тут будет ссылка'</a>
                      на один или несколько сертификатов Партнеров из каталога
                      обмена полученного сертификата.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Giftery Card можно обменять на сертификаты любых брендов и
                      номиналов из каталога
                      <a href="/card-page">'Тут будет ссылка'</a>в рамках
                      баланса.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Остаток баланса Giftery Card не сгорает до окончания срока
                      действия - держатель может израсходовать его полностью или
                      частично и вернуться к выбору позже.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Если держатель в течение срока действия не воспользовался
                      Giftery Card полностью или частично, сертификат становится
                      недействительным. При этом вся сумма баланса сгорает.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Универсальный подарочный сертификат Giftery Card не
                      является ценной бумагой и не подлежит обмену на денежные
                      средства.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Универсальный подарочный сертификат можно передавать любым
                      лицам по своему усмотрению. При передаче универсального
                      подарочного сертификата третьим лицам держатель
                      универсального подарочного сертификата обязан
                      проинформировать получателя об условиях обмена Giftery
                      Card на сертификаты Партнеров, входящих в список обмена
                      полученного сертификата. В случае нарушения этой
                      обязанности держателями универсального подарочного
                      сертификата Giftery Card, ООО «ГИФТЕРИ.РУ», по претензиям,
                      связанным с отсутствием вышеуказанной информации,
                      ответственности не несет.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Универсальный подарочный сертификат возврату не подлежит.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      Дополнительную информацию о Giftery Card можно получить на
                      странице
                      <a href="/card-page">'Тут будет ссылка'</a>
                      или по телефону 8-800 551 47 24.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RepliesAccordion;
