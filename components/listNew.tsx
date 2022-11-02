import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { RiSave2Line } from "react-icons/ri";
import nextId from "react-id-generator";
import EditModal from "./editModal";
// import { useSelector, useDispatch } from "react-redux";
// import { SearchState } from "../slices/searchSlice";
// import { StorageState } from "../slices/storageSlice";

// import { setLocalStorage, getLocalStorage } from "../slices/storageSlice";

export interface itemObj {
  id: string;
  name: any;
  qty: any;
  remarks: any;
}

const ListNew = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [remarks, setRemarks] = useState("");
  const [items, setItems] = useState<itemObj[]>([]);
  const [Ename, setEName] = useState("");
  const [Eqty, setEQty] = useState("");
  const [Eremarks, setERemarks] = useState("");
  const [Eid, setEId] = useState("");
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState<any>();
  const ElemRef = useRef<any>();
  // const { term } = useSelector((state: SearchState) => state.search);
  // const {item} = useSelector((state: any) => state.item);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const keyword = term;

  //   if (keyword !== "") {
  //     const results: any = item.filter((obj: any) => {
  //       return obj.name.toLowerCase().startsWith(keyword.toLowerCase());
  //     });

  //     setItems(results);
  //   } else {
  //     setItems(items);
  //   }

  //   // setTitle(keyword);
  // }, [term]);

  useEffect(() => {
    if (target) {
      // console.log(target, show);
      show ? (target.className = "flex") : (target.className = "hidden");
    }
  }, [show, target]);

  const showDropDown = (e: any) => {
    setShow(!show);
    setTarget(e.currentTarget.parentNode.lastChild);
  };

  const editEntry = ({ i, n, q, r }: any) => {
    let arr = [];

    let newEl = {
      id: i,
      name: n,
      qty: q,
      remarks: r,
    };

    if (n !== "" && q !== "") {
      let index = items.findIndex((el) => el.id === i);
      items.splice(index, 1, newEl);
      arr = [...items];
      setItems(arr);
      setEdit(false);
    } else {
      alert("invalid entry!");
    }
  };

  const closeEditModal: any = () => {
    setEdit(false);
  };

  const deleteItem = (e: any, id: string) => {
    let arr = items.filter((obj) => obj.id !== id);
    setItems(arr);
    setShow(false);
  };

  const removeText = () => {
    setName("");
    setQty("");
    setRemarks("");
  };

  const saveItem = () => {
    const itemObj: itemObj = {
      id: nextId(),
      name,
      qty,
      remarks,
    };
    if (name !== "" && qty !== "") {
      setItems((prev) => [...prev, itemObj]);
      setName("");
      setQty("");
      setRemarks("");
    } else {
      alert("invalid entry!");
    }
  };

  const editItem = (e: any, id: string) => {
    setEdit(true);

    const item = items.filter((el) => el.id === id)[0];
    setEId(item?.id);
    setEName(item?.name);
    setEQty(item?.qty);
    setERemarks(item?.remarks);
    setShow(false);
  };

  return (
    <div className="overflow-y-hidden h-screen relative shadow-md sm:rounded-lg bg-gray-200">
      <div className="w-full bg-gray-200 md:hidden flex flex-col px-5 py-4">
        <h2 className="py-2">Product Name</h2>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          required
          maxLength={30}
        />
        <h2 className="py-2">Quantity</h2>
        <input
          autoFocus
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Quantity"
          required
          maxLength={5}
        />
        <h2 className="py-2">Remarks</h2>
        <input
          autoFocus
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Remarks"
          required
          maxLength={10}
        />
        <div className="py-2 px-6 flex justify-evenly">
          <a
            href="#"
            onClick={saveItem}
            className="font-medium text-blue-600 hover:ring-2 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <RiSave2Line size="1.3rem" />
          </a>
          <a
            href="#"
            onClick={removeText}
            className="font-medium text-red-600 hover:ring-2 hover:ring-red-300 focus:ring-2 focus:outline-none focus:ring-red-300 rounded-full text-sm p-2.5 text-center inline-flex items-center "
          >
            <RiDeleteBin5Line size="1.3rem" />
          </a>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="hidden md:table-row">
            <th scope="col" className="py-3 px-6 w-2/4">
              Product name
            </th>
            <th scope="col" className=" py-3 px-6">
              Qty.
            </th>
            <th scope="col" className="py-3 px-6 w-1/4">
              Remarks
            </th>

            <th scope="col" className="py-3 px-6 text-center">
              options
            </th>
          </tr>
        </thead>
        <tbody id="tableRow">
          <tr className=" hidden md:table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex py-4 px-6 font-medium text-gray-900"
              // onDoubleClick={() => setEdit(!edit)}
            >
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product Name"
                required
                maxLength={30}
              />
            </th>
            <td className="py-4">
              {" "}
              <input
                autoFocus
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Quantity"
                required
                maxLength={5}
              />
            </td>
            <td className="py-4 px-6">
              {" "}
              <input
                autoFocus
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Remarks"
                required
                maxLength={10}
              />
            </td>

            <td className="py-4 px-6 flex justify-evenly">
              <a
                href="#"
                onClick={saveItem}
                className="font-medium text-blue-600 hover:ring-2 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center"
              >
                <RiSave2Line size="1.3rem" />
              </a>
              <a
                href="#"
                onClick={removeText}
                className="font-medium text-red-600 hover:ring-2 hover:ring-red-300 focus:ring-2 focus:outline-none focus:ring-red-300 rounded-full text-sm p-2.5 text-center inline-flex items-center "
              >
                <RiDeleteBin5Line size="1.3rem" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className = 'overflow-y-scroll h-96 hidden md:flex'>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody >
          {items.length !== 0
            ? items.map((item, index) => (
                <tr
                  key={item.id}
                  className="bg-white border-b  hover:bg-gray-50 hidden md:table-row"
                >
                  <th
                    scope="row"
                    className="text-xl font-bold text-gray-900 py-3 px-6 w-2/4"
                    onDoubleClick={() => setEdit(!edit)}
                  >
                    {index + 1}. {item.name}
                  </th>
                  <td className="py-3 px-6 w-1/6">{item.qty}</td>
                  <td className="px-6 py-3 w-1/4">
                    {item.remarks === "" ? "Null" : item.remarks}
                  </td>

                  <td className="py-3 px-3 text-center-200 flex flex-row">
                    <a
                      href="#"
                      onClick={(e) => editItem(e, item.id)}
                      className="font-medium text-blue-600 hover:ring-2 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center"
                    >
                      <RiEdit2Line size="1.3rem" />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => deleteItem(e, item.id)}
                      className="font-medium text-red-600 hover:ring-2 hover:ring-red-300 focus:ring-2 focus:outline-none focus:ring-red-300 rounded-full text-sm p-2.5 text-center inline-flex items-center "
                    >
                      <RiDeleteBin5Line size="1.3rem" />
                    </a>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>

      </div>

      <div className="overflow-y-scroll h-3/6 md:hidden">
        {items.length !== 0
          ? items.map((item, index) => (
              <div
                key={item.id}
                className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  px-2"
              >
                <div className="px-4 pt-2 flex flex-col items-end">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    onClick={(e) => showDropDown(e)}
                    className="w-fit text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    ref={ElemRef}
                    className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul className="py-1" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          onClick={(e) => editItem(e, item.id)}
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          onClick={(e) => deleteItem(e, item.id)}
                          className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col  items-start px-2 py-2">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {index + 1}. {item.name}
                  </h5>
                  <span className="text-md text-gray-500 dark:text-gray-400 ml-10">
                    Qty: {item.qty}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-10">
                    Remarks :{item.remarks}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>

      {edit ? (
        <EditModal
          closeEditModal={closeEditModal}
          name={Ename}
          qty={Eqty}
          remarks={Eremarks}
          editEntry={editEntry}
          id={Eid}
        />
      ) : null}
    </div>
  );
};

export default ListNew;
