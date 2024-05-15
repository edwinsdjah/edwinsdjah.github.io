import LoginPage from "../../Pages/login";

const WelcomeScreen = () => {
  return (
    <div className="bg-white-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center min-h-screen items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-white p-4">
              <h1 className="text-5xl font-bold mb-4 text-blue-600 text-center">
                Welcome
              </h1>

              <p className="text-slate-500">
                <LoginPage />
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white p-4">
              <img src="./src/assets/main.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
