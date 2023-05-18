import "./styles.css";
import React from "react";
import createHost from "cross-domain-storage/host";

export default function App() {
  const [storageHost, setStorageHost] = React.useState(null);
  React.useEffect(() => {
    if (!storageHost) {
      setStorageHost(
        createHost([
          {
            origin: "http://localhost:3002",
            allowedMethods: ["get", "set", "remove"]
          }
        ])
      );
    }
    // window.addEventListener("message", (m) => console.log(m));
  }, [storageHost]);
  return (
    <div className="App">
      <h1>Central Login Host</h1>
      <button onClick={() => localStorage.setItem("AUTH", Math.random())}>Login</button>
    </div>
  );
}
