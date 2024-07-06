import React from "react";
import { useForm } from "react-hook-form";

const Contactus = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>

        <div className="flex h-screen items-center justify-center">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div className="mt-4 space-y-2">
                 <h1 className="text-2xl font-bold p-3 text-center">Contact Us</h1>
                <span className="px-3">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <br />
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
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <br />
              <div className="mt-4 space-y-2">
                <span className="px-3">Text</span>
                <br />
                <textarea
                  type="text"
                  placeholder="Type Your Message Here"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("text", { required: true })}
                />
                <br />
                {errors.text && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <button className="px-4 py-2 bg-blue-500 rounded-md mt-5">
                    Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default Contactus;
