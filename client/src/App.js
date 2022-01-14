import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <h1>Test cookie</h1>

      <button
        onClick={() => {
          axios
            .get("http://localhost:777", { withCredentials: true })
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
          const d = { a: 1, b: [1, 2, 3, 4, 5, 6, 7], c: { a: "a" } };
          axios
            .post("http://localhost:777/post", d)
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
