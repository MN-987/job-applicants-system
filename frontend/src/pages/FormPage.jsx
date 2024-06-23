import { useForm } from "react-hook-form";
import { useEffect } from "react";

import FormHeader from "../ui/FormHeader";
import InputBox from "../ui/InputBox";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
            <label htmlFor="fName">First Name</label>
            <input
              {...register("fName", { required: "First Name is required" })}
              type="text"
              id="fName"
              placeholder="Enter your first name"
              className={inputClass}
              onBlur={() => trigger("fName")} 
            />
            {errors.fName && <p className="text-red-500 text-xs">{errors.fName.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="lName">Last Name</label>
            <input
              {...register("lName", { required: "Last Name is required" })}
              type="text"
              id="lName"
              placeholder="Enter your last name"
              className={inputClass}
              onBlur={() => trigger("lName")}
            />
            {errors.lName && <p className="text-red-500 text-xs">{errors.lName.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
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
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className={inputClass}
              onBlur={() => trigger("phoneNumber")} 
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}
          </InputBox>
          <InputBox>
            <label htmlFor="linkedinLink">LinkedIn Link</label>
            <input
              {...register("linkedinLink")}
              type="text"
              id="linkedinLink"
              placeholder="Enter your LinkedIn link"
              className={inputClass}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="githubLink">GitHub Profile Link</label>
            <input
              {...register("githubLink")}
              type="text"
              id="githubLink"
              placeholder="Enter your GitHub profile link"
              className={inputClass}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="time">Time interval when it’s better to call (if needed)</label>
            <input
              {...register("time")}
              type="text"
              id="time"
              placeholder="Enter your time interval"
              className={inputClass}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="message">Your Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="4"
              className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-darkBrown p-2 w-full"
              placeholder="Write your thoughts here..."
              onBlur={() => trigger("message")} 
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </InputBox>
          <div className="flex">
            <button
              type="submit"
              className="bg-darkBrown text-white py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!isValid} 
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