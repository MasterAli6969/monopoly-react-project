import * as React from "react";

function Footer() {
  return (
    <>
      <div class="col-12 mt-5 pt-5 pb-5 bg-accent-colors shadow-lg">
        <footer class="container">
          <div>
            <h1 class="logo">LOGO</h1>
          </div>
          <div class="d-flex flex-wrap justify-content-between">
            <ul class="nav flex-column text-main-colors-lists">
              <li>
                <h4>Подарочные карты</h4>
              </li>
              <li>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="catalog-page.html"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a class="nav-link" href="catalog-page.html">
                  Благотворительность
                </a>
              </li>
            </ul>
            <ul class="nav flex-column text-main-colors-lists">
              <li>
                <h4>О компании</h4>
              </li>
              <li>
                <a class="nav-link" href="about-us.html">
                  О Монополия
                </a>
              </li>
              <li>
                <a class="nav-link" href="news.html">
                  Новости
                </a>
              </li>
              <li>
                <a class="nav-link" href="oferta.html">
                  Оферта
                </a>
              </li>
              <li>
                <a class="nav-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
            <ul class="nav flex-column text-main-colors-lists">
              <li>
                <h4>Прочее</h4>
              </li>
              <li>
                <a class="nav-link" href="faq-page.html">
                  {" "}
                  FAQ
                </a>
              </li>
              <li>
                <a class="nav-link" href="privacy-policy.html">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <nav class="nav flex-column">
            <h4>Контакты</h4>
            <p>
              Клиентская поддержка для физических лиц по вопросам покупки,
              отправки, использования сертификатов
            </p>
            <a class="nav-link" href="#">
              8 800 555 35 35
            </a>
            <a class="nav-link" href="#">
              +7 800 555 35 35
            </a>
            <a class="nav-link" href="#">
              support@monopol.ru
            </a>
            <p>Отдел продаж (для юридических лиц)</p>
            <a class="nav-link" href="#">
              +7 800 555 35 35{" "}
            </a>
            <a class="nav-link" href="#">
              b2b@monopol.ru
            </a>
            <p>Отдел продаж (для юридических лиц)</p>
            <a class="nav-link" href="#">
              +7 800 555 35 35{" "}
            </a>
            <a class="nav-link" href="#">
              partners@monopol.ru
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
