import { useEffect, useState } from "react";
import ship2 from "../assets/images/ship2.jpeg";

const LandingPage = () => {
  const [content, setContent] = useState<boolean>(false);
  const [siteLink, setSiteLink] = useState<boolean>(false);

  useEffect(() => {
    if (content === true) {
      setSiteLink(!siteLink);
    }
  }, [content]);

  const slidingIntro = () => {
    setContent(!content);
  };

  return (
    <div
      className="font-playfair h-screen bg-center bg-no-repeat bg-cover text-white flex justify-center "
      style={{ backgroundImage: `url(${ship2})` }} // image background
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-black opacity-75"></div>

      <div className=" h-screen w-screen relative flex justify-center">
        <section className={`w-1/3 h-screen shadow-lg shadow-black`}>
          <header className=" flex items-center justify-center text-center h-1/6">
            <h1 className="text-3xl font-bold">
              <a href="/" className="">
                Prudence Marine Services
              </a>
            </h1>
          </header>

          <article className="flex flex-col justify-evenly text-center h-3/4">
            <div>
              <h2 className="font-playfair text-5xl font-thin ">
                Husbandry <br /> and <br /> Agency Experts
              </h2>
            </div>

            <div>
              <button
                onClick={slidingIntro}
                className={`${
                  content
                    ? "invisible transition-all duration-1000 delay-1000"
                    : ""
                }  py-1.5 px-7 text-md font-poppins font-semibold text-center  text-gray-950 bg-gray-200 hover:bg-transparent hover:text-white rounded-md `}
              >
                About Us
              </button>
            </div>
          </article>
        </section>

        {content ? (
          <main
            className={` h-screen w-2/3 bg-blue-950 bg-opacity-15 transition-all duration-500`}
          >
            <div className=" h-1/6"></div>
            <section
              id="about"
              className=" w-full h-3/4 flex flex-col justify-evenly"
            >
              <div className="flex items-center">
                <article
                  id="who _we_are"
                  className="flex-col hover:scale-105 pt-4 pb-4  mx-10 h-fit hover:bg-blue-950 hover:bg-opacity-75 hover:border-0 hover:rounded-xl group  transition-all duration-500"
                >
                  <h3 className="font-poppins  my-4 text-3xl font-semibold group-hover:underline group-hover:underline-offset-4 text-center transition-all duration-500">
                    Who are we:
                  </h3>
                  <p className=" font-poppins  text-xl font-medium group-hover:font-normal text-center group-hover:text-center ">
                    Prudence Marine Services Limited, based in Mombasa, Kenya,
                    specializes in maritime and shipping solutions. With over 7
                    years of experience in ships agency and logistics, our team
                    of experts offers top-notch care for all vessel husbandry
                    matters.
                  </p>
                </article>

                <article
                  id="what_we_do"
                  className=" flex-col hover:scale-105 pt-4 pb-4 mx-10 h-fit hover:bg-blue-950 hover:bg-opacity-75 hover:border-0  hover:rounded-xl group transition-all duration-500"
                >
                  <h3 className="font-poppins  my-4 text-3xl font-semibold group-hover:underline group-hover:underline-offset-4 text-center transition-all duration-500">
                    What we do:
                  </h3>
                  <p className="font-poppins  text-xl font-medium group-hover:font-normal text-center group-hover:text-center ">
                    We prioritize your interests by leveraging in-depth local
                    port knowledge and strong connections with authorities,
                    ensuring reliable and efficient service. Trust us to handle
                    your vessel needs with professionalism and expertise.
                  </p>
                </article>
              </div>

              <div className="flex justify-end">
                <p
                  className={`${
                    siteLink === true
                      ? "visible transition-all duration-5000 delay-[2000ms] "
                      : "invisible"
                  }`}
                >
                  <a
                    id="website"
                    href="#"
                    className=" py-1.5 px-7 mr-20 text-md font-poppins font-semibold text-center  text-gray-950 bg-gray-200 hover:bg-transparent hover:text-white rounded-md w-fit"
                  >
                    Learn More -&gt;
                  </a>
                </p>
              </div>
            </section>
          </main>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LandingPage;
