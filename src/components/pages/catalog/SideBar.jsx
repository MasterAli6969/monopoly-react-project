// <!--------------------- Левый SIDEBAR ------------------->
import React, { useState, useEffect } from "react";
import {
  getSideCategoryFilters,
  getSideDesignedFilters,
  getSideDesignedOccasion,
  getFitersParamsCard,
} from "../../../services/api/apiCatalog";
function SideBar() {
  const [filtersCategory, setFisltersCategory] = useState([]);
  const [filtersDesigned, setFisltersDesigned] = useState([]);
  const [filtersOccasion, setFisltersOccasion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDesigned, setSelectedDesigned] = useState(0);
  const [selectedOccasion, setSelectedOccasion] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const filtersDataCategory = await getSideCategoryFilters();
      const filtersDataDesigned = await getSideDesignedFilters();
      const filtersDataOccasion = await getSideDesignedOccasion();
      setFisltersCategory(filtersDataCategory);
      setFisltersDesigned(filtersDataDesigned);
      setFisltersOccasion(filtersDataOccasion);
    };
    getData();
  }, []);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleSelectChangeDesigned = (event) => {
    setSelectedDesigned(event.target.value);
  };
  const handleSelectChangeOccasion = (event) => {
    setSelectedOccasion(event.target.value);
  };
  const handleSubmitFilterParam = async (event) => {
    event.preventDefault();
    const params = {
      q: searchQuery,
      category_id: selectedCategory,
      designed_id: selectedDesigned,
      occasion_id: selectedOccasion,
    };
    try {
      const data = await getFitersParamsCard(params);
      console.log("Результат полученный из getFitersParamsCard:", data);
      alert("Данные ушли");
    } catch (error) {
      alert("Ошибка при запросе");
      console.error("Ошибка при запросе:", error);
    }
  };
  return (
    <>
      <div className="col-md-3 col-sm-12 mb-5 p-0">
        <form
          className="d-flex flex-column mb-3"
          onSubmit={handleSubmitFilterParam}
        >
          <input
            className="form-control mb-3 rounded-5 form-control-search__input"
            type="search"
            placeholder="Поиск"
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <>
            {(!filtersCategory || filtersCategory.length === 0) && (
              <div>
                <h6>Упс, что то пошло не так... </h6>
              </div>
            )}
            {filtersCategory.data &&
              filtersCategory.data.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="w-100 btn btn-light btn-lg rounded-5 accent-colors text-accent-colors my-2"
                    >
                      <select
                        className=" border-0 bg-transparent text-white"
                        id="floatingSelect"
                        value={selectedCategory}
                        onChange={handleSelectChangeCategory}
                      >
                        <option selected>Все</option>
                        <option
                          className="accent-colors border-0"
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      </select>
                    </div>
                  </>
                );
              })}
            {(!filtersDesigned || filtersDesigned.length === 0) && (
              <div>
                <h6>Упс, что то пошло не так... </h6>
              </div>
            )}
            {filtersDesigned.data &&
              filtersDesigned.data.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="w-100 btn btn-light btn-lg rounded-5 accent-colors text-accent-colors my-2"
                    >
                      <select
                        className=" border-0 bg-transparent text-white"
                        id="floatingSelect"
                        value={selectedDesigned}
                        onChange={handleSelectChangeDesigned}
                      >
                        <option selected>Все</option>
                        <option
                          className="accent-colors border-0"
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      </select>
                    </div>
                  </>
                );
              })}
            {(!filtersOccasion || filtersOccasion.length === 0) && (
              <div>
                <h6>Упс, что то пошло не так... </h6>
              </div>
            )}
            {filtersOccasion.data &&
              filtersOccasion.data.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="w-100 btn btn-light btn-lg rounded-5 accent-colors text-accent-colors my-2"
                    >
                      <select
                        className=" border-0 bg-transparent text-white"
                        id="floatingSelect"
                        value={selectedOccasion}
                        onChange={handleSelectChangeOccasion}
                      >
                        <option selected>Все</option>
                        <option
                          className="accent-colors border-0"
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      </select>
                    </div>
                  </>
                );
              })}
          </>
          <div>
            <button
              type="submit"
              href="user-profile.html"
              className="btn btn-light rounded-5 over-accent-color text-accent-colors w-100 mt-5 fs-5"
            >
              Применить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SideBar;
