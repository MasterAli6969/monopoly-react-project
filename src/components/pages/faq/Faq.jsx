import React from "react";
import { dataFaq } from "./data";
function Faq() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <h1>Часто задаваемые вопросы</h1>
          </div>

          <ol className="text-main-colors-lists">
            {dataFaq.map((item) => {
              return (
                <>
                  <li key={item.id} className="mb-5">
                    <h5 className="mb-3">{item.title}</h5>
                    <p>{item.description}</p>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default Faq;
