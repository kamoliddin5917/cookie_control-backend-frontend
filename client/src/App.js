import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <h1>Test cookie</h1>

      <button
        onClick={() => {
          axios
            .get("http://localhost:777/api/v1/auth?zktId=707", {
              withCredentials: true,
              // headers: {
              //   "Access-Control-Allow-Origin": "*",
              // },
            })
            .then((json) => {
              console.log(json);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          const d = { username: "test", password: "Test707$" };
          axios
            .post("http://localhost:777/api/v1/auth/login", d, {
              withCredentials: true,
              // headers: { "Access-Control-Allow-Origin": "*" },
            })
            .then(({ data }) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        post
      </button>
      <button
        onClick={() => {
          axios
            .get("http://localhost:777/set", {
              withCredentials: true,
              headers: { "Content-Type": "Application/json" },
            })
            .then((json) => {
              console.log(json);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        set
      </button>
      <button
        onClick={() => {
          axios
            .delete("http://localhost:777/delete", { withCredentials: true })
            .then((json) => {
              console.log(json);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        delete
      </button>
    </div>
  );
}

export default App;
