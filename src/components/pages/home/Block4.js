//<!--------------------- БЛОК - 4 Выбирайте из 300 подарочных ------------------->

import React from "react";
import { cardData } from "./data";
import Card from "../../common/Card";
export { cardData } from "./data";
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
          <Card data={cardData} />
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
