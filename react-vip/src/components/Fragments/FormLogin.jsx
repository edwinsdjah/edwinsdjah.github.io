import Button from "../Elements/Buttons";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
