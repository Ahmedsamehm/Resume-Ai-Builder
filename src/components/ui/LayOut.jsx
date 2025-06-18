import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function LayOut() {
  const { id } = useParams();
  const location = useLocation();

  const hideNavBar = location.pathname === `/Resume/${id}`;
  return (
    <>
      <header className="mb-10 ">{!hideNavBar && <NavBar />}</header>
      <main className="container mx-auto mt-5">
        <section className=" w-full space-y-5 font-bold p-5  ">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default LayOut;
