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
<<<<<<< Updated upstream
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}><strong>Holy Shit!</strong> You just got an alert!</Alert>}
      <Button color="primary" onClick={()=>setAlertVisibility(!alertVisible)}>
        Get an alert.
      </Button>
    </div>
  );
=======
  return <div><ListGroup items={items} heading="Cities" onSelectedItem={alert}/></div>
>>>>>>> Stashed changes
}

export default App;
