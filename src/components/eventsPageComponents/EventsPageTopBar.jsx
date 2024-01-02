import { useDispatch, useSelector } from 'react-redux'
import { toggleDropdown, updateEvent } from '../../constants/slices/eventsSlice'
import { useState } from 'react'


const EventsPageTopBar = () => {
const[dropDownNumber,setDropDownNumber] =useState(0)
const dispatch=useDispatch()
const eventData =useSelector((store)=>store.events)
const isOpen =eventData.Dropdown
const DropDownText=["Events","News and Updates","Webinars"]

const toggle =()=>{
dispatch(toggleDropdown())
}

  return (
    <div className='w-full max-w-[1440px] mx-auto flex justify-center items-center px-6 py-12 tablet:px-14 laptop:px-[70px] laptop:py-20'>
        <div className="w-full flex flex-col-reverse gap-4 tablet:flex-row  justify-between transition-all duration-200">
          <div>
            <div className="relative inline-block text-left w-full">
              <button
                onClick={toggle}
                type="button"
                className="inline-flex w-full justify-start items-center tablet:min-w-[310px] h-14 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
              >
               {DropDownText[dropDownNumber]}
                <svg
                  className="ml-auto w-5 transition-all duration-200"
                  style={
                    isOpen
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path d="M7.5 10L12.5 15L17.5 10H7.5Z" fill="#1C1B1F" />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right w-full absolute left-0 mt-2 tablet:min-w-[310px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      onClick={()=>{
                        setDropDownNumber(0)
                        dispatch(updateEvent({ upcomingEvents:true,pastEvents:false,news:false,webinars:false,Dropdown:false}))}}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Events
                    </a>
                    <a
                      onClick={()=>{
                        setDropDownNumber(1)
                        dispatch(updateEvent({ upcomingEvents:false,news:true,webinars:false,Dropdown:false}))}}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      News and Updates
                    </a>
                    <a
                      onClick={()=>{
                        setDropDownNumber(2)
                        dispatch(updateEvent({ upcomingEvents:false,pastEvents:false,news:false,webinars:true,Dropdown:false}))}}
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
          <div className="flex gap-2 w-full justify-center items-center rounded-lg border-[1px] border-[#D0D5DD] p-4 max-w-[420px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M18 17.5L14.375 13.875M16.3333 9.16667C16.3333 12.8486 13.3486 15.8333 9.66667 15.8333C5.98477 15.8333 3 12.8486 3 9.16667C3 5.48477 5.98477 2.5 9.66667 2.5C13.3486 2.5 16.3333 5.48477 16.3333 9.16667Z"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              className="max-w-[360px] border-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Search events , news, and updates"
            />
          </div>
        </div>
    </div>
  )
}

export default EventsPageTopBar