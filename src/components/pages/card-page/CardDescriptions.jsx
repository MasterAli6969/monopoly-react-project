//<!--------------------- НЕПОСРЕДСТВЕННО КАРТОЧКА ------------------->
import { useState } from "react";
function CardDescriptions({ dataCard }) {
  const [count, setCount] = useState(1);
  const handleDicrem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrem = () => {
    setCount(count + 1);
  };
  if (!dataCard) {
    return null;
  }
  const { name, description } = dataCard;
  const denomination = "100|200|300";

  console.log("Тут должны быть props данные", dataCard);
  return (
    <>
      <div className="col-md-6 col-sm-12 mb-5 bg-accent-colors rounded-5">
        <div className="w-100 d-flex flex-wrap justify-content-between align-items-center pt-5 px-3 mb-4">
          <div style={{ maxWidth: "130px" }}>
            <h1>{name}</h1>
            <p>Номинал</p>
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              {denomination.split("|").map((item, index) => {
                return (
                  <option key={index} selected>
                    {item}
                  </option>
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
                onClick={handleDicrem}
              >
                <i className="bi bi-dash-circle"></i>
              </button>
              <p className="mx-3 mb-0 _quantityProducts">{count}</p>
              <button
                type="button"
                className="btn btn-outline-secondary _addDuplicateProducts"
                onClick={handleIncrem}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <p>{description}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default CardDescriptions;
