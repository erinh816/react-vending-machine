import { BrowserRouter, Route, Routes } from "react-router-dom";
import Snickers from "./Snickers";
import GummyWorms from "./GummyWorms";
import Coockies from "./Coockies";


function RoutesList() {
  return (
    <Routes>
      <Route path="/snickers" element={<Snickers />} />
      <Route path="/gummy-worms" element={<GummyWorms />} />
      <Route path="/coockie" element={<Coockies />} />
      <Route path="*" element={<div>We don't have this snack</div>} />
    </Routes>
  );


}

export default RoutesList;
