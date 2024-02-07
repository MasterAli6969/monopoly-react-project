//<!--------------------- Пагинация ------------------->
import React from "react";
import { paginateData } from "./data";
function Block4() {
  return (
    <>
      <div class="col-12 mb-5 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {paginateData.map((item) => {
              return (
                <>
                  <li key={item.id} class="page-item">
                    <a class="page-link" href={item.href}>
                      {item.pagin}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Block4;
