import { Link } from "react-router-dom";

//<!--------------------- Прочие описания ------------------->
function OtherDescriptions() {
  return (
    <>
      <div className="col-12 mb-5">
        <p className="mb-5">
          Купить электронные подарочные сертификаты магазинов — отличная идея
          для подарка, когда нет времени или возможности ходить и выбирать
          презент по офлайн магазинам, опасаетес не угодить вкусовым
          предпочтениям получателя, нужно заказать большое количество подарков
          для сотрудников, клиентов, бизнес партнеров и пр.
        </p>
        <h4 className="fw-bolder mb-3">
          Продажа подарочных сертификатов: товары, услуги, благотворительность
        </h4>
        <p className="mb-5">
          Наш каталог подарочных сертификатов включает десятки карт магазинов,
          развлекательных центров, спортивных залов, салонов красоты. Мы
          предлагаем выгодно и удобно купить подарочные карты онлайн :
        </p>
        <ul className="mb-4">
          <li>
            <p>На квесты для детей и взрослых в QuestReality.</p>
          </li>
          <li>
            <p>На покупки в супермаркете «Перекресток».</p>
          </li>
          <li>
            <p>На заказы в сервисе Яндекс.Еда и мн. др.</p>
          </li>
        </ul>
        <p className="mb-5">
          У нас найдется решение даже если вы совершенно не знаете что дарить!
          Мы предлагаем универсальные электронные карты Giftery Card, которые
          можно обменять на сертификаты аналогичного номинала наших партнеров.
        </p>
        <h4 className="fw-bolder mb-3">Купить подарочные карты онлайн</h4>
        <p className="mb-5">
          Мы осуществляем продажу подарочных сертификатов с гарантией мгновенной
          доставки на email. Оформление заказов доступно для частных и
          юридических лиц. Для корпоративных клиентов мы с радостью подготовим
          подарочные сертификаты с дизайном, соответствующим фирменному стилю
          компании. Возможен выпуск карт в пластике. Подробнее о корпоративных
          подарках здесь.
        </p>
        <p className="mb-5">
          Устали дарить и получать бесполезные презенты? Станьте основателем
          хорошей традиции дарить приятные и нужные подарки с сервисом продажи
          электронных подарочных карт «Giftery»!
        </p>
        <ul
          className="d-flex flex-wrap p-0 accent-colors-list"
          style={{ listStyle: "none" }}
        >
          <li className="m-1">
            <Link to="/catalog" className="btn btn-light text-accent-colors">
              Хабаровск
            </Link>
          </li>
          <li className="m-1">
            <Link to="/catalog" className="btn btn-light text-accent-colors">
              Казань
            </Link>
          </li>
          <li className="m-1">
            <Link to="/catalog" className="btn btn-light text-accent-colors">
              {" "}
              Тверь{" "}
            </Link>
          </li>
          <li className="m-1">
            <Link to="/catalog" className="btn btn-light text-accent-colors">
              Воронеж
            </Link>
          </li>
          <li className="m-1">
            <Link to="/catalog" className="btn btn-light text-accent-colors">
              {" "}
              Пермь{" "}
            </Link>
          </li>
          <li className="m-1">
            <Link to="/catalog" className="btn btn-light text-accent-colors">
              Кемерово
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default OtherDescriptions;
