import * as React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { AddButton, DeleteButton, EditButton, OpenButton } from "./buttons";
import ListNew from "./listNew";
import Nav from "../components/nav";

const Main: React.FC = () => {
  return (
    <div className="bg-gray-100 flex-1 w-full">
      {/* navbar */}
      <Nav />

      {/* button div */}
      <div className="bg-gray-200 py-5 grid sm:grid-cols-3 gap-5 px-5">
        <OpenButton text="Open List" />
        <AddButton text="Save List" />
        <EditButton text="Delete List" />
      </div>

      {/* List */}

      <ListNew />
    </div>
  );
};

export default Main;
