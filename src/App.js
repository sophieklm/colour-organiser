import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";

export default function App() {
  return (
    <>
      <h1>Colour Organiser</h1>
      <AddColorForm />
      <ColorList />
    </>
  );
}
