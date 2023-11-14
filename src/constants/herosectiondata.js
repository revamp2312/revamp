import { HeroHomeimg,aboutusHero,serviceHero } from "./utils"

export const herosectiondata =[
    {
      title:"We Enable Experience Transformation Through"  ,
      suntitle:"Join us on the journey to transform your customer experiences into lasting connections.",
      isfirstbtn:true,
      twobtns:true,
      firstbtn:"  Talk to CX Experts",
      secondbtn:"Explore Services",
      imgurl:HeroHomeimg,
      textanimation:true

    },
    {
        title:"Protect Your Business from Poor CX Practices,"  ,
        suntitle:"At Blink CX, we’re not just here to offer services; we’re your trusted partners in enhancing your customer experience (CX).",
        twobtns:false,
        isfirstbtn:true,
        firstbtn:"  Talk to CX Experts",
        secondbtn:"Explore Services",
        imgurl:serviceHero,
        textanimation:false
  
      },
      {
        title:"Achieving Customer Excellence Together,",
        suntitle:"Blink CX's approach to customer excellence is a journey we embark on together, one Blink at a time.",
        twobtns:false,
        isfirstbtn:false,
        imgurl:aboutusHero,
        textanimation:false
      }
]