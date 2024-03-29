//<!--------------------- ФОРМА ДЛЯ ОФОРМЛЕНИЯ КАРТЫ ------------------->
import { useDispatch } from "react-redux";
import { incrementCartValue } from "../../../features/cartValueReducer";
function WhoDataForm() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(incrementCartValue());
  };
  return (
    <>
      <div className="col-md-7 col-sm-12 mb-5 p-0 rounded-2 d-flex flex-column shadow-lg bg-accent-colors">
        <div className="d-flex rounded-top p-3 accent-colors text-accent-colors">
          <p className="muted text-accent-colors">
            Отправитель
            <i
              className="bi bi-exclamation-circle text-accent-colors"
              data-bs-toggle="tooltip"
              data-bs-title="Обязательно укажите ваш e-mail"
            ></i>
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-between p-5"
          style={{ height: "400px" }}
        >
          <form>
            <div className="mb-3">
              <label className="form-label">
                <p>Имя</p>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <p>Email*</p>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </form>

          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <button
              type="button"
              className="btn btn-light rounded-5 btn-lg my-2 _buttonAddCart over-accent-color text-accent-colors"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleOnClick}
            >
              Добавить в корзину
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Подарочная карта добавлена в корзину.
                    </h1>
                    <button
                      type="button"
                      className="btn-close btn-lg"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <h5>Перейти в карзину?</h5>
                      <a
                        className="w-75 btn btn-light btn-lg rounded-5 p-2 m-3 over-accent-color text-accent-colors"
                        href="shopping-full-cart.html"
                      >
                        Да
                      </a>

                      <button
                        type="button"
                        className="btn btn-light btn-lg rounded-5 w-75 p-2 m-3 accent-colors text-accent-colors"
                        data-bs-dismiss="modal"
                      >
                        Продолжить покупки
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-light btn-lg rounded-5 my-2 over-accent-color text-accent-colors"
            >
              Далее
              <i className="bi bi-arrow-right-circle-fill text-accent-colors"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhoDataForm;
