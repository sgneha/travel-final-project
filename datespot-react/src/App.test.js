import React from "react";
import App from "./App";

test("standard test to confirm jest functionality", () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(2);
});
