import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `As a software engineer, I specialize in crafting modern web applications with a focus on performance and user experience. My expertise lies in building scalable frontend architectures and robust backend systems.

Currently working on innovative solutions in e-commerce and fintech, while actively contributing to open-source projects that push web technologies forward.

Beyond coding, I'm dedicated to sharing knowledge through tech articles and mentoring emerging developers in our community.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-[100vh] bg-black rounded-b-4xl flex flex-col">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 flex-grow">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            ref={imgRef}
            src="images/creator.jpeg"
            alt="creator"
            className="w-full max-w-md rounded-3xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
      </div>
    </section>
  );
};

export default About;
