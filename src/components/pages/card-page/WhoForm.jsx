// <!--------------------- КОМУ ОТПРАВИТЬ? ЧЕКБОКСЫ ------------------->
function WhoForm() {
  return (
    <>
      <div className="col-md-4 col-sm-12 mb-5 p-0 rounded-2 shadow-lg bg-accent-colors">
        <div className="d-flex justify-content-around rounded-top p-3 accent-colors">
          <p className="text-accent-colors">Кому отправить?</p>
          <p className="text-accent-colors">1/4</p>
        </div>
        <div
          className="d-flex flex-column justify-content-between p-5"
          style={{ height: "400px" }}
        >
          <form>
            <div className="form-check bg-accent-colors">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label">Default radio</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label className="form-check-label">Default checked radio</label>
            </div>
          </form>
          <div>
            <hr />
            <p>
              Сертификат будет отправлен на email или в sms получателя, сразу
              или в указанную дату и время
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhoForm;
