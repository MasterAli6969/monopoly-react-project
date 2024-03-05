//<!--------------------- Пагинация ------------------->
import { Link } from "react-router-dom";
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
                    <Link className="#" to={item.href}>
                      {item.pagin}
                    </Link>
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
