import { Link } from "react-router-dom";
import registerImg from '../../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";


const Register = () => {
        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()

        const onSubmit = data =>{
            console.log(data);
        }

        console.log(watch("example"))
      
    return (
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
                <input type="text" placeholder="Name" name="name" {...register("name", { required: true })} className="input input-bordered"  />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" {...register("email")} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" {...register("password", { required: true ,minLength:6, maxLength: 20,pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} className="input input-bordered" required />
                {errors.password?.type==='minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                {errors.password?.type==='maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                {errors.password?.type==='required' && <span className="text-red-600">Password is required</span>}
                {errors.password?.type==='pattern' && <span className="text-red-600">Password must have one lowercase,one uppercase,one special character and one number</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
            </form>
            <p className="text-center p-5"><small>Already Register?Please <Link to='/login' className="text-green-600">Login</Link></small></p>
          </div>
        </div>
      </div>
    );
};

export default Register;