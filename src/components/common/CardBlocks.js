import React, { useEffect, useState } from "react";
import { getCatalogData } from "../../utils/apiCatalog";
function CardBlocks() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const productsData = await getCatalogData();
      setProducts(productsData);
    };
    getData();
  }, []);
  return (
    <>
      <div className="col-12 mt-5 mb-5">
        <div className="container d-flex justify-content-center flex-wrap">
          {products.data != null && (
            <>
              {products.data.map((item) => {
                return (
                  <div
                    key={item.id}
                    class="card"
                    style={{ width: "17rem", margin: "10px" }}
                  >
                    <div class="card-body d-flex flex-column align-items-start justify-content-between">
                      <div>
                        <img
                          src={item.image_url}
                          class="img-thumbnail mb-3"
                          alt=""
                        />
                        <h5 class="card-title mb-5">{item.name}</h5>
                      </div>
                      <div>
                        <p class="card-text">Номинал</p>
                        <h5 class="card-text">{item.denomination}</h5>
                        <button
                          type="button"
                          class="btn btn-light accent-colors text-accent-colors w-100"
                          data-bs-toggle="modal"
                          data-bs-target={"#exampleModal6"}
                        >
                          Купить
                        </button>

                        <div
                          class="modal fade"
                          id={"exampleModal6"}
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content bg-accent-colors">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Giftery Card
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="d-flex justify-content-between flex-wrap mb-5">
                                  <img
                                    src={item.image_url}
                                    class="img-thumbnail modal-body__image-size m-3 mb-3"
                                    alt=""
                                  />
                                  <div class="px-2 modal-body__description-size m-3">
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                                <div class="d-flex justify-content-around flex-wrap mb-5">
                                  <a
                                    href="pages/card-page.html"
                                    class="btn btn-light btn-lg rounded-5 m-3 modal-body__button-size accent-colors text-accent-colors"
                                  >
                                    Отправить себе
                                  </a>
                                  <a
                                    href="pages/card-page.html"
                                    class="btn btn-light btn-lg rounded-5 m-3 modal-body__button-size over-accent-color text-accent-colors"
                                  >
                                    Отправить в подарок
                                  </a>
                                </div>
                                <div class="container-fluid d-flex justify-content-around flex-wrap mb-5 p-3 accent-colors">
                                  <div
                                    class="card d-flex flex-column align-items-center rounded-3 m-3"
                                    style={{ width: "18rem" }}
                                  >
                                    <i class="bi bi-mailbox-flag fs-1"></i>
                                    <div class="card-body">
                                      <p class="card-text">
                                        Обменяйте Giftery Card в рамках номинала
                                        на один или несколько сертификатов из
                                        каталога Giftery",
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="d-flex justify-content-around flex-wrap">
                                  <div class="px-2 custom_index_block3_card_modal_description">
                                    <h4 class="mb-3 fw-bolder">
                                      Корпоративный заказ
                                    </h4>
                                    <p class="">
                                      Закажите подарочные карты оптом.
                                    </p>
                                  </div>
                                  <a
                                    href="/"
                                    class="btn btn-light btn-lg rounded-5 m-3 accent-colors text-accent-colors"
                                  >
                                    Оставить заявку
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default CardBlocks;
