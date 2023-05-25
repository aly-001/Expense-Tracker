import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

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
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}><strong>Holy Shit!</strong> You just got an alert!</Alert>}
      <Button color="primary" onClick={()=>setAlertVisibility(!alertVisible)}>
        Get an alert.
      </Button>
    </div>
  );
}

export default App;
