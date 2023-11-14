import { cx, xm, ds, cxDownArrrow, xmDownArrrow, dsDownArrrow,cxright,xmright,dsright } from "./utils";

export const exploredata = [
  {
    id: 1,
    icon: cx,
    arrow: cxDownArrrow,
    right:cxright,
    backgroundC: "#693ED4",
    number: 0o1,
    title: "Customer Experience",
    content:
      "We understand that exceptional CX is not just a goal; it's a journey.",
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
    number: 0o2,
    title: "Experience Management",
    content:
      "Experience Management (XM) is not just about gathering data; it's about turning insights into impact. ",
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
    number: 0o3,
    title: "Data Science",
    content:
      "Blink CX's Data Science Practice is your bridge to data-driven decision-making.",
    whatwedeiver: [{
        data:"Data Science Consulting"
    },
    {
        data:"Data Science and Machine Learning Projects"
    }],
  },
];
