import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singUp, user, isAuthenticated } = useAuth();
  let { errors: RegisterErrors } = useAuth();
  if (RegisterErrors.length > 0) {
    RegisterErrors = RegisterErrors[0];
  }
  console.log(typeof RegisterErrors)
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singUp(values);
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10  rounded-md">
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2">Register</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="User  name"
          />
          {errors.username && (
            <p className="text-red-500"> user name is required</p>
          )}
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
            Register
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already have an account?
          <Link to="/login" className="text-sky-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
