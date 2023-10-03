"use client";
import React from "react";
function AccessDocumentEffect() {
  const [elem, setElem] = React.useState("");
  React.useEffect(() => {
    const element = document.getElementById("test");
    const text = element.innerText;
  }, []);

  return (
    <div>
      <h1>With Effect {url}</h1>
    </div>
  );
}

export default AccessDocumentEffect;
