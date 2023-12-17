import ContactInquiryForm from "./ContactInquiryForm";

const ContactInquiryFormConatainer= () => {
  return (
    <div id="contactEnquiryForm" className="max-w-[1400opx] w-full flex justify-center items-center m-auto  py-12 ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[860px]"> 
            <div><p className="text-[#666]">INQUIRY</p></div>
            <div className="text-center text-[31px] font-semibold">Kindly complete the brief inquiry form below to help us better understand your needs.</div>
        </div>
       <ContactInquiryForm />
      </div>
    </div>
  );
};

export default ContactInquiryFormConatainer;
