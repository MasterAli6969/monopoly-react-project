import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateRandomPassword } from "../../../utils/auxiliary";
import { paramsAuthData } from "../../../utils/api/apiLogin";
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
      navigate("/monopoly-react-project/login");
    } catch (error) {
      console.error("Registration failed:", error);
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
                value={emeil}
                onChange={handleMailChange}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">
                <p className="m-0">ФИО</p>
              </label>
              <input
                type="text"
                class="form-control"
                value={name}
                onChange={handleNameChange}
              />
              <div id="emailHelp" class="form-text"></div>
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
export default Register;
