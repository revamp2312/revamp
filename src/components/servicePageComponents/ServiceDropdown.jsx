import { useDispatch, useSelector } from "react-redux";
import { setall } from "../../constants/slices/serviceSlice";
import { useState } from "react";

const ServiceDropdown = () => {
const [showAc,setShowAc]=useState(false)
const [dropDownNumber,setDropDownNumber]=useState(0)
const dispatch = useDispatch();
const service = useSelector((store) => store.service);
const cxService = service.cx;
const xmService = service.xm;
const daService = service.da;
const dropdownText =["Customer Experience","Experience Management","Blink CX Apps"]

  return (
    <div className="flex flex-col gap-12 laptop:hidden w-full" onClick={()=>{setShowAc(!showAc)}}>

     <div className="w-full laptop:w-4/12 text-center cursor-pointer " >
              <div className="flex  gap-6 p-4 justify-between items-center  hover:border-b-2 hover:border-solid hover:border-[#6C52E3] hover:!text-[#693ED4]"
                style={ 
                    {
                        borderBottom: "2px solid #6C52E3",
                        background:
                          "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                        color: "#693ED4",
                      }
                   
                }
              >
              
                <div>
                  <button className="text-xl  font-bold">
                 {dropdownText[dropDownNumber]}
                  </button>
                </div>
                <div
                style={ showAc ? {  transform:"rotate(180deg)" }  : {  transform:"rotate(0deg)"  } }
                 className="w-6 transition-all duration-500">
                  <img className="w-full" src="/ServiceDropDownArrow.png"/>
                </div>
              </div>
            </div>
      <div
        style={showAc ? { gridTemplateRows: "1fr", }: {gridTemplateRows: "0fr",  }}
       className="grid transition-[grid-template-rows]  duration-[400ms] w-full" >
        <div className="overflow-hidden">
          <div className="flex flex-col laptop:flex-row justify-center items-center w-full gap-6 border-b-2 border-solid-[#F3F5FB]">
            <div
              className="w-full laptop:w-4/12 text-center cursor-pointer "
              onClick={() => {
                setDropDownNumber(0)
                dispatch(setall({ cx: true, xm: false, da: false }));
              }}
            >
              <div
                className="flex gap-6 p-4 justify-center items-center    hover:!text-[#693ED4]"
                style={
                  cxService
                    ? {
                        color: "#693ED4",
                      }
                    : {
                        color: "#999999",
                      }
                }
              >
               
      
               
                <div>
                  <button className="text-xl  font-bold">
                    Customer Experience
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full laptop:w-4/12 text-center cursor-pointer"
              onClick={() => {
                setDropDownNumber(1)
                dispatch(setall({ cx: false, xm: true, da: false }));
              }}
            >
              <div
                className="flex gap-6 p-4 justify-center items-center hover:!text-[#693ED4]"
                style={
                  xmService
                    ? {
                 
                        color: "#693ED4",
                      }
                    : {
                        color: "#999999",
                      }
                }
              >
           
                <div>
                  <button className="text-xl  font-bold">
                    Experience Management
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full laptop:w-4/12 text-center cursor-pointer"
              onClick={() => {
                setDropDownNumber(2)
                dispatch(setall({ cx: false, xm: false, da: true }));
              }}
            >
              <div
                className="flex gap-6 p-4 justify-center items-center   hover:!text-[#693ED4]"
                style={
                  daService
                    ? {
                       
                        color: "#693ED4",
                      }
                    : {
                        color: "#999999",
                      }
                }
              >
            
                <div>
                  <button className="text-xl font-bold">Blink CX Apps</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDropdown;
