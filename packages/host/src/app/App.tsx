import React from "react";
import { Button } from "../components/Button";

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="loading...">
      <Button />
    </React.Suspense>
  </div>
);

export default App;
