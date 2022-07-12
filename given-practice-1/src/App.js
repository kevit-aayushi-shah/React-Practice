import { useState, useEffect, useCallback, Fragment } from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
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
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
  <Fragment>
    <Input name={name}/>
    {isLoading&&<p>Loading...</p>}
    {error&&console.log(error)}
  </Fragment>);
}

export default App;
