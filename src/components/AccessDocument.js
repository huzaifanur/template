"use client";
import React from "react";
function AccessDocument() {
  var element = document.getElementById("test");
  var text = element.innerText;

  return (
    <div>
      <h1>With Effect {text}</h1>
    </div>
  );
}

export default AccessDocument;
