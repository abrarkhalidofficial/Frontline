import React from "react";
import { aboutus } from "./aboutus";
import { Homesection } from "./Homesection";

export default function index() {
  return (
    <>
      {Homesection()}
      {aboutus()}
    </>
  );
}
