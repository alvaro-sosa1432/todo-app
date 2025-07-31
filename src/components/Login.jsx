import { useState } from "react";
import { useNavigate } from "react-router";
import { LoginWithEmailPassword } from "../services/Login";
import { LabelInputForm } from "./LabelInput";
export const Form = ({ button }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await LoginWithEmailPassword(email, password);
      if (user) {
      }
    } catch (error) {
      console.log("error de autenticacion", error);
    }
  };

  console.log(email, password);
  return (
    <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2">
        <LabelInputForm
          name="Email"
          value={email}
          setValue={setEmail}
          type={"email"}
          placeholder={" example@gmail.com"}
        />
      </div>
      <LabelInputForm
        name={"Password"}
        value={password}
        setValue={setPassword}
        type={"password"}
        placeholder={"********"}
      />
      <div>
        <button className="bg-cyan-500 w-28 h-10 my-5 rounded-lg hover:bg-cyan-700  ">
          {button}
        </button>
      </div>
    </form>
  );
};
