import React, { useState } from "react";
import axios from "axios";
const BASEURL = "http://162.0.234.100:5095";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const dataLogin = {
      username: email,
      password: password,
    };
    console.log(dataLogin);
    try {
      await axios.post(BASEURL + "/auth/login", dataLogin, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      alert("Данные ушли");
    } catch (error) {
      console.error("Registration failed:ОШИБКА ТВОЯ", error);
    }
  };
  return (
    <>
      <div class="container-fluid">
        <div class="container d-flex justify-content-center">
          <form
            className=" shadow-lg rounded-5 p-5 w-50"
            onSubmit={handleSubmitForm}
          >
            <div class="mb-3">
              <label class="form-label">
                <p className="m-0">Укажите ваш email</p>
              </label>
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={handleMailChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                <p className="m-0">Password</p>
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={handleNameChange}
              />
            </div>
            <button
              type="submit"
              class="btn btn-light rounded-5 over-accent-color text-accent-colors "
            >
              Далее
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
