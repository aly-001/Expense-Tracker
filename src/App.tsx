import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Boston",
  ];
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div>
      <Alert>
        Alert! <div className="box">Hello!</div>
      </Alert>
      <Button text="Primary!" />
    </div>
  );
}

export default App;
