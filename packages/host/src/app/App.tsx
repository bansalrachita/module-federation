import React from "react";
import { Button } from "../components/Button";

export const App: React.FC = () => (
  <div>
    <React.Suspense fallback="loading...">
      <Button />
    </React.Suspense>
  </div>
);
