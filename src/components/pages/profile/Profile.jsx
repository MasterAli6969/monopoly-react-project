function Profile(params) {
  return (
    <>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-5 col-sm-12">
              <div
                class="btn-group-vertical mb-4 w-100"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  autocomplete="off"
                  checked
                />
                <label
                  class="btn btn-light accent-colors text-accent-colors p-3"
                  for="vbtn-radio1"
                >
                  Полученные
                  <span class="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
                <input
                  type="radio"
                  class="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                  autocomplete="off"
                />
                <label
                  class="btn btn-light accent-colors text-accent-colors p-3"
                  for="vbtn-radio2"
                >
                  Отправленные
                  <span class="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
                <input
                  type="radio"
                  class="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                  autocomplete="off"
                />
                <label
                  class="btn btn-light accent-colors text-accent-colors p-3"
                  for="vbtn-radio3"
                >
                  Ожидают оплаты
                  <span class="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
                <input
                  type="radio"
                  class="btn-check btn-lg"
                  name="vbtn-radio"
                  id="vbtn-radio4"
                  autocomplete="off"
                />
                <label
                  class="btn btn-light accent-colors text-accent-colors p-3"
                  for="vbtn-radio4"
                >
                  Каталог подарочных карт
                  <span class="badge over-accent-color text-accent-colors rounded-pill">
                    0
                  </span>
                </label>
              </div>
            </div>
            <div class="col-md-9 mb-5 col-sm-12">
              <div
                class="d-flex flex-column align-items-center justify-content-center rounded-1 p-5 shadow"
                style={{ backgroundColor: "#f6f6f6" }}
              >
                <i class="bi bi-gift mb-4" style={{ fontSize: "100px" }}></i>
                <h4 class="mb-4 text-center">
                  Вам пока никто не отправил подарочный сертификат, но это
                  можете сделать вы!
                </h4>
                <a
                  href="catalog-page.html"
                  class="w-75 btn btn-light btn-lg accent-colors text-accent-colors"
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
