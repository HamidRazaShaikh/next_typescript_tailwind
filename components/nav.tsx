import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchState } from "../slices/searchSlice";
import { setSearchTerm } from "../slices/searchSlice";
import { setUser } from "../slices/userSlice";



const Nav: React.FC = () => {

  

    // const search = useSelector((state: SearchState) => state);
    const dispatch = useDispatch();


   const handleLogout = () =>{

    dispatch(setUser(null))
    localStorage.clear()


   }


   
    

    
  return (
    <nav
      className="bg-gray-300 w-full flex  items-center justify-between py-4 px-6
"
    >
      {" "}
      <div>NavIcon</div>
      <div className="flex flex-row items-center px-2 ">
        <div className="mx-2 flex-row bg-gray-50 text-gray-900 text-sm flex w-full border rounded">
          <input
            
            className=" bg-gray-50 w-full p-2.5 outline-none"
            placeholder="Search term"
            required
            maxLength={30}
                   
            onChange = {(e:any)=>dispatch(setSearchTerm(e.target.value))}
          />
          <div className="flex items-center p-2 ">
         <svg
            aria-hidden="true"
            className="w-5 h-5 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          </div>
          

        </div>
                
        <div onClick={handleLogout} className="pl-2 font-medium text-blue-600 hover:ring-2  focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center ">Logout</div>
      </div>
    </nav>
  );
};

export default Nav;
