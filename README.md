

## Scenarios

### 1 - Access window object in a client component without useEffect

``` js
"use client";
function AccessWindowNoEffect() {
  const url = window.location.href;
  return (
    <div>
      <h1>With NoEffect {url}</h1>
    </div>
  );
}
export default AccessWindowNoEffect;
```

This will render the url  in the h1 but will also give an error that `window object is not defined`

This happens because, on the first reload next render both client and server on the server for optimization pupouse, so it gives us an error on server but at the same time works just fine on the client (in dev), but still need to get rid of it.

**Its important to note that the window object is available at the very start on the request on the other hand document object becomes available only after the dom has been created.** 



### 2 - Access window object in a client component with useEffect

``` js
"use client";
export default function Home() {
  const url = window.location.href;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{url}</h1>
      <h2>{text}</h2>
      
    </main>
  );
}
```