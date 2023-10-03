"use client";
import React from "react";
function AccessWindowEffect() {
  const [url, setUrl] = React.useState("url Initial Value");
  console.log(`Render Url -- ${url}-- ${Date.now()}`);

  React.useEffect(() => {
    setUrl(window.location.href);
    console.log("Effect");
  }, []);

  return (
    <div>
      <h1>With Effect {url}</h1>
    </div>
  );
}

export default AccessWindowEffect;
