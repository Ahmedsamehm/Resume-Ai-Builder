import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function LayOut() {
  
  return (
    <>
      <header className="mb-10 ">
        <NavBar />
      </header>
      <main className="container mx-auto mt-5">
        <section className=" w-full space-y-5 font-bold p-5  ">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default LayOut;
