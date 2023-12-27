import { motion } from "framer-motion";
import useBlinkStorySlidesScroll from "../../hooks/useBlinkStorySlidesScroll";

const BlinkStorySlides = () => {
  const {
    handleScroll,
    handleGoBack,
    section2019,
    section2020,
    section2021,
    section2022,
    section2023,
  } = useBlinkStorySlidesScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      id="story-first"
      className="z-100 blink-slides sticky  overflow-y-auto top-0 h-[100vh] bg-w scroll-smooth max-w-[1440px] w-full m-auto"
    >
      <div className=" relative h-[100vh] story-2018 flex justify-center items-center w-full max-w-[1440px] text-center">
        <div className="max-w-[688px] justify-center items-center flex flex-col gap-6">
          <div className=" text-[#333333] font-semibold">
            <h2>
              {" "}
              In late 2018, Blink embarked on a remarkable journey as a
              Marketing Consulting services company
            </h2>
          </div>
          <div className="text-[16px] text-[#333333]">
            Initially serving Centric IT Group and esteemed partners like IBM,
            HP, SAP, Dell, and Sailpoint. Those early days laid the foundation
            for what Blink would become—a trusted name in the world of Customer
            Experience (CX) transformation.
          </div>

          <div
            onClick={() => handleScroll(section2019)}
            className="absolute bottom-0  cursor-pointer flex flex-col justify-center items-center pb-6 gap-1"
          >
            <p className="text-base text-[#693ED4]">2019</p>
            <div className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
              >
                <path
                  d="M13.0703 11.93L7.00031 18L0.930313 11.93M7.00031 1L7.00031 17.83"
                  stroke="#6C52E3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div
            onClick={handleGoBack}
            className="absolute top-0  cursor-pointer flex flex-col justify-center items-center pt-6 gap-1"
          >
            <div className="flec justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4697 3.46967C11.7626 3.17678 12.2375 3.17678 12.5304 3.46967L18.5304 9.46967C18.8233 9.76256 18.8233 10.2374 18.5304 10.5303C18.2375 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967ZM12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <p className="text-base text-[#693ED4]">
              Discover more - Back to about us
            </p>
          </div>
        </div>
      </div>

      <div
        ref={section2019}
        className="relative h-[100vh] story-2019 flex justify-center items-center w-full max-w-[1440px] text-center"
      >
        <div className="max-w-[688px] flex flex-col gap-6 justify-center items-center">
          <div className=" text-[#333333] font-semibold">
            <h2>
              We confidently executed a pivotal shift, considering the rise of
              the CX landscape and the evolving needs of our partners and
              clients.
            </h2>
          </div>
          <div className="text-[16px] text-[#333333]">
            We shifted our focus towards CX Advisory services, building upon our
            extensive marketing experience. It was a bold step, but one that
            would redefine the value we brought to the table. Our journey took
            us beyond our comfort zone. We began engaging clients beyond our
            Centric IT Group and formed our first crucial partnerships with SAP
            and Qualtrics—a turning point in our evolution.
          </div>

          <div
            onClick={() => handleScroll(section2020)}
            className="absolute bottom-0  cursor-pointer flex flex-col justify-center items-center pb-6 gap-1"
          >
            <p className="text-base text-[#693ED4]">2020</p>
            <div className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
              >
                <path
                  d="M13.0703 11.93L7.00031 18L0.930313 11.93M7.00031 1L7.00031 17.83"
                  stroke="#6C52E3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div
            onClick={handleGoBack}
            className="absolute top-0  cursor-pointer flex flex-col justify-center items-center pt-6 gap-1"
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4697 3.46967C11.7626 3.17678 12.2375 3.17678 12.5304 3.46967L18.5304 9.46967C18.8233 9.76256 18.8233 10.2374 18.5304 10.5303C18.2375 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967ZM12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <p className="text-base text-[#693ED4]">
              Discover more - Back to about us
            </p>
          </div>
        </div>
      </div>

      <div
        ref={section2020}
        id="2020"
        className="relative h-[100vh] story-2020 flex justify-center items-center w-full max-w-[1440px] text-center"
      >
        <div className="max-w-[688px] justify-center items-center flex flex-col gap-6">
          <div className="text-[#333333] font-semibold">
            <h2>
              In the year 2020, we realized that true CX transformation required
              more than advice; it required innovation.
            </h2>
          </div>
          <div className="text-[16px] text-[#333333]">
            We ventured into Innovations and mobile development, complementing
            our CX offerings with cutting-edge solutions that pushed the
            boundaries of possibility. The turning point came when we secured
            our first contracts in the insurance and banking sectors, venturing
            into uncharted territory and proving our mettle. Simultaneously, we
            embarked on a major Data Science project in the government sector,
            showcasing our versatility and commitment to driving change.
          </div>
          <div
            onClick={() => handleScroll(section2021)}
            className="absolute bottom-0  cursor-pointer flex flex-col justify-center items-center pb-6 gap-1"
          >
            <p className="text-base text-[#693ED4]">2021</p>
            <div className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
              >
                <path
                  d="M13.0703 11.93L7.00031 18L0.930313 11.93M7.00031 1L7.00031 17.83"
                  stroke="#6C52E3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={handleGoBack}
            className="absolute top-0   cursor-pointer flex flex-col justify-center items-center pt-6 gap-1"
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4697 3.46967C11.7626 3.17678 12.2375 3.17678 12.5304 3.46967L18.5304 9.46967C18.8233 9.76256 18.8233 10.2374 18.5304 10.5303C18.2375 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967ZM12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <p className="text-base text-[#693ED4]">
              Discover more - Back to about us
            </p>
          </div>
        </div>
      </div>

      <div
        ref={section2021}
        className="relative h-[100vh] story-2021 flex justify-center items-center w-full max-w-[1440px] text-center"
      >
        <div className="max-w-[688px] flex justify-center items-center flex-col gap-6">
          <div className="text-[#333333] font-semibold">
            <h2>
              Blink's reputation as a leader in Customer Experience and
              Experience Management grew stronger in 2021.
            </h2>
          </div>
          <div className="text-[16px] text-[#333333]">
            We clinched major contracts with the top two telcos in the
            Philippines, cementing our status as an industry frontrunner. Our
            ability to deliver exceptional CX and manage experiences became our
            signature, setting us apart in the industry.
          </div>
          <div
            onClick={() => handleScroll(section2022)}
            className="absolute bottom-0  cursor-pointer flex flex-col justify-center items-center pb-6 gap-1"
          >
            <p className="text-base text-[#693ED4]">2022</p>
            <div className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
              >
                <path
                  d="M13.0703 11.93L7.00031 18L0.930313 11.93M7.00031 1L7.00031 17.83"
                  stroke="#6C52E3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={handleGoBack}
            className="absolute top-0  cursor-pointer flex flex-col justify-center items-center pt-6 gap-1"
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4697 3.46967C11.7626 3.17678 12.2375 3.17678 12.5304 3.46967L18.5304 9.46967C18.8233 9.76256 18.8233 10.2374 18.5304 10.5303C18.2375 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967ZM12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <p className="text-base text-[#693ED4]">
              Discover more - Back to about us
            </p>
          </div>
        </div>
      </div>

      <div
        ref={section2022}
        className="relative h-[100vh] story-2022 flex justify-center items-center w-full max-w-[1440px] text-center"
      >
        <div className="max-w-[688px] justify-center items-center flex flex-col gap-6">
          <div className=" text-[#333333] font-semibold">
            <h2> The year 2022 was a defining moment.</h2>
          </div>
          <div className="text-[16px] text-[#333333]">
            We soared to new heights, experiencing hypergrowth in terms of
            revenue and customer relationships, both in the private and public
            sectors. It was also the year we embarked on an exciting journey of
            innovation, developing our own Insights Product called IMPULS.CX—an
            embodiment of our commitment to staying at the forefront of CX
            excellence.
          </div>
          <div
            onClick={() => handleScroll(section2023)}
            className="absolute bottom-0  cursor-pointer flex flex-col justify-center items-center pb-6 gap-1"
          >
            <p className="text-base text-[#693ED4]">2023</p>
            <div className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
              >
                <path
                  d="M13.0703 11.93L7.00031 18L0.930313 11.93M7.00031 1L7.00031 17.83"
                  stroke="#6C52E3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={handleGoBack}
            className="absolute top-0  cursor-pointer flex flex-col justify-center items-center pt-6 gap-1"
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4697 3.46967C11.7626 3.17678 12.2375 3.17678 12.5304 3.46967L18.5304 9.46967C18.8233 9.76256 18.8233 10.2374 18.5304 10.5303C18.2375 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967ZM12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <p className="text-base text-[#693ED4]">
              Discover more - Back to about us
            </p>
          </div>
        </div>
      </div>

      <div
        ref={section2023}
        className="relative h-[100vh] story-2023 flex justify-center items-center w-full max-w-[1440px] text-center"
      >
        <div className="max-w-[688px] justify-center items-center flex flex-col gap-6">
          <div className=" text-[#333333] font-semibold">
            <h2>
              Today, we proudly stand as Blink CX, reaching new heights by
              extending our expertise globally.
            </h2>
          </div>
          <div className="text-[16px] text-[#333333]">
            Our journey continues, fueled by our commitment to transforming
            customer experiences, innovating tirelessly, and delivering
            meaningful results. We are thrilled to share that our path led us to
            a new milestone in 2023—expanding our presence to Singapore.
            Together, we anticipate shaping an even brighter CX future.
          </div>

          <div
            onClick={handleGoBack}
            className="absolute top-0   cursor-pointer flex flex-col justify-center items-center pt-6 gap-1"
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4697 3.46967C11.7626 3.17678 12.2375 3.17678 12.5304 3.46967L18.5304 9.46967C18.8233 9.76256 18.8233 10.2374 18.5304 10.5303C18.2375 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967ZM12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <p className="text-base text-[#693ED4]">
              Discover more - Back to about us
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlinkStorySlides;
