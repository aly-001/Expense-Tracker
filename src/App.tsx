import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import  NavBar from "./components/NavBar"

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2', 'Product3'])

  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
