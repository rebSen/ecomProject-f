import React, { useState } from "react";
import Layout from "../core/Layout";
// import { API } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  // higher order function A function returning a function
  const handeChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="texte-muted">Name</label>
        <input
          onChange={handeChange("name")}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="texte-muted">Email</label>
        <input
          onChange={handeChange("email")}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="texte-muted">Password</label>
        <input
          onChange={handeChange("password")}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
  return (
    <Layout
      title="Signup"
      description="Signup please : )"
      className="container col-md-8 offset-md-2"
    >
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
};

export default Signup;
