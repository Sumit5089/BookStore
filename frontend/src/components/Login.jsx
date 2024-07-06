import React from "react";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form";
import axios from "axios";  
import toast from "react-hot-toast";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
          email: data.email,
          password: data.password,
        };
        await axios
          .post("http://localhost:4000/user/login", userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success("Loggedin Successfully");
              document.getElementById("my_modal_3").close();
              setTimeout(() => {
                window.location.reload();
                localStorage.setItem("Users", JSON.stringify(res.data.user));
              }, 1000);
            }
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error: " + err.response.data.message);
              setTimeout(() => {}, 2000);
            }
          });
      };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
             to="/" 
             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
             onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span className="px-3">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
             {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <br />
          <div className="mt-4 space-y-2">
            <span className="px-3">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
             {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
            <p className="mt-3">
              Not Registered? <Link to="/signup" className="px-5 underline text-blue-500 cursor-pointer">Signup</Link>
              {""}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
