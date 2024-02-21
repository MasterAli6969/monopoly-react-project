import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paramsLoginData } from "../../../services/api/apiLogin";
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
    try {
      await paramsLoginData(dataLogin);
      alert("Вы успешно авторизовались");
      navigate("/profile");
    } catch (error) {
      console.error("Registration failed:ОШИБКА ТВОЯ", error);
      alert("загляни в консоль");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex justify-content-center">
          <form
            className=" shadow-lg rounded-5 p-5 w-50"
            onSubmit={handleSubmitForm}
          >
            <div className="mb-3">
              <label className="form-label">
                <p className="m-0">Укажите ваш email</p>
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleMailChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <p className="m-0">Password</p>
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={handleNameChange}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <button
                type="submit"
                className="btn btn-light rounded-5 over-accent-color text-accent-colors"
              >
                Войти
              </button>
              <a
                type="button"
                className="btn btn-light rounded-5 over-accent-color text-accent-colors"
                href="/register"
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
