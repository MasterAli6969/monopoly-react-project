//<!--------------------- НЕПОСРЕДСТВЕННО КАРТОЧКА ------------------->
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../../features/shoppinCartRenderReduser";
function CardDescriptions({ dataCard }) {
  const { name, description, denomination } = dataCard;
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState();
  const [denominationSel, setDenominationSel] = useState();
  const [channgeDataCard, setChanngeDataCard] = useState({
    name: "",
    denomination: 0,
    quantity: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (denomination) {
      const initialDenomination = parseInt(denomination.split("|")[0], 10);
      setDenominationSel(initialDenomination);
    }
  }, [denomination]);

  useEffect(() => {
    if (denominationSel !== undefined) {
      setTotal(denominationSel + denominationSel * 0.08);
    }
  }, [denominationSel]);

  useEffect(() => {
    setChanngeDataCard((prevData) => ({
      ...prevData,
      name: name,
      denomination: total,
      quantity: count,
    }));
  }, [name, total, count]);

  const handleDicrem = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotal(
        (prevTotal) => prevTotal - denominationSel - 0.08 * denominationSel
      );
    }
  };

  const handleIncrem = () => {
    setCount(count + 1);
    setTotal(
      (prevTotal) => prevTotal + denominationSel + 0.08 * denominationSel
    );
  };

  const handleDenomination = (event) => {
    const value = event.target.value;
    setDenominationSel(parseInt(value, 10));
    setCount(1);
  };

  const handleDataCard = (event) => {
    event.preventDefault();
    dispatch(setCartData(channgeDataCard));
    console.log(dispatch(setCartData(channgeDataCard)));
  };

  // const newDataCollection = useSelector(
  //   (state) => state.shoppinCartRenderReduser
  // );
  return (
    <>
      {dataCard && (
        <div className="col-md-6 col-sm-12 mb-5 bg-accent-colors rounded-5">
          <form
            onSubmit={handleDataCard}
            className="w-100 d-flex flex-wrap justify-content-between align-items-center pt-5 px-3 mb-4"
          >
            <div style={{ maxWidth: "130px" }}>
              <h1>{name}</h1>
              <p>Номинал</p>
              <select
                className="form-select mb-3"
                id="floatingSelect"
                aria-label="Floating label select example"
                value={denominationSel}
                onChange={handleDenomination}
              >
                {denomination &&
                  denomination.split("|").map((item, index) => (
                    <option defaultValue={index[0]} key={index}>
                      {item}
                    </option>
                  ))}
              </select>
              <p>
                К оплате — {total}
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
            <button type="submit">Test Redux Dispatch</button>
          </form>
          <ul>
            <li>
              <p>{description}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
export default CardDescriptions;
