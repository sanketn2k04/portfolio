import memojiImage from "../assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"
import { HeroOrbit } from "../components/HeroOrbit";
import StarIcon from "../assets/icons/star.svg"
import SparklIcon from "../assets/icons/sparkle.svg"


export const HeroSection = () => {
  
  return (
    <div className="py-32 mid:py-48 lg:py-60 relative z-0">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className="size-[620px] hero-ring" ></div>
      <div className="size-[820px] hero-ring" ></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      {/* shouldOrbit = false, shouldSpin = false, spinDuration, OrbitDuration  */}
      <HeroOrbit size={430} rotation={-14} shouldOrbit OrbitDuration="30s" shouldSpin spinDuration="3s">
        <SparklIcon className="size-8 text-emerald-300/20 " />
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79} shouldOrbit OrbitDuration="32s" shouldSpin spinDuration="3s">
        <SparklIcon className="size-5 text-emerald-300/20 " />
      </HeroOrbit>

      <HeroOrbit size={520} rotation={-41} shouldOrbit OrbitDuration="34s">
        <div className="size-2 rounded-full bg-emerald-500/20 "></div>
      </HeroOrbit>

      <HeroOrbit size={530} rotation={178} shouldOrbit OrbitDuration="36s" shouldSpin spinDuration="3s">
        <SparklIcon className="size-10 text-emerald-300/20 " />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20} shouldOrbit OrbitDuration="38s" shouldSpin spinDuration="6s">
        <StarIcon className="size-12 text-emerald-300 " />
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98} shouldOrbit OrbitDuration="40s" shouldSpin spinDuration="6s">
        <StarIcon className="size-8 text-emerald-300 " />
      </HeroOrbit>

      <HeroOrbit size={650} rotation={-5} shouldOrbit OrbitDuration="42s">
        <div className="size-2 rounded-full bg-emerald-500/20 "></div>
      </HeroOrbit> 

      <HeroOrbit size={710} rotation={144} shouldOrbit OrbitDuration="44s" shouldSpin spinDuration="3s">
        <SparklIcon className="size-14 text-emerald-300/20 " />
      </HeroOrbit>

      <HeroOrbit size={720} rotation={90} shouldOrbit OrbitDuration="46s">
        <div className="size-3 rounded-full bg-emerald-500/20 "></div>
      </HeroOrbit>

      <HeroOrbit size={800} rotation={-72} shouldOrbit OrbitDuration="48s" shouldSpin spinDuration="6s">
        <StarIcon className="size-28 text-emerald-300 " />
      </HeroOrbit>
      
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind lap" />
          {/* <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium"
            >Available for new Projects</div>
          </div> */}
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide" >Bulding Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-large">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis natus culpa molestiae cumque amet eligendi commodi atque iusto tempora saepe placeat nihil dolorem, dignissimos, quisquam, minima odio aut accusantium fugit?
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4" >
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10">
            <a href="#project">
              <span className="font-semibold">Explore My Work</span>
            </a>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>

    </div>
  );
};
