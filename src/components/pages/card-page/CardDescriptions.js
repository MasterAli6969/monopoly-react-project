//<!--------------------- НЕПОСРЕДСТВЕННО КАРТОЧКА ------------------->
import React from "react";
import { valuePrice } from "./data";
function CardDescriptions() {
  return (
    <>
      <div className="col-md-6 col-sm-12 mb-5 bg-accent-colors rounded-5">
        <div className="w-100 d-flex flex-wrap justify-content-between align-items-center pt-5 px-3 mb-4">
          <div style={{ maxWidth: "130px" }}>
            <p>Номинал</p>
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              {valuePrice.map((item) => {
                return (
                  <>
                    <option key={item.id} selected>
                      {item.value}
                    </option>
                  </>
                );
              })}
            </select>
            <p>
              К оплате — 540
              <i
                className="bi bi-exclamation-circle"
                data-bs-toggle="tooltip"
                data-bs-title="Комиссия 8%"
              ></i>
            </p>
          </div>
          <div style={{ maxWidth: "130px" }}>
            <p>Количество</p>
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-outline-secondary _removeDuplicateProducts"
              >
                <i className="bi bi-dash-circle"></i>
              </button>
              <p className="mx-3 mb-0 _quantityProducts">1</p>
              <button
                type="button"
                className="btn btn-outline-secondary _addDuplicateProducts"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <p>
              Обмен на одну или несколько карт Lamoda, ЛитРес и другие.
              <a href="/card-page">Стандартный список обмена</a>
            </p>
          </li>
          <li>
            <p>
              Выберите дизайн или <a href="/card-page">загрузите свой</a>
            </p>
          </li>
          <li>
            <p>
              Смотрите также <a href="/card-page">Premium Giftery Card</a>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default CardDescriptions;
