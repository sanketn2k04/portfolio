"use client"
import memojiImage from "../assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"
import { HeroOrbit } from "../components/HeroOrbit";
import StarIcon from "../assets/icons/star.svg"
import SparklIcon from "../assets/icons/sparkle.svg"
import { useRouter } from 'next/navigation'


export const HeroSection = () => {
  const router = useRouter();
  const handleletsconnect = (): void => {
    router.push("https://www.linkedin.com/in/sanketnabade1/");
  }
  const handleDownloadResume = (): void => {
    window.open("/assets/Sanket Nabade Resume.pdf", "_blank");
  }

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
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide">Hi, I&apos;m Sanket Nabade.</h1>

          {/* Replace the outer <p> with a <div> */}
          <div className="mt-4 text-center text-white/60 md:text-large">
            <div className="">
              <p className="text-center text-lg text-gray-400 border-b border-gray-600 inline-block pb-1">
                20 y/o full-stack dev from India
              </p>
              <hr className="inline-block pb-1" />
            </div>
            <p>
              Passionate about clean code, dirty terminal hacks, and semicolon debates.
              <span className="text-xs bg-gray-800 text-gray-200 px-2 py-0.5 rounded-md font-mono">
                v20.7.0-beta
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4" >
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10" onClick={handleDownloadResume}>
            <span className="font-semibold">Download Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M12 17V3"></path>
              <path d="m6 11 6 6 6-6"></path>
              <path d="M19 21H5"></path>
            </svg>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10" onClick={handleletsconnect}>
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>

    </div>
  );
};
