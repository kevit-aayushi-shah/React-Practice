import { useState, useEffect, useCallback, Fragment } from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Data not Found");
      }

      const data = await response.json();
      // console.log(data)
      const requiredData = data.map((name) => {
        return {
          id: name.id,
          name: name.name,
        };
      });
      setName(requiredData);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      fetchData();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [fetchData]);

  return (
    <Fragment>
      <Input name={name} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Fragment>
  );
}

export default App;
