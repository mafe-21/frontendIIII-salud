import { React, useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [textArea, setTextArea] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [name, email, tel, textArea]);

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name) {
      errors.name = "Enter the name";
    }
    if (!email) {
      errors.email = "Enter the email";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email not valid";
    }
    if (tel && tel.trim().length < 7) {
      errors.tel = "Phone no valid";
    }
    if (textArea.length < 10) {
      errors.textArea = "Message too short";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form sent");
      alert("Thank you " + name + ", we will contact you as soon as possible by email.");
    } else {
      console.log("Form is invalid, ", { errors });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Name"}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        {errors.name && <label className={"error-message"}>{errors.name}</label>}
        <input
          placeholder={"email"}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        {errors.email && <label className={"error-message"}>{errors.email}</label>}
        <input
          placeholder={"cellphone number"}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
        />
        {errors.tel && <label className={"error-message"}>{errors.tel}</label>}
        <textarea
          placeholder={"I am contacting you..."}
          required
          onChange={(e) => setTextArea(e.target.value)}
          name="message"
          id="#message"
          cols="30"
          rows="10"
        ></textarea>
        {errors.textArea && <label className={"error-message"}>{errors.textArea}</label>}
        <input id={"submit-form-btn"} className={Object.keys(errors).length === 0 ? "btn-valid" : "btn-invalid"} type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default Form;
