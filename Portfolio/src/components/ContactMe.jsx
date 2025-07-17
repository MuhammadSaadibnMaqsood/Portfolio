import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { Phone } from "lucide-react";
import { BiLocationPlus } from "react-icons/bi";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')


  const handleName= (e)=>{
    setname(e.target.value);
    console.log(name);
    
  }

  const handleEmail= (e)=>{
    setemail(e.target.value);
  }

  const handleMessage= (e)=>{
    setmessage(e.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hl1g68i", "template_fgwccy9", form.current, {
        publicKey: "zTarQOhZsedbusIPY",
      })
      .then(
        () => {
          setname('');
          setemail('')
          setmessage('')
          toast.success('Email send');
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="bg-gradient-to-b from-white to-cyan-50 py-16 px-4 text-blue-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-center md:text-left"
        >
          Contact Me
        </motion.h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div>
            {/* Image */}
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-96 rounded-2xl shadow-lg"
              src="https://www.searchenginejournal.com/wp-content/uploads/2023/08/google-rollsout-translate-gmail-messages-in-app-for-ios-android-64d56f61b46eb-sej.jpg"
              alt="Contact"
            />

            <p className="text-black flex gap-3 pt-3">
              <MdEmail /> muhammadsaady0100@gmail.com
            </p>
            <p className="text-black flex gap-3 pt-3 ">
              <Phone />
              +92 3183368127{" "}
            </p>
            <p className="text-black flex gap-3 pt-3">
              <BiLocationPlus /> Karachi pakistan
            </p>
          </div>
          {/* Form Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 max-w-xl w-full space-y-6"
          >
            <h2 className="text-3xl text-center md:text-left font-bold">
              Get in Touch
            </h2>
            <p className="text-center md:text-left text-gray-700 max-w-md">
              Feel free to reach out if you'd like to collaborate – you're just
              a few clicks away!
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 bg-white/40 backdrop-blur-md border border-blue-300 rounded-xl p-6 shadow-lg"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                name="name"
                value={name}
                onChange={handleName}
                  className="w-full p-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                name="email"
                  value={email}
                onChange={handleEmail}
                  className="w-full p-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                name="message"
                  value={message}
                onChange={handleMessage}
                  className="w-full p-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
              type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-400 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300 w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
