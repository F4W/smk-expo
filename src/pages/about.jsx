import React from 'react';
import basyar from "../images/basyar.jpg"
import wahyu from "../images/wahyu.jpg"
import alya from "../images/alya2.jpg"
import sucita from "../images/sucita.jpg"
import nubertus from "../images/dika.jpg"
import naya from "../images/naya2.jpg"

const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <div className="team-member flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default function About() {
  const teamMembers = [
    { name: 'Wahyu Andika Rahadi ', role: 'Fullstack Developer', imageUrl: wahyu },
    { name: 'Basysyaar Al Yaassar', role: 'Frontend Developer', imageUrl: basyar },
    { name: 'Nurbetus Dwi Andika', role: 'Frontend Developer', imageUrl: nubertus },
    { name: 'Mini Sucita', role: 'Backend Developer', imageUrl: sucita },
    { name: 'Alya Farhana', role: 'Content Writer', imageUrl: alya },
    { name: 'Naya Refa', role: 'Logo Creative / UI Designer', imageUrl: naya },
  ];

  return (
    <div className="about-container flex flex-col justify-center items-center min-h-screen px-8 py-6 bg-black text-white mt-16">
      <h1 className="text-4xl font-bold">
        <span className="text-[#2bd1ff]">About</span> Project
      </h1>
      <div className="mt-6 text-center font-serif">
        <p className=" text-lg">
        <span className='text-[#2bd1ff] text-2xl'>Hallo Sahabat Koding</span> Perkenalkan kami team pembuat website FILWI dari sekolah SMK Negeri 69 Jakarta. Di website ini, terdapat hasil projek team kami yang tujuannya ialah dapat menambah edukasi, referensi, serta tentunya dapat membantu keseharian sahabat nihh. 

        </p>
        <p className="mt-4">
        Apa aja sih isi website project dari team kami? Tentunya ada Weather forecast app, Web Ai Ilama, Web flm list dan Web wikipedia. Dimana masing-masing fungsi dari website tersebut tentunya berbeda beda yaa sahabat. 
        </p>
        <p className="mt-4 hidden md:block">
        Untuk itu kami mengajak sahabat untuk melihat dan mencoba hasil project website kami yang ada di halaman ini yaa!
        </p>
      </div>
      <h1 className="text-3xl font-bold mt-8">
       Our Team <span className="text-[#2bd1ff]">Members</span>
      </h1>

      <div className="team-section text-[#2bd1ff]  mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-x-12">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
