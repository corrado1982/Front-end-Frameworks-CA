import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import Button from "../styles/Button";

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [mail, setMail] = useState("");
  const [object, setObject] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      fullName,
      subject,
      mail,
      object,
    };

    // const formContent = JSON.stringify(body);

    console.log(body);
  }
  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "full-name") {
      setFullName(value);
    }
    if (event.target.name === "subject") {
      setSubject(value);
    }
    if (event.target.name === "mail") {
      setMail(value);
    }
    if (event.target.name === "object") {
      setObject(value);
    }
  }

  return (
    <div>
      <div>
        <h1>Contact Page</h1>
      </div>
      <div>
        <form onSubmit={onFormSubmit} className={styles.formContainer}>
          {/* NAME */}
          <label htmlFor="full-name">Full name</label>
          <input
            name="full-name"
            value={fullName}
            minLength={3}
            required
            onChange={onTextInputChange}
          />
          {/* Subject */}
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            value={subject}
            minLength={3}
            required
            onChange={onTextInputChange}
          />
          {/* Mail */}
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            name="mail"
            value={mail}
            pattern="/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g"
            required
            onChange={onTextInputChange}
          />
          {/* Body */}
          <label htmlFor="object">Body</label>
          <textarea
            rows="4"
            cols="25"
            name="object"
            value={object}
            required
            minLength={3}
            onChange={onTextInputChange}
          ></textarea>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
