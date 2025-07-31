import { Form } from "../components/Login";

export const LoginRegister = () => {
  return (
    <div>
      <section className="text-center border-white/20 border h-80 m-6 max-w-3xs bg-white/10 backdrop-blur-lg rounded-xl flex flex-col items-center  ">
        <h1 className="p-4 text-3xl font-bold">Login</h1>
        <Form button="Login" />
      </section>
      <div className="text-center">
        <h3 className="text-white/30"> - O -</h3>
      </div>
      <section className="text-center border-white/20 border h-80 m-6 max-w-3xs bg-white/10 backdrop-blur-lg rounded-xl flex flex-col items-center  ">
        <h1 className="p-4 text-3xl font-bold">Register</h1>
      </section>
    </div>
  );
};
