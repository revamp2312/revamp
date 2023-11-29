import { useState } from "react";
import EventCard from "./EventCard"

const EventCardContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};
  return (
    <div className="max-w-[1440px] w-full flex justify-center items-center m-auto p-12">
    <div className="flex flex-col justify-center items-center gap-12">

<div className="w-full flex justify-between transition-all duration-200">
    <div>
         <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-start items-center w-[310px] h-14 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
      >
       Filter by type
        <svg
          className="ml-auto w-5 transition-all duration-200"
          style={isOpen?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 10 3z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-[310px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
             Events
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              News and Updates
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Webinars
            </a>
          </div>
        </div>
      )}
    </div>
    </div>
    <div className="flex gap-2 justify-center items-center rounded-lg border-[1px] border-[#D0D5DD] p-4 w-[420px]">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M18 17.5L14.375 13.875M16.3333 9.16667C16.3333 12.8486 13.3486 15.8333 9.66667 15.8333C5.98477 15.8333 3 12.8486 3 9.16667C3 5.48477 5.98477 2.5 9.66667 2.5C13.3486 2.5 16.3333 5.48477 16.3333 9.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
       <input className="w-[360px] border-none" type="text" name="" id="" placeholder="Search events , news, and updates"/>
    </div>
</div>

<div className="flex flex-col gap-6 transition-all duration-400" style={isOpen?{paddingTop:"120px"}:{paddingTop:"0px"}}>
    <div className="text-[31px] font-semibold">Events</div>
<div className="flex flex-wrap gap-x-5 gap-y-12 justify-start items-center " >
<EventCard />
<EventCard />
<EventCard />
<EventCard />
<EventCard />
</div>
</div>
    </div>
    </div>
  )
}

export default EventCardContainer