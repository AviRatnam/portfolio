import Header from "../Components/Header/Header";
import Github from "../logos/github";
import Linkedin from "../logos/linkedin";
import Medium from "../logos/medium";

import {
  Code,
  Computer,
  GithubIcon,
  Hat,
  Mail,
  Paper,
  SpeechBubble,
  Website,
} from "../logos/icons";
import {
  C,
  Css,
  Html,
  Js,
  NextJS,
  Python,
  React,
  Tailwindcss,
} from "../logos/techlogos";
import IntroWidget from "../Widgets/IntroWidget";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="grid gap-5">
          <div className="text-center text-3xl font-sansPro font-semibold">
            Avinash Ratnam
          </div>
          <div className="text-center text-5xl font-sansPro font-semibold pt-5">
            Developer. Designer. word
          </div>
          <div className="text-center text-lg font-sansPro pt-5">
            Hello there, my name is Avinash and I am a UI/UX Designer and
            Developer from Bangalore, India.
          </div>
          <div className="text-center text-lg font-sansPro pt-3">
            Ever since I was a child, I have been in love with Apple&apos;s Design,
            that&apos;s probably why this portfolio seems so familiar ;)
          </div>
          <div className="flex gap-5 items-center justify-center">
            <a className="bg-linkedinBlue text-white font-semibold px-5 py-3 rounded-full" href="#contact">
              Contact
            </a>
            <a className="text-linkedinBlue text-xl font-semibold">About me</a>
          </div>
          <div className="mt-36 flex md:gap-24 gap-10 justify-center">
            <Linkedin height={23} width={30} />
            <Medium height={26} width={26} />
            <Github width={30} height={24} />
          </div>
        </div>
      </div>
      <div className="w-full h-3/4 bg-darkBlueGray" id="#aboutme">
        <div className="text-white text-4xl text-center font-sansPro font-semibold py-10">
          Who am I?
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 lg:py-20 px-12 flex justify-center items-center">
            <div className="font-semibold text-white text-xl grid gap-3">
              <p>
                I am a final-year engineering student from PES University,
                Bangalore India.
              </p>
              <p>I aspire to be professional UI/UX Designer and Developer.</p>
              <p>
                Over the last few months I&apos;ve completed various projects while
                increasing my interest and love for designing and coding
                interfaces.
              </p>
              All my work has been showcased below.
            </div>
          </div>
          <div className="col-span-7 lg:py-20 px-12 flex justify-center items-center">
            <div className="grid gap-5">
              <img src="avi.jpg" className="h-80 w-80 rounded-full"/>
              <div className="text-gray-200 text-sm text-center">
                Oh and yes I do Improv and Stand-up Comedy too
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-3/4 flex justify-center items-center " id="tech">
        <div className="grid gap-5">
          <div className="text-center pt-28 pb-14 font-sansPro text-4xl font-semibold">
            Tech I use
          </div>
          <div className="flex gap-28">
            <Html />
            <Css />
            <Js />
            <Tailwindcss />
            <React />
            <NextJS />
            <Python />
            <C />
          </div>
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="pt-40 pb-16 font-semibold font-sansPro text-4xl text-center">
          What projects have I done ?
        </div>
        <div className="flex justify-center gap-20">
          <div className="w-80 h-auto border border-gray-200 items-center px-10 py-6 rounded-lg">
            <div className="text-xl font-semibold font-sansPro text-center">
              Capstone Project
            </div>
            <div className="text-center text-sm text-gray-400 font-semibold py-5">
              From January 2021 - December 2021
            </div>
            <div className="flex gap-4 items-center text-center py-4 text-lg font-semibold">
              <div className="flex gap-2 items-center">
                <div className="text-md font-normal">Code:</div>
                <GithubIcon
                  width={25}
                  height={25}
                  link={"https://github.com/AviRatnam/HCI_Project"}
                />
                <div className="text-md font-normal">Website:</div>
                <Website />
              </div>
            </div>
            <div className="border-b border-gray-200" />
            <div className="flex items-center gap-2 py-8">
              <Computer />
              <div className="text-md">College Project</div>
            </div>
            <div className="flex items-center gap-2">
              <Code />
              <div className="text-md">React JS, Python</div>
            </div>
            <div className="flex items-center gap-2 py-8">
              <SpeechBubble />
              <div className="text-md">
                An app to identify and address educational concepts that a
                student may be struggling in
              </div>
            </div>
          </div>
          <div className="w-80 h-auto border border-gray-200 items-center px-10 py-6 rounded-lg">
            <div className="text-xl font-semibold font-sansPro text-center">
              Elderaan App
            </div>
            <div className="text-center text-sm text-gray-400 font-semibold py-5">
              From January 2021 - May 2021
            </div>
            <div className="flex gap-4 items-center text-center py-4 text-lg font-semibold">
              <div className="flex gap-2 items-center">
                <div className="text-md font-normal">Code:</div>
                <GithubIcon
                  width={25}
                  height={25}
                  link={"https://github.com/AviRatnam/HCI_Project"}
                />
              </div>
            </div>
            <div className="border-b border-gray-200" />
            <div className="flex items-center gap-2 py-8">
              <Computer />
              <div className="text-md">College Project</div>
            </div>
            <div className="flex items-center gap-2">
              <Code />
              <div className="text-md">Adobe XD</div>
            </div>
            <div className="flex items-center gap-2 py-8">
              <SpeechBubble />
              <div className="text-md">
                An app to understand and solve issues the older generation face
                while using smartphones{" "}
              </div>
            </div>
          </div>
          <div className="w-80 h-auto border border-gray-200 items-center px-10 py-6 rounded-lg">
            <div className="text-xl font-semibold font-sansPro text-center">
              Equation Solver
            </div>
            <div className="text-center text-sm text-gray-400 font-semibold py-5">
              From January 2020 - Nov 2020
            </div>
            <div className="flex gap-10 items-center text-center py-4 text-lg font-semibold">
              <div className="flex gap-2 items-center">
                <div className="text-md font-normal">Code:</div>
                <GithubIcon width={25} height={25} />
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-md font-normal">Paper:</div>
                <Paper />
              </div>
            </div>
            <div className="border-b border-gray-200" />
            <div className="flex items-center gap-2 py-8">
              <Hat />
              <div className="text-md">Research Paper, IEEE INOCON</div>
            </div>
            <div className="flex items-center gap-2">
              <Code />
              <div className="text-md">Python, Dart</div>
            </div>
            <div className="flex items-center gap-2 py-8">
              <SpeechBubble />
              <div className="text-md">
                An app that recognises handwritten mathematical equations and
                solves them
              </div>
            </div>
          </div>
          <div className="w-80 h-auto border border-gray-200 items-center px-10 py-6 rounded-lg">
            <div className="text-xl font-semibold font-sansPro text-center">
              Data Visualisation
            </div>
            <div className="text-center text-sm text-gray-400 font-semibold py-5">
              From January 2021 - May 2021
            </div>
            <div className="flex gap-4 items-center text-center py-4 text-lg font-semibold">
              <div className="flex gap-2 items-center">
                <div className="text-md font-normal">Code:</div>
                <GithubIcon
                  width={25}
                  height={25}
                  link={"https://github.com/AviRatnam/HCI_Project"}
                />
              </div>
            </div>
            <div className="border-b border-gray-200" />
            <div className="flex items-center gap-2 py-8">
              <Computer />
              <div className="text-md">College Project</div>
            </div>
            <div className="flex items-center gap-2">
              <Code />
              <div className="text-md">Python</div>
            </div>
            <div className="flex items-center gap-2 py-8">
              <SpeechBubble />
              <div className="text-md">
                Visualisation of sales metrics of different video game companies
                over the decades.
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 text-center text-xl font-semibold">
          Check all my projects on <a className="border-b-2 border-black" href="https://github.com/AviRatnam"> Github </a>
        </div>
      </div>
      <div className="w-full h-3/4 bg-gray-100 mt-28 flex justify-center items-center " id="#contact">
        <div className="grid gap-5">
          <div className="text-center pt-28 pb-10 font-sansPro text-4xl font-semibold">
            Contact
          </div>
          <div className="grid gap-10">
            <div className="flex gap-5 items-center">
              <Mail />
              <div className="text-md font-medium text-gray-500">
                avinashkratnam@gmail.com
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Linkedin width={25} height={25} />
              <a
                className="text-md font-medium text-gray-500"
                href="https://www.linkedin.com/in/avinashratnam/"
              >
                linkedin.com/in/avinashratnam/
              </a>
            </div>
            <div className="py-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
