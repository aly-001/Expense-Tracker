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
      {alertVisible && <Alert onClick={()=>setAlertVisibility(false)}><strong>Holy Shit!</strong> You just clicked the button!</Alert>}
      <Button color="primary" onClick={()=>setAlertVisibility(!alertVisible)}>
        Don't click me.
      </Button>
    </div>
  );
}

export default App;
