import React from "react";
import Title from "../layout/Title";
import ContactLeft from "./ContactLeft";
import { useState } from "react";

function Contact() {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sucessMsg, setSucessMsg] = useState("");

  const emailVadlidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (userName === "") {
      setErrMsg("userName is required!");
      return;
    } else if (phoneNumber === "") {
      setErrMsg("phoneNumber is required!");
      return;
    } else if (email === "") {
      setErrMsg("email is required!");
      return;
    } else if (!emailVadlidation(email)) {
      setErrMsg("please put a valid email!");
      return;
    } else if (subject === "") {
      setErrMsg("subject is required!");
      return;
    } else if (message === "") {
      setErrMsg("message is required!");
      return;
    } 
    setErrMsg("");
    
    setTimeout(() =>{
      const whatsappMessage = `Hello, my name is ${userName}.
      Phone Number: ${phoneNumber}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}`;
  
      const encodedMessage = encodeURIComponent(whatsappMessage);
  
    
    const whatsappNumber = "2348139422159"; 
  
   
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setSucessMsg("");

    },2000)

   
      setSucessMsg(`Thank you dear ${userName},message has been sent succesfully`);


    
      setErrMsg("");
      setUserName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setPhoneNumber("");
    
    console.log(userName, phoneNumber, email, message, subject);
  
  };
  return (
    <section id="contact" className="w-full p-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Connect With Me" />
      </div>
      <div className="w-full ">
        <div className="w-full h-auto  flex justify-between">
          <ContactLeft />
          <div
            className="w-[60%] h-full p-5 bg-gradient-to-r from-[#1e202024] to-[#23272b] 
            flex flex-col justify-center
          gap-8 rounded-lg shadow-shadowOne"
          >
            <form className="w-full flex flex-col gap-6 py-5">
              {errMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce"
                >
                  {errMsg}
                </p>
              )}

              {sucessMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce"
                >
                  {sucessMsg}
                </p>
              )}

              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm uppercase text-gray-400 tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className={`${errMsg === 'userName is required!' && 'outline-designColor' }  contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm uppercase text-gray-400 tracking-wide">
                    phone number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${errMsg === 'phoneNumber is required!' && 'outline-designColor' }  contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm uppercase text-gray-400 tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${errMsg === 'email is required!' && 'outline-designColor' }  contactInput`}
                  type="email"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm uppercase text-gray-400 tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${errMsg === 'subject is required!' && 'outline-designColor' }  contactInput`}
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm uppercase text-gray-400 tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${errMsg === 'message is required!' && 'outline-designColor' }  contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSendMessage}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400
                 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  send message
                </button>
              </div>
              {errMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce"
                >
                  {errMsg}
                </p>
              )}

              {sucessMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce"
                >
                  {sucessMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
