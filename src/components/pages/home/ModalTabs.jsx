//<!--------------------- БЛОК - 3 Что такое электронные подарочные карты ------------------->
import { modalTiles } from "./data";
function ModalTabs() {
  return (
    <>
      <div className="col-12 mt-5 mb-5">
        <div className="container d-flex flex-wrap justify-content-center">
          {modalTiles.map((item) => {
            return (
              <div
                className="card"
                style={{ width: "14rem", margin: "10px" }}
                key={item.id}
              >
                <div className="card-body d-flex flex-column align-items-center custom_index_block3_card_body">
                  <i className={`${item.icons}`} style={{ fontSize: "50px" }} />
                  <p className="card-text text-center">{item.title}</p>
                  <div
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.dataBsTargetId}`}
                    className="d-flex flex-wrap justify-content-between align-items-center mt-auto"
                  >
                    <h6 className="card-link custom_index_block3_card_link my-0 mx-3">
                      Подробнее
                    </h6>

                    <i className="bi bi-arrow-right fs-2" />
                  </div>
                  <div
                    className="modal fade"
                    id={item.dataBsTargetId}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    {(item.id === 1 || item.id === 3) && (
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel "
                            >
                              {item.modalWindow.modalTitle}
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>{item.modalWindow.modalDescription}</p>
                            <ul className="custom_index_block3_card_link_exampleModal">
                              {item.modalWindow.modalList.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <p>{item}</p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {(item.id === 2 || item.id === 4) && (
                      <>
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                {item.modalWindow.modalTitle}
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <h5 className="fw-bolder mb-3">
                                {item.modalWindow.modalDescription1}
                              </h5>
                              <ul className="custom_index_block3_card_link_exampleModal">
                                {item.modalWindow.modalList1.map(
                                  (item, index) => {
                                    return (
                                      <li key={index}>
                                        <p>{item}</p>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                              <h5 className="mb-5">
                                {item.modalWindow.modalDescription2}
                              </h5>
                              <ul className="custom_index_block3_card_link_exampleModal">
                                {item.modalWindow.modalList2.map(
                                  (item, index) => {
                                    return (
                                      <li key={index}>
                                        <p>{item}</p>
                                      </li>
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
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                {item.modalWindow.modalTitle}
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            {item.modalWindow.modalBody.map((item) => {
                              return (
                                <div key={item.id} className="modal-body">
                                  <h5 className="fw-bolder mb-3">
                                    {item.title}
                                  </h5>
                                  <p>{item.text}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ModalTabs;
