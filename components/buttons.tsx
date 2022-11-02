import React from "react";
import { RiAddFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import {RiFolderOpenLine} from "react-icons/ri";
import { RiSave2Line } from "react-icons/ri";








type buttonProps = {

  text : string
}

export const OpenButton: React.FC <buttonProps> = ({text} : buttonProps) => {
  const buttonStyling = `flex justify-center items-center font-semibold  py-2 bg-gradient-to-r from-dark-200 to-dark-100
  text-gray-100 rounded-sm ring-2 ring-purple-400
  hover:bg-white  hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50 `;

  return (
    <button type="submit" className={buttonStyling}>
      <p className="font-sans">{text}</p>
      <RiFolderOpenLine size="1.2rem" className="ml-5" />
    </button>
  );
};


export const AddButton: React.FC <buttonProps> = ({text} : buttonProps) => {
  const buttonStyling = `flex justify-center items-center font-semibold  py-2 bg-gradient-to-r from-blue-200 to-blue-100
  text-gray-100 rounded-sm ring-2 ring-purple-400
  hover:bg-white  hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50 `;

  return (
    <button type="submit" className={buttonStyling}>
      <p className="font-sans">{text}</p>
      <RiSave2Line size="1.2rem" className="ml-5" />
    </button>
  );
};


export const EditButton: React.FC <buttonProps> = ({text} : buttonProps) => {
  const buttonStyling = `flex justify-center items-center font-semibold  py-2 bg-gradient-to-r from-green-200 to-green-100
  text-gray-100 rounded-sm ring-2 ring-purple-400
  hover:bg-white  hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50 `;

  return (
    <button type="submit" className={buttonStyling}>
      <p className="font-sans">{text}</p>
      <RiDeleteBin5Line size="1.2rem" className="ml-5" />
    </button>
  );
};














export const DeleteButton: React.FC = () => {
  const buttonStyling = `flex justify-center items-center px-2 py-2  font-semibold bg-gradient-to-r from-red-900 to-red-100
    text-gray-100 rounded-sm ring-2 ring-purple-400 
    hover:bg-white  hover:text-white hover:ring-slate-300  shadow-lg shadow-indigo-300/50 `;

  return (
    <button type="submit" className={buttonStyling}>
      <p>Delete</p>
      <RiDeleteBin5Line size="1.2rem" className="ml-5" />
    </button>
  );
};
