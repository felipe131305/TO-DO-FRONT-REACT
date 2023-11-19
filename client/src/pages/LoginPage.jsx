import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, isAuthenticated } = useAuth();
  let { errors: signinErros } = useAuth();
  const navigate = useNavigate();
  if (signinErros.length > 0) {
    signinErros = signinErros[0];

  }
  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(()=>{
if(isAuthenticated) navigate("/tasks")
  },[isAuthenticated])

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
        {signinErros.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500"> email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Paasword"
          />
          {errors.password && (
            <p className="text-red-500"> password is required</p>
          )}
          <button
            type="submit"
            style={{
              margin: "10px",
              border: "2px solid #6EC6FF",
              borderRadius: "5px",
              padding: "8px 16px",
              backgroundColor: "transparent",
              color: "#6EC6FF",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have account?
          <Link to="/register" className="text-sky-500">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
