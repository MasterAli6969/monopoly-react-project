//<!--------------------- Пагинация ------------------->
import { paginateData } from "./data";
function Pagination() {
  return (
    <>
      <div className="col-12 mb-5 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {paginateData.map((item) => {
              return (
                <>
                  <li key={item.id} className="page-item">
                    <a className="page-link" href={item.href}>
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
export default Pagination;
