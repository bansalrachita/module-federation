import React from "react";
import { Button } from "../components/Button";

export const App: React.FC = () => (
  <div>
    <React.Suspense fallback="loading...">
      <Button />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </React.Suspense>
  </div>
);
