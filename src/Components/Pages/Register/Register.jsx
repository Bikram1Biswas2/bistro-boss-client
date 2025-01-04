import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        //   save user in the database
        const user = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", user).then((res) => {
          if (res.data.insertedId) {
            console.log('user added to the database');
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Profile updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <img className="h-[420px] mt-3" src={registerImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    photo URL field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one lowercase,one uppercase,one special
                    character and one number
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
            </form>
            <div className="divider"></div>
            <SocialLogin></SocialLogin>
            <p className="text-center p-5">
              <small>
                Already Register?Please{" "}
                <Link to="/login" className="text-green-600">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
