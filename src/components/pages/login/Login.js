import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paramsLoginData } from "../../../utils/api/apiLogin";
function Login() {
  const navigate = useNavigate();
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
      await paramsLoginData(dataLogin);
      alert("Вы успешно авторизовались");
      navigate("/monopoly-react-project/profile");
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
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <button
                type="submit"
                class="btn btn-light rounded-5 over-accent-color text-accent-colors"
              >
                Войти
              </button>
              <a
                type="button"
                class="btn btn-light rounded-5 over-accent-color text-accent-colors"
                href="/monopoly-react-project/register"
              >
                Регистация
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
