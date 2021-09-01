import { useState, useEffect } from "react";

const NewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");
  const [signUp, setSignUp] = useState("");
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
      const errors = []
      if(!name)errors.push("Please enter your name")
      if(!email.includes('@') || !email)errors.push("Enter valid email")
      if(phoneNumber.length !== 10) errors.push('Enter valid phone number')
      if(bio.length > 280 )errors.push("Your bio must be less than 280 characters")
      setValidationErrors(errors)

  }, [name, email, phoneNumber, bio])

  return (
    <form>
      <div className="errors">
          {validationErrors && validationErrors.map(err => (
              <p className="error" key={err}>*** {err}</p>
          ))}
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          type="text"
          placeholder="name"
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          placeholder="email"
        ></input>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          id="phoneNumber"
          type="text"
          placeholder="phone number"
        ></input>
      </div>
      <div>
        <label htmlFor="staff">Instructor</label>
        <input type="radio" value="Instructor" onChange={(e) => setStaff(e.target.value)} id="staff" ></input>
        <label htmlFor="staff">Student</label>
        <input type="radio" value="Student" onChange={(e) => setStaff(e.target.value)} id="staff"></input>
      </div>
      <div>
          <label htmlFor="bio">
          </label>
          <textarea onChange={(e)=> setBio(e.target.value)} value ={bio} id="bio" rows="10" cols="50" maxLength="280" placeholder="Enter Bio">
          </textarea>
      </div>
      <div>
          <label htmlFor="signUp">
              Sign up for email notifications
          </label>
          <input type="checkbox" onChange={(e)=> setSignUp(e.target.checked)} value={signUp} id="signUp">
          </input>
      </div>
      <button type="submit" disabled={validationErrors.length}>Submit</button>
    </form>
  );
};

export default NewForm;
