import { useState } from 'react';
import { app as firebaseApp } from "../../functions/firebaseConfig"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import {createUserWithEmailAndPassword,
        getAuth,
       } from 'firebase/auth';

const SignUp = (props) => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  const [error, setError] = useState('');
  const db = getFirestore(firebaseApp)

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        // Save user data in the database
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('Display name set successfully');
            props.setUser(auth.currentUser)
        }).catch(error => {
            console.log('Error setting display name:', error);
        });
        console.log(user)
      })
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      {error && <p>{error}</p>}
      <form  className="formContainer" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="formElement">  
          <label>Name:</label>
          <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formElement">  
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="formElement">  
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;