//<!--------------------- НЕПОСРЕДСТВЕННО КАРТОЧКА ------------------->
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDenomination,
  setCountIncrem,
  setCountDicrem,
  setTotalIncrem,
  setTotalDicrem,
  setCountToDefault,
} from "../../../features/shoppinCartRenderReduser";
function CardDescriptions({ dataCard }) {
  const { name, description, denomination } = dataCard;
  //const [total, setTotal] = useState();
  //const [denominationSel, setDenominationSel] = useState();
  const countStateRedux = useSelector(
    (state) => state.shoppinCartRenderReduser.count
  );
  const denominationStateRedux = useSelector(
    (state) => state.shoppinCartRenderReduser.denomination
  );
  const totalStateRedux = useSelector(
    (state) => state.shoppinCartRenderReduser.total
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (denomination) {
      const initialDenomination = parseInt(denomination.split("|")[0], 10);
      dispatch(setDenomination(initialDenomination));
    }
  }, [denomination, dispatch]);

  // useEffect(() => {
  //   if (denominationSel !== undefined) {
  //     setTotal(denominationSel + denominationSel * 0.08);
  //   }
  // }, [denominationSel]);

  const handleIncrem = () => {
    dispatch(setCountIncrem());
    dispatch(setTotalIncrem(denominationStateRedux));
  };

  const handleDicrem = () => {
    dispatch(setCountDicrem(denominationStateRedux));
    dispatch(setTotalDicrem(denominationStateRedux));
  };

  const handleDenomination = (event) => {
    const value = parseInt(event.target.value, 10);
    dispatch(setDenomination(value));
    dispatch(setCountToDefault());
  };

  return (
    <>
      {dataCard && (
        <div className="col-md-6 col-sm-12 mb-5 bg-accent-colors rounded-5">
          <div className="w-100 d-flex flex-wrap justify-content-between align-items-center pt-5 px-3 mb-4">
            <div style={{ maxWidth: "130px" }}>
              <h1>{name}</h1>
              <p>Номинал</p>
              <select
                className="form-select mb-3"
                id="floatingSelect"
                aria-label="Floating label select example"
                value={denominationStateRedux}
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
                К оплате — {totalStateRedux}
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
                <p className="mx-3 mb-0 _quantityProducts">{countStateRedux}</p>
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
      )}
    </>
  );
}
export default CardDescriptions;
