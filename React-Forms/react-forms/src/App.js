import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Employee Information Form</h1>
        <div className="ui-divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username must be more than 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Username cannot exceed more than 10 characters",
                },
              })}
            />
            <p>{errors.username?.message}</p>
          </div>

          <div className="field">
            <label>Email Id</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div className="field">
            <label>DOB</label>
            <input
              type="date"
              placeholder="YYYY-MM-DD"
              {...register("dob", {
                required: "Date of Birth is required",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: "Date of Birth must be in the format YYYY-MM-DD",
                },
              })}
            />
            <p>{errors.dob?.message}</p>
          </div>

          <div className="field">
            <label>Country</label>
            <select
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <p>{errors.country?.message}</p>
          </div>

          <div className="field">
            <label>Gender</label>
            <select {...register("gender", { required: "Gender is required" })}>
              <option value="">--Select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p>{errors.gender?.message}</p>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters",
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
