//<!--------------------- ТРИ КНОПКИ ------------------->
import { questionButton } from "./data";
function QuestionButton() {
  return (
    <>
      <div className="col-12 mb-5">
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          {questionButton.map((item) => {
            return (
              <button
                key={item.id}
                type="button"
                className="btn btn-light m-3 accard-btn__size _anchorButton accent-colors text-accent-colors"
                data-target={item.dataTarget}
                data-bs-target={`#${item.dataBsTarget}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default QuestionButton;
