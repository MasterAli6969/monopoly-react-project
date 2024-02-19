import React, { useState } from "react";
import { shoppingCartData } from "./data";

function ShoppingCart() {
  const [total, setTotal] = useState(0);

  const handleDeduction = (howMuch) => {
    setTotal(total - howMuch);
  };

  const handleAddition = (howMuch) => {
    setTotal(total + howMuch);
  };

  return (
    <div className="container-fluid p-0">
      {shoppingCartData.length === 0 ? (
        <div className="container rounded-2 p-0 mb-5 bg-accent-colors">
          <div className="d-flex justify-content-center align-items-center rounded-top py-3 accent-colors">
            <h5 className="text-accent-colors">Корзина пуста</h5>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <p className="text-center mb-5">
              Добавьте в корзину электронные подарочные сертификаты и порадуйте
              близких.
            </p>
            <a
              href="/catalog"
              className="btn btn-light btn-lg rounded-5 p-3 accent-colors text-accent-colors"
            >
              Добавить сертификат
            </a>
          </div>
        </div>
      ) : (
        <div className="container table-responsive mt-5 shadow-lg rounded-5 p-5 bg-main-colors">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <h6>Сертификат</h6>
                </th>
                <th scope="col">
                  <h6>Получатель</h6>
                </th>
                <th scope="col">
                  <h6>Номинал</h6>
                </th>
                <th scope="col">
                  <h6>Количество</h6>
                </th>
                <th scope="col">
                  <h6>Итого</h6>
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {shoppingCartData.map((item, index) => (
                <tr key={index} className="_productsCouter _productsDelete">
                  <th scope="row">
                    <h6>{item.id}</h6>
                  </th>
                  <td>
                    <img
                      src={item.certificateImg}
                      className="img-fluid"
                      style={{ width: "200px", height: "100px" }}
                      alt=""
                    />
                  </td>
                  <td>
                    <div>
                      <p>{item.recipient.name}</p>
                      <p>{item.recipient.mail}</p>
                    </div>
                  </td>
                  <td>
                    <span className="_denomination">
                      {item.nominal.howMuch}
                    </span>{" "}
                    {item.nominal.currency}.
                  </td>
                  <td>
                    <div style={{ maxWidth: "130px" }}>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() => handleDeduction(item.nominal.howMuch)}
                          type="button"
                          className="btn btn-outline-secondary _removeDuplicateProducts"
                        >
                          <i className="bi bi-dash-circle"></i>
                        </button>
                        <p className="mx-3 mb-0 _quantityProducts">1</p>
                        <button
                          onClick={() => handleAddition(item.nominal.howMuch)}
                          type="button"
                          className="btn btn-outline-secondary _addDuplicateProducts"
                        >
                          <i className="bi bi-plus-circle"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <p>
                        <span className="_totalPrice">
                          {total === 0 ? item.nominal.howMuch : total}
                        </span>{" "}
                        Р.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-light btn-sm rounded-5"
                        data-bs-toggle="tooltip"
                        data-bs-title="Редактировать карту"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <br />
                      <button
                        type="button"
                        className="btn btn-light btn-sm rounded-5 my-4 _removeProduct"
                        data-bs-toggle="tooltip"
                        data-bs-title="Удалить карту"
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
