import Button from "../Elements/Buttons";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) =>{
    event.preventDefault();
    localStorage.setItem('email',event.target.email.value);
    localStorage.setItem('password',event.target.password.value);
    window.location.href='/product';
  }

  return (
    <form onSubmit={handleLogin}>
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
      <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
