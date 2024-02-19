import React from "react";
import { ofertData } from "./data";
function Oferta() {
  return (
    <>
      <div class="container-fluid p-0">
        <div class="container">
          {ofertData && (
            <>
              {ofertData.map((item) => {
                return (
                  <>
                    <div key={item.id} class="mb-3">
                      <h2 class="mb-5">{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Oferta;
