import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GetAllSpaceships from "./spaceship/GetAllSpaceships";
import GetOneSpaceship from "./spaceship/GetOneSpaceship";
import CreateSpaceship from "./spaceship/CreateSpaceship";
import UpdateSpaceship from "./spaceship/UpdateSpaceship";
import DeleteSpaceship from "./spaceship/DeleteSpaceship";

function App() {
  return (
    <Router>
    <Routes>
    <Route index element={<GetAllSpaceships/>}></Route>
    <Route path="/spaceship/:id" element={<GetOneSpaceship/>}></Route>
    <Route path="/spaceship/create" element={<CreateSpaceship/>}></Route>
    <Route path="/spaceship/update/:id" element={<UpdateSpaceship/>}></Route>
    <Route path="/spaceship/delete/:id" element={<DeleteSpaceship/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
