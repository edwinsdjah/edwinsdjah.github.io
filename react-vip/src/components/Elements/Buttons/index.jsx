const Button = (props) => {
  const { variant, children } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold ${variant} rounded-md text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
