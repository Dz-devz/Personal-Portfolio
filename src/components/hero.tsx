// import DzDPTwo from "../assets/DzDPTwo.jpg";
import DzShadow from "../assets/DzShadow.jpg";
import Button from "./button";
import Section from "./section";

export default function Hero() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Enjoy exploring and discover the passion and drive behind each
            project.
          </h1>
          <Button href="/projects">Explore now</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-transparent rounded-[1rem]">
              <div className="h-[1.4rem] bg-transparent rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* <img
                  src={DzDPTwo}
                  className="w-full"
                  width={1440}
                  height={1800}
                  alt="Display Picture of Dz dev"
                /> */}
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={DzShadow}
              className="w-full"
              width={1440}
              height={1800}
              alt="Display Picture Shadow"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
