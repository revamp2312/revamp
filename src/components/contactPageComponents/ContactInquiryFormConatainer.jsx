import ContactInquiryForm from "./ContactInquiryForm";

const ContactInquiryFormConatainer= () => {
  return (
    <div id="contactEnquiryForm" className="max-w-[1400opx] w-full flex justify-center items-center m-auto px-6 tablet:px-14 laptop:px-[70px]  py-12 ">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[860px]"> 
            <div><p className="text-[#666]">INQUIRY</p></div>
            <div className="text-center text-[31px] font-semibold"><h3>Kindly complete the brief inquiry form below to help us better understand your needs.</h3></div>
        </div>
       <ContactInquiryForm />
      </div>
    </div>
  );
};

export default ContactInquiryFormConatainer;
