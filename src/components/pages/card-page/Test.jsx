import { useDispatch, useSelector } from "react-redux";
import {
  setDenomination,
  setTotal,
} from "../../../features/shoppinCartRenderReduser";

function Test() {
  const totalStateRedux = useSelector(
    (state) => state.shoppinCartRenderReduser.total
  );
  const dispatch = useDispatch();
  const handleDenomination = (event) => {
    const value = parseInt(event.target.value, 10);
    dispatch(setDenomination(value));
    dispatch(setTotal(value));
  };
  return (
    <>
      <h1>Test</h1>
      <input onChange={handleDenomination} type="number" />

      <h1>{totalStateRedux}</h1>
    </>
  );
}

export default Test;
