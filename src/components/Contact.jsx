import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CONTACT } from "../constants";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_aayqev7",
        "template_sonukumar",
        emailData,
        "GYHoR4rU5H-kQ5t5s"
      );
      toast.success("Your message has been sent!", {
        position: "top-right",
        theme: "colored",
        style: { backgroundColor: "#A855F7", color: "#fff" },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-b border-neutral-900 pb-10 px-6 sm:px-10 flex flex-col items-center justify-center gap-10 min-h-screen"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-6xl">
        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.02 }}
          className="w-full md:w-1/2 bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl shadow-2xl border border-gray-800"
        >
          {[
            {
              label: "Name",
              type: "text",
              name: "name",
              placeholder: "Your Name",
            },
            {
              label: "Email",
              type: "email",
              name: "email",
              placeholder: "Your Email",
            },
          ].map(({ label, type, name, placeholder, icon }) => (
            <div className="mb-3 flex items-center" key={name}>
              {icon}
              <div className="w-full">
                <label className="block text-purple-300 mb-2">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          ))}
          <div className="mb-3">
            <label className="block text-purple-300 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-20"
            />
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full p-2 bg-purple-400 text-black font-semibold rounded-lg hover:bg-purple-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-center tracking-tighter space-y-3"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-300 flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" /> {CONTACT.address}
          </p>
          <p className="text-lg text-gray-300 flex items-center justify-center">
            <FaPhoneAlt className="mr-2" /> {CONTACT.phoneNo}
          </p>
          <a
            href="#"
            className="text-lg no-underline flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" /> {CONTACT.email}
          </a>
        </motion.div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        theme="colored"
      />
    </motion.div>
  );
};

export default Contact;
