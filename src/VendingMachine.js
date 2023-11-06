import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RouteList";

function VendingMachine() {

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );

}

export default VendingMachine;
