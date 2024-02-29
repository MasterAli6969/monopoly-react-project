import { ofertData } from "./data";
function Oferta() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container">
          {ofertData && (
            <>
              {ofertData.map((item) => {
                return (
                  <>
                    <div key={item.id} className="mb-3">
                      <h2 className="mb-5">{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Oferta;
