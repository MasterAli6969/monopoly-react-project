//<!--------------------- АККОРДИОНЫ ------------------->
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
          {accordionData.map((item) => {
            return (
              <>
                {item.id === 1 && (
                  <div key={item.id} id={item.idTeg} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-accent-colors"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.dataBsTarget}`}
                        aria-expanded="true"
                        aria-controls={item.dataBsTarget}
                      >
                        {item.accordName}
                      </button>
                    </h2>
                    <div
                      id={item.dataBsTarget}
                      className="accordion-collapse collapse p-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body d-flex justify-content-center flex-wrap p-0 mb-5">
                        {item.accordItem.map((item) => {
                          return (
                            <>
                              <div
                                key={item.id}
                                className="card"
                                style={{ width: "25rem" }}
                              >
                                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                  <img
                                    alt=""
                                    src={item.img}
                                    className="img-thumbnail mb-4"
                                  />
                                  <h5 className="card-title mb-3">
                                    {item.title}
                                  </h5>
                                  <p className="card-text">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      <div>
                        <p>
                          <strong>Протестируйте:</strong>
                          отправьте себе письмо с примером
                        </p>
                      </div>
                      <form className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Имя
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
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
                )}

                {item.id === 2 && (
                  <div key={item.id} id={item.idTeg} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-accent-colors"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.dataBsTarget}`}
                        aria-expanded="false"
                        aria-controls={item.dataBsTarget}
                      >
                        {item.accordName}
                      </button>
                    </h2>
                    <div
                      id={item.dataBsTarget}
                      className="accordion-collapse collapse p-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="mb-5">
                          <h3 className="fw-bolder mb-3">
                            {item.accordItem.title}
                          </h3>
                          <p className="mb-3">{item.accordItem.description1}</p>
                          <p className="p-0 m-0">
                            {item.accordItem.description2}
                          </p>
                          <p className="p-0 m-0">
                            {item.accordItem.description3}
                            <a href="/card-page">здесь</a>.
                          </p>
                        </div>
                        <div className="d-flex justify-content-center flex-wrap p-0 mb-5">
                          {item.accordItem.tablets.map((item) => {
                            return (
                              <>
                                <div
                                  key={item.id}
                                  className="card p-5 mx-2"
                                  style={{ width: "20rem" }}
                                >
                                  <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                    <i className={`${item.icons} fs-1`}></i>
                                    <p className="card-text">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === 3 && (
                  <div key={item.id} id={item.idTeg} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-accent-colors"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.dataBsTarget}`}
                        aria-expanded="false"
                        aria-controls={item.dataBsTarget}
                      >
                        {item.accordName}
                      </button>
                    </h2>
                    <div
                      id={item.dataBsTarget}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-5">
                        <ol>
                          {item.accordItem.map((item) => {
                            return (
                              <>
                                <li key={item.id} className="mb-3">
                                  <p>{item.text}</p>
                                </li>
                              </>
                            );
                          })}
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default RepliesAccordion;
