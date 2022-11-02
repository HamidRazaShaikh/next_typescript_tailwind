import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { AddButton, DeleteButton, EditButton, OpenButton } from "./buttons";
import ListNew from "./listNew";
import Nav from "./nav";

const EditModal = ({ closeEditModal, name, qty, remarks , editEntry, id}: any) => {
  // console.log(closeEditModal, name, id);
 
  const [Ename, setEName] = useState(name);
  const [Eqty, setEQty] = useState(qty);
  const [Eremarks, setERemarks] = useState(remarks);

  return (
    <div className="modal">
      <div className="list-content">
        <div className="flex px-4 py-2 justify-between bg-gray-200 items-center">
          <h2> Edit item </h2>
          <div
            onClick={closeEditModal}
            className="font-medium text-red-600 hover:ring-2 hover:ring-red-300 focus:ring-2 focus:outline-none focus:ring-red-300 rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <GrClose size="1.1rem" />
          </div>
        </div>
        {/* form */}
        <div className="px-6 py-5">
          <div className="py-2">
            <h4 className="mb-4"> Product Name </h4>
            <input
              autoFocus
              value={Ename}
              onChange={(e) => setEName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Name"
              required
              maxLength = {30}

            />
          </div>
          <div className="py-2">
            <h4 className="mb-4"> Quantity </h4>
            <input
              value={Eqty}
              onChange={(e) => setEQty(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantity"
              required
              maxLength = {10}

            />
          </div>
          <div className="py-2">
            <h4 className="mb-4"> Remarks </h4>
            <input
              value={Eremarks}
              onChange={(e) => setERemarks(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Remarks"
              required
              maxLength = {20}

            />
          </div>
        </div>

        {/* submit */}
        <div className="flex px-4 py-2 justify-around bg-gray-200 items-center">
          <a
            href="#"
            onClick={() => editEntry({i : id , n: Ename, q: Eqty, r: Eremarks})}
            className="font-medium text-blue-600 hover:ring-2 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
          <h2 > Save </h2>
          </a>

          <a
            href="#"
            onClick={closeEditModal}
            className="font-medium text-red-600 hover:ring-2 hover:ring-red-300 focus:ring-2 focus:outline-none focus:ring-red-300 rounded-full text-sm p-2.5 text-center inline-flex items-center "
          >
             <h2 > Cancel</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
