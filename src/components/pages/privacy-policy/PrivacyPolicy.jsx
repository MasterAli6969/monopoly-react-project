import { privacyPolicyData } from "./data";
function PrivacyPolicy() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <h1>Политика конфиденциальности</h1>
          </div>
          <ol className="text-main-colors-lists">
            {privacyPolicyData &&
              privacyPolicyData.map((item) => {
                return (
                  <li key={item.id} className="mb-5">
                    <h5 className="mb-3">{item.title}</h5>
                    <p>{item.text}</p>
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
