import { Link } from "react-router-dom";

function VendingMachine() {

  return (
    <div>
      <h1>I am a vending machine.</h1>
      <li>
        <Link to="/snickers">Snickers</Link>
      </li>
      <li>
        <Link to="/cookies">Cookies</Link>
      </li>
      <li>
        <Link to="/gummy-worms">Gummy Worms</Link>
      </li>
    </div>
  );

}

export default VendingMachine;
