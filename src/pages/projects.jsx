import React from "react";
import "./projects.css";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const AllProjects = [
  {
    name: "Film List",
    image: "film list.png",
    link: "https://film-list-app-id.vercel.app/",
    description:
      "Website film list, fungsinya itu kita bisa mencari film yang populer atau film terbaru. Didalam webnya terdapat genre film seperti, horor, anime, romantis, dan komedi. Dan yang terakhir itu kita dapat mengetahui rating dan waktu rilis dari film yang kita cari..",
  },
  {
    name: "AI llama",
    image: "ilama.png",
    link: "https://llama-ai-app.vercel.app/",
    description:
      "Website AI Ilama, fungsi web tersebut kita bisa menanyakan apa pun. Seperti menanyakan hal umum maupun pekerjaan.Lebih mengesankan lagi,web ini dihubungkan oleh Llama 3 70B, varian dengan 70 miliar parameter diklaim mampu bersaing dengan model-model AI terbaik saat ini."
  },
  {
    name: "Weather Forecas App",
    image: "weather.png",
    link: "https://wheater-forecast-app-id.vercel.app/",
    description:
      "Website weather forecast app, fungsi webnya itu kita bisa mencari suhu udara, mendeteksi kelembaban daerah maupun kecepatan angin disetiap kota maupun negra diseluruh dunia.",
  },
  {
 name :  'Wikipedia Indonesia',
 image: 'wikipedia.png',
 link:'https://wikipedia-clone-indonesia-app.vercel.app/',
 description: "Website wikipedia Indonesia, fungsi web seperti mesin pencari google tetapi berbeda melainkan web ini mencari informasi-informasi yang faktual berdasarkan artikel wikipedia resmi.",
  },
];

const Project = ({ pro }) => {
  return (
    <div className="relative flex lg:flex-row lg:justify-end lg:items-end flex-col-reverse  p-10 w-full">
      <div className=" lg:absolute lg:p-20  z-10 top-0 left-0 bottom-0 lg:w-1/2">
      <div className="p-4 rounded-b-lg lg:rounded-lg backdrop-blur-sm backdrop-saturate-200 bg-[var(--clr-project-1)] lg:border-[1px] lg:border-[var(--clr-border-project)]  z-10">
          <span className="font-bold text-[var(--clr-text-1)] text-2xl">
            {pro.name}
          </span>
          <p className="">{pro.description}</p>
          <div className="inline-flex py-2 gap-2 text-[var(--clr-text-1)] text-2xl">
            {pro?.skills?.map((skill) => {
              return skill;
            })}
          </div>
        </div>
      </div>
      <div className='w-full lg:w-3/4'>
     <a href={pro.link} target="_blank">
           <img
             src={pro.image}
             alt="no"
             className="hover:scale-110 w-full  h-auto transition-all delay-75  lg:object-cover rounded-t-lg lg:rounded-lg"
           />
         </a>
      </div>
    </div>
  );
};
export default function Projects() {
  return (
    <div className="flex justify-center px-2 py-4  lg:px-20 lg:py-20 items-center flex-col gap-10">
      {AllProjects.map((project) => {
        return <Project pro={project} />;
      })}
    </div>
  );
}
