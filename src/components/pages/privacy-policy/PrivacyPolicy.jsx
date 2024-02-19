import React from "react";
import { privacyPolicyData } from "./data";
function PrivacyPolicy() {
  return (
    <>
      <div class="container-fluid p-0">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center mb-5">
            <h1>Политика конфиденциальности</h1>
          </div>
          <ol class="text-main-colors-lists">
            {privacyPolicyData && (
              <>
                {privacyPolicyData.map((item) => {
                  return (
                    <>
                      <li key={item.id} class="mb-5">
                        <h5 class="mb-3">{item.title}</h5>
                        <p>{item.text}</p>
                      </li>
                    </>
                  );
                })}
              </>
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
