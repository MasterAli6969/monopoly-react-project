//<!--------------------- Хлебные крошки и загаловок ------------------->
import React from "react";
function Breadcrumbs() {
  return (
    <>
      <div className="col-12 mb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="file:///home/ubuntu/monopoly-front-project/index.html">
                Главная
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Подарочные сертификаты и карты
            </li>
          </ol>
        </nav>
        <h3>Подарочные сертификаты и карты</h3>
      </div>
    </>
  );
}
export default Breadcrumbs;
