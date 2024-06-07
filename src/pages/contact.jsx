import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import {  BsAirplane } from 'react-icons/bs';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    SendWhatsapp(name, email, message);
  };

  const SendWhatsapp = (name, email, message) => {
    const urlToWhatsapp = `https://wa.me/6283816927804?text=Halo, nama saya ${name}, kontak saya adalah ${email}. Saya ingin bertanya: ${message}`;
    window.open(urlToWhatsapp, "_blank");
  };

  return (
    <div className="relative flex flex-col justify-center font-bold items-center min-h-[100vh]">
      <p className="text-[var(--clr-text-1)] font-['Poppins'] text-3xl">
        Contact <span className="text-white">With Us</span>
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-[var(--clr-text-1)] text-xs font-bold mb-2" htmlFor="name">
              Nama
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-[var(--clr-text-1)] text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-[var(--clr-text-1)] text-xs font-bold mb-2" htmlFor="message">
              Pesan
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send <BsAirplane className='w-full relative bottom-5 left-7'/>
          </button>
        </div>
      </form>

    </div>
  );
}
