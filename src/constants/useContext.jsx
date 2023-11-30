import { createContext, useContext,useState } from "react";

export const planContext=createContext({
})

export function PlanContextProvider({children}){
   
    const [showPop,setShowPop]=useState(false)
    return <planContext.Provider value={{showPop,setShowPop}}>{children}</planContext.Provider>
}

export function UseplanContext(){
    const {showPop,setShowPop}=useContext(planContext);
    return {showPop,setShowPop}
}