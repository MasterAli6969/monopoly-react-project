//<!--------------------- Карточки товаров ------------------->
import React from "react";
import CardBlocks from "../../common/CardBlocks";
function CatalogCards() {
  return (
    <>
      <div className="col-md-9 col-sm-12 mb-5">
        <div className="container d-flex justify-content-center flex-wrap">
          <CardBlocks />
        </div>
      </div>
    </>
  );
}
export default CatalogCards;
