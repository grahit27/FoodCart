// Demo for Modal in React
import { useState } from "react";
const ShowContacts = () => {
  // if (!open) return null;
  return (
    <div className="p-2 m-2 bg-slate-400 flex flex-col">
      <span>Contact Details</span>
      <span>Names</span>
      <button className="p-2 bg-red-600 text-white font-semibold rounded-md">
        {" "}
        Close Details
      </button>
    </div>
  );
};
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="m-2 p-2 flex gap-4 flex-col">
      <h1>Contact Page</h1>
      <h2>List of All contacts</h2>
      <button
        className="p-2 font-medium text-white bg-purple-700 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        See List of All Contacts
      </button>
      <ShowContacts />
    </div>
  );
};

export default Contact;
