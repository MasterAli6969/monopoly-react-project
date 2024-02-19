import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import SideBar from "./SideBar";
import CatalogCards from "./CatalogCards";
import Pagination from "./Pagination";
import OtherDescriptions from "./OtherDescriptions";
function Catalog() {
  return (
    <>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <Breadcrumbs />
            <SideBar />
            <CatalogCards />
            <Pagination />
            <OtherDescriptions />
          </div>
        </div>
      </div>
    </>
  );
}
export default Catalog;
