import "./styles.css";
import React from "react";
import createGuest from "cross-domain-storage/guest";

export default function App() {
  const [loginStorage, setLoginStorage] = React.useState(null);
  const [token, setToken] = React.useState(localStorage.getItem("AUTH"));
  React.useEffect(() => {
    if (!loginStorage) {
      setLoginStorage(createGuest("http://localhost:3001"))
    }
  }, [loginStorage]);

  return (
    <div className="App">
      <h1>Guest Logged in: {token ? "yes" : "no"}</h1>
      <h2>Secret token is {token}</h2>
      <button
        onClick={() => {
          loginStorage.get("AUTH", function (error, value) {
            // value for the key of 'AUTH' will be retrieved from localStorage on localhost:3001
            if (error) {
              console.log(error);
            } else {
              localStorage.setItem("AUTH", value);
              setToken(value);
              console.log("Secret token is", value);
            }
          });
        }}
      >
        Click to login
      </button>
      <button onClick = {() => localStorage.removeItem("AUTH") || setToken("")}>Logout</button>
    </div>
  );
}
