import React from "react";
import AppNav from "./AppNav";

export default function AppLayout({ children }) {
  return (
    <>
      <AppNav />
      {children}
    </>
  );
}
