import { useForm } from "react-hook-form";
import { useEffect } from "react";

import FormHeader from "../ui/FormHeader";
import InputBox from "../ui/InputBox";
import { useNavigate } from "react-router-dom";
import { saveFormData } from "../services/form/form.service";
import React from "react";
function FormPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger
  } = useForm({
    mode: 'onChange' 
  });

  const localStorageKey = "form_data";

  // Load form data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    saveFormData(data);
    navigate('/form/submitted');
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  const inputClass = "bg-transparent border-b-2 border-[#ece0d5] focus:outline-none focus:border-darkBrown p-2";

  return (
    <main className="flex w-full items-center justify-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] max-w-lg space-y-4"
      >
        <FormHeader />
        <div className="space-y-4">
          <InputBox>
            <label htmlFor="firstName">First Name
            <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              {...register("firstName", { required: "First Name is required" })}
              data-testid="firstName"
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className={inputClass}
              onBlur={() => trigger("firstName")} 
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="lastName">Last Name
            <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              data-testid="lastName"
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className={inputClass}
              onBlur={() => trigger("lastName")}
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="email">Email
            <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              data-testid="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className={inputClass}
              onBlur={() => trigger("email")} 
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              {...register("phoneNumber", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid phone number",
                },
              })}
              data-testid="phoneNumber"
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className={inputClass}
              onBlur={() => trigger("phoneNumber")} 
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="linkedInUrl">LinkedIn Link</label>
            <input
              {...register("linkedInUrl")}
              data-testid="linkedInUrl"
              type="text"
              id="linkedInUrl"
              placeholder="Enter your LinkedIn link"
              className={inputClass}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="githubUrl">GitHub Profile Link</label>
            <input
              {...register("githubUrl")}
              data-testid="githubUrl"
              type="text"
              id="githubUrl"
              placeholder="Enter your GitHub profile link"
              className={inputClass}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="bestCallTime">Time interval when it’s better to call (if needed)</label>
            <input
              {...register("bestCallTime")}
              type="text"
              data-testid="bestCallTime"
              id="bestCallTime"
              placeholder="Enter your time interval"
              className={inputClass}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="comment">Your Message
            <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              {...register("comment", { required: "Message is required" })}
              id="comment"
              data-testid="comment"
              rows="4"
              className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-darkBrown p-2 w-full"
              placeholder="Write your thoughts here..."
              onBlur={() => trigger("comment")} 
            ></textarea>
            {errors.comment && <p className="text-red-500 text-xs">{errors.message.comment}</p>}
          </InputBox>
          <div className="flex">
            <button
              type="submit"
              data-testid="submit-button"
              className="bg-darkBrown text-white py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
             >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default FormPage;