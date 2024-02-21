function Profile() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-5 col-sm-12">
              <div
                className="btn-group-vertical mb-4 w-100"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  autoComplete="off"
                  checked
                />
                <label
                  className="btn btn-light accent-colors text-accent-colors p-3"
                  htmlFor="vbtn-radio1"
                >
                  Полученные
                  <span className="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
                <input
                  type="radio"
                  className="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light accent-colors text-accent-colors p-3"
                  htmlFor="vbtn-radio2"
                >
                  Отправленные
                  <span className="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
                <input
                  type="radio"
                  className="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light accent-colors text-accent-colors p-3"
                  htmlFor="vbtn-radio3"
                >
                  Ожидают оплаты
                  <span className="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
                <input
                  type="radio"
                  className="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio4"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light accent-colors text-accent-colors p-3"
                  htmlFor="vbtn-radio4"
                >
                  Каталог подарочных карт
                  <span className="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
              </div>
            </div>
            <div className="col-md-9 mb-5 col-sm-12">
              <div
                className="d-flex flex-column align-items-center justify-content-center rounded-1 p-5 shadow"
                style={{ backgroundColor: "#f6f6f6" }}
              >
                <i
                  className="bi bi-gift mb-4"
                  style={{ fontSize: "100px" }}
                ></i>
                <h4 className="mb-4 text-center">
                  Вам пока никто не отправил подарочный сертификат, но это
                  можете сделать вы!
                </h4>
                <a
                  href="catalog-page.html"
                  className="w-75 btn btn-light btn-lg accent-colors text-accent-colors"
                >
                  Отправить сейчас!
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
