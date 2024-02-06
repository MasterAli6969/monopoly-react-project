//<!--------------------- БЛОК - 3 Что такое электронные подарочные карты ------------------->
import React from "react";
import { modalTiles } from "./data";
function Block3() {
  return (
    <>
      <div class="col-12 mt-5 mb-5">
        <div class="container d-flex flex-wrap justify-content-center">
          {modalTiles.map((item) => {
            return (
              <>
                <div class="card" style={{ width: "14rem", margin: "10px" }}>
                  <div class="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
                    <i class={`${item.icons}`} style={{ fontSize: "50px" }} />
                    <p class="card-text text-center">{item.title}</p>
                    <div
                      data-bs-toggle="modal"
                      data-bs-target={`#${item.dataBsTargetId}`}
                      class="d-flex flex-wrap justify-content-between align-items-center mt-auto"
                    >
                      <h6 class="card-link custom_index_block3_card_link my-0 mx-3">
                        Подробнее
                      </h6>

                      <i class="bi bi-arrow-right fs-2" />
                    </div>
                    <div
                      class="modal fade"
                      id={`${item.dataBsTargetId}`}
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      {(item.id === 1 || item.id === 3) && (
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel "
                              >
                                {item.modalWindow.modalTitle}
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <p>{item.modalWindow.modalDescription}</p>
                              <ul class="custom_index_block3_card_link_exampleModal">
                                {item.modalWindow.modalList.map(
                                  (item, index) => {
                                    return (
                                      <>
                                        <li key={index}>
                                          <p>{item}</p>
                                        </li>
                                      </>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                      {(item.id === 2 || item.id === 4) && (
                        <>
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  {item.modalWindow.modalTitle}
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="fw-bolder mb-3">
                                  {item.modalWindow.modalDescription1}
                                </h5>
                                <ul class="custom_index_block3_card_link_exampleModal">
                                  {item.modalWindow.modalList1.map(
                                    (item, index) => {
                                      return (
                                        <>
                                          <li key={index}>
                                            <p>{item}</p>
                                          </li>
                                        </>
                                      );
                                    }
                                  )}
                                </ul>
                                <h5 class="mb-5">
                                  {item.modalWindow.modalDescription2}
                                </h5>
                                <ul class="custom_index_block3_card_link_exampleModal">
                                  {item.modalWindow.modalList2.map(
                                    (item, index) => {
                                      return (
                                        <>
                                          <li key={index}>
                                            <p>{item}</p>
                                          </li>
                                        </>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {item.id === 5 && (
                        <>
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  {item.modalWindow.modalTitle}
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              {item.modalWindow.modalBody.map((item) => {
                                return (
                                  <>
                                    <div key={item.id} class="modal-body">
                                      <h5 class="fw-bolder mb-3">
                                        {item.title}
                                      </h5>
                                      <p>{item.text}</p>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Block3;
