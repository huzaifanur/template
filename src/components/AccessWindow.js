"use client";
function AccessWindow() {
  const url = window.location.href;
  return (
    <div>
      <h1>With NoEffect {url}</h1>
    </div>
  );
}

export default AccessWindow;
