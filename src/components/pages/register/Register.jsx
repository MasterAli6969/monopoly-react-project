import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateRandomPassword } from "../../../utils/auxiliary";
import { paramsAuthData } from "../../../services/api/apiLogin";
function Register() {
  const navigate = useNavigate();
  const [emeil, setEmeil] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const generatedPassword = generateRandomPassword();
    setPassword(generatedPassword);
  }, []);

  const handleMailChange = (event) => {
    setEmeil(event.target.value);
    const emailParts = event.target.value.split("@");
    const usernameGener = emailParts[0];
    setUserName(usernameGener);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const dataRegist = {
      email: emeil,
      password: password,
      is_active: true,
      is_superuser: false,
      is_verified: false,
      name: name,
      username: userName,
      role_id: 1,
    };
    try {
      await paramsAuthData(dataRegist);
      alert("Ваш логин и пароль отправлен на указанную почту");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
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
                value={emeil}
                onChange={handleMailChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <p className="m-0">ФИО</p>
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={handleNameChange}
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <button
              type="submit"
              className="btn btn-light rounded-5 over-accent-color text-accent-colors "
            >
              Далее
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
