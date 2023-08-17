import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const DropDown = ({ list, getData, placeholder, ...classnames }) => {
  const [data, setCountries] = useState(list);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-md ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : placeholder
          ? placeholder
          : "Select Item"}
        <BiChevronDown
          size={20}
          className={`${open && "rotate-180"}`}
        />
      </div>
      <ul
        className={`bg-white rounded-md mt-2 overflow-y-auto ${
          open ? "max-h-40" : "max-h-0"
        } duration-500`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch
            size={18}
            className="text-gray-700"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {data?.map((item) => (
          <li
            key={item?.id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.name?.toLowerCase() === selected?.toLowerCase() && "bg-sky-600 text-white"}
            ${item?.name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
            onClick={() => {
              if (item?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.name);
                setOpen(false);
                setInputValue("");
                getData(item);
              }
            }}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
