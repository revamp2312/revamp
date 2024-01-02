import { cx, xm, ds, cxDownArrrow, xmDownArrrow, dsDownArrrow,cxright,xmright,dsright } from "./utils";

export const exploredata = [
  {
    id: 1,
    icon: cx,
    arrow: cxDownArrrow,
    right:cxright,
    backgroundC: "#693ED4",
    boxSHADOW:" 0px 4px 20px 0px rgba(105, 62, 212, 0.10)",
    number: 0o1,
    title: "Customer Experience",
    content:
      "We understand that exceptional CX is not just a goal; it's a journey.",
      deleverText:"What we deliver",
    whatwedeiver: [
      {
        data: "Zendesk Consulting and Implementation ​",
      },
      {
        data: "Asana Consulting and Implementation",
      },
      {
        data: "Integration and Migration",
      },
      {
        data: "Custom Product Development​",
      },
      {
        data: "UI/UX Research Study",
      },
    ],
  },
  {
    id: 2,
    icon: xm,
    arrow: xmDownArrrow,
    right:xmright,
    backgroundC: "#A31EBE",
    boxSHADOW:"0px 4px 20px 0px rgba(163, 30, 190, 0.10)",
    number: 0o2,
    title: "Experience Management",
    content:
      "Experience Management (XM) is not just about gathering data; it's about turning insights into impact. ",
      deleverText:"What we deliver",
    whatwedeiver: [
      {
        data: "Qualtrics Consulting and Implementation",
      },
      {
        data:"Alida Consulting and Implementation",
      },
      {
        data:"Customer Insights"
      },
      {
        data:"XM Accelerator ​"
      },{
        data:"Research"
      }
    ],
  },
  {
    id: 3,
    icon: ds,
    arrow: dsDownArrrow,
    right:dsright,
    backgroundC: "#A2CC00",
    boxSHADOW:"0px 4px 20px 0px rgba(97, 122, 0, 0.10)",
    number: 0o3,
    title: "Blink CX Apps",
    content:
      "Blink CX's suite of developed apps where innovation meets seamless integration, shaping the future of customer experience.",
      deleverText:"What we developed ",
    whatwedeiver: [{
        data:"E-commerce Messaging App"
    },
    {
        data:"E-commerce Transaction App​"
    },
    {
      data:"Bulk Ticket Creation for campaigns and migration​"
    },
    {
      data:"Telephony Integration (VoIP, click-to-call, SIP phones)​"
    }
  ],
  },
];
