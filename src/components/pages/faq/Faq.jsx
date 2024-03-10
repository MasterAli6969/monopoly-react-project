import { dataFaq } from "./data";
import { incrementCartValue } from "../../../features/cartValueReducer";
import { useDispatch } from "react-redux";
function Faq() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(incrementCartValue());
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <h1>Часто задаваемые вопросыcacs</h1>
          </div>

          <ol className="text-main-colors-lists">
            {dataFaq.map((item) => {
              return (
                <li key={item.id} className="mb-5">
                  <h5 className="mb-3">{item.title}</h5>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ol>
          <button
            onClick={handleOnClick}
            type="button"
            className="btn btn-primary"
          >
            Redux
          </button>
        </div>
      </div>
    </>
  );
}
export default Faq;
