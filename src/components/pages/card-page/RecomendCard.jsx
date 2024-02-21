//<!--------------------- КАРТОЧКИ РЕКОМЕНДАЦИЙ ------------------->
import CardBlocks from "../../common/CardBlocks";
function RecomendCard() {
  return (
    <>
      <div className="col-12 mb-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bolder">Также вас может заинтересовать</h2>
          <CardBlocks />
        </div>
      </div>
    </>
  );
}
export default RecomendCard;
