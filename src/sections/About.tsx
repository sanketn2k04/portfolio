import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { title } from "process";
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import Css3Icon from "@/assets/icons/css3.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GitHubIcon from "@/assets/icons/github.svg"
import ReactIcon from "@/assets/icons/react.svg"
import { Techicon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItem } from "@/components/ToolBoxItemContainer";
const toolboxitems=[
  {
    title:'JavaScript',
    iconType:JavaScriptIcon
  },
  {
    title:'HTML5',
    iconType:HtmlIcon
  },
  {
    title:'CSS3',
    iconType:Css3Icon
  },
  {
    title:'React',
    iconType:ReactIcon
  },
  {
    title:'Github',
    iconType:GitHubIcon
  },
  {
    title:'chrome',
    iconType:ChromeIcon
  },
]

const hobbies = [
  {
    title:'Painting',
    emoji:'🍑',
    left:"5%",
    top:"5%"
  },
  {
    title:'Photography',
    emoji:'🍔',
    left:'50%',
    top:'10%'
  },
  {
    title:'Hiking',
    emoji:'🍑',
    left:'5%',
    top:'65%'
  },
  {
    title:'Music',
    emoji:'🍑',
    left:'70%',
    top:'45%'
  },
  {
    title:'Fitness',
    emoji:'🍑',
    left:'35%',
    top:'40%'
  },
  {
    title:'Gaming',
    emoji:'🍑',
    left:'10%',
    top:'35%'
  },

]
export const AboutSection = () => {
  return(
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader eyebrow="About me" title="Glimpse into my world!" description="Learn About me!"/>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My reads" description="Explore the books shaping my prespective!"/>
          <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image 
              src={bookImage.src} 
              alt="Book cover"
              width={bookImage.width || 300}
              height={bookImage.height || 450}
              />
          </div>
        </Card>
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
          <CardHeader title="My tool box" description="Explore the technologies!" 
          className=""/>
          <ToolBoxItem items={toolboxitems} className=""/>
          <ToolBoxItem items={toolboxitems} className="mt-2"
          itemsWrapperClassName="-translate-x-1/2"/>
        </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader 
          title="Beyond the code!" 
          description="Explore the hobbles beyommd ythe codw!"
          className="px-6 py-4"
          />
              <div className="relative flex-1">
                {
                  hobbies.map(hobby=>(
                    <div key={hobby.title} className="inline-flex items-center
                    gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5
                    absolute" style={{
                      left:hobby.left,
                      top:hobby.top,
                    }}>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))
                }
              </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
              bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline
              after:outline-2 after:-outline-offset-2 after:rounded-full
              after:outline-gray-50-950">
              <Image src={smileMemoji} alt="smileMemoji" className="size-20"/>
              </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
};
