const AccordionForSmallDevice = ({heading,content, showAc, setAcc,hideAcc, keyBenefits,image }) => {
  return (
    <div
    onClick={showAc ? hideAcc : setAcc}
    className="bg-white rounded p-6 cursor-pointer laptop:hidden"
    style={
      showAc
        ? {
            borderRadius: " 0px 0px 4px 4px",
            borderTop: "2px solid  #693ED4",
          }
        : {}
    }
  >
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{heading}</p>
        </div>
        <div className="transition-transform duration-200 w-6"
         style={ showAc ? {  transform:"rotate(180deg)" }  : {  transform:"rotate(0deg)"  } } >
            <img className="w-full" src="./AccordionArrrow.png" />
        </div>
      </div>
      <div className="grid transition-[grid-template-rows]  duration-[400ms]"
        style={showAc ? { gridTemplateRows: "1fr", }: {gridTemplateRows: "0fr",  }} >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6">
            <p className="font-normal pt-4">{content}</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold">Key Benefits</p>
              </div>
              <div className="flex flex-col gap-3 justify-center items-start">
                {keyBenefits?.map((each, index) => {
                  return (
                    <div key={index} className="flex gap-4 justify-center items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.8162 4.20701C14.0701 4.47369 14.0597 4.89568 13.793 5.14954L6.08929 12.4829C5.95773 12.6081 5.78078 12.6742 5.59933 12.666C5.41788 12.6577 5.24766 12.5758 5.12803 12.4391L2.16506 9.05451C1.92254 8.77747 1.95052 8.35629 2.22755 8.11377C2.50459 7.87125 2.92577 7.89923 3.16829 8.17626L5.67342 11.0379L12.8737 4.1838C13.1404 3.92994 13.5624 3.94033 13.8162 4.20701Z"
                            fill="#693ED4"
                          />
                        </svg>
                      </div>
                      <p>{each.eachBenefit}</p>
                    </div>
                  );
                })}
              </div>
              <div className='w-full flex justify-center items-center mt-2'>
                <img className='w-full tablet:w-[80%]' src={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AccordionForSmallDevice