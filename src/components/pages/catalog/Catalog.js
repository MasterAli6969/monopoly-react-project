import React from "react";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
function Catalog() {
  return (
    <>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
          </div>
        </div>
      </div>
    </>
  );
}
export default Catalog;
