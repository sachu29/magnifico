import React from "react";
import Hero from "../Hero/Hero";
import './Main.css'
import EnjoyWork from "./../Enjoy Work/EnjoyWork";
import GetTools from "./../Get Tools/GetTools";
import Problems from "./../Problems/Problems";
import Workflow from "./../Workflow/Workflow";
import Join from './../Join component/Join';

const Main = () => {
  return (
    <main>
        <Hero />
        <EnjoyWork />
        <GetTools />
        <Problems />
        <Workflow />
        <Join />
    </main>
  );
};

export default Main;
