import React from 'react'
import { contactImg } from "../../assets";
import ContactIcon from './ContactIcon';


function ContactLeft() {
  return (
    <div
    className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23242b] 
    shadow-shadowOne p-4 lgl:p-8 rounded-lg
   flex flex-col gap-8 justify-center"
  >
    <img
      className="w-full h-64 object-cover rounded-lg mb-2"
      src={contactImg}
      alt="contactImg"
    />
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">ugwuja livinus</h3>
      <p className="text-lg font-normal text-gray-500">
        softeware Engreerer
      </p>
      <p className="text-base text-gray-400 tracking-wide">
        Assisted in software tasks, participated in team meetings, and
        learned project management methodologies.
      </p>
      <p className="text-base text-gray-400 flex items-end gap-2">
        Phone <span className="text-lightText">+234 8139422159</span>
      </p>
      <p className="text-base text-gray-400 flex items-end gap-2">
        Email{" "}
        <span className="text-lightText">livinusonyenso@gmail.com</span>
      </p>
      <div className="flex flex-col gap-4">
      <p className="text-base uppercase font-titleFont mb-4">Find me</p>
      <ContactIcon/>
      </div>
    </div>
  </div>
  )
}

export default ContactLeft