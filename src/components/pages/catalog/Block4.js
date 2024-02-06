//<!--------------------- Пагинация ------------------->
import React from "react";
function Block4() {
  return (
    <>
      <div class="col-12 mb-5 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="catalog">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="catalog">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="catalog">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="catalog">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="catalog">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Block4;
