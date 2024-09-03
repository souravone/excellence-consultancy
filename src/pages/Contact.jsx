import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("excellence-service", "template_1", form.current, {
        publicKey: "UnNCPy0g5O0-KkkF3",
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset(); // Clear the form after submission
  };
  return (
    <>
      {/* Section: Introduction */}
      <section className="bg-white py-16 px-5 md:px-10 lg:px-20 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto container"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Whether you have questions about our
            services, want to schedule a consultation, or need support, our team
            is ready to help. Please fill out the form below or use the contact
            details provided.
          </p>
        </motion.div>
      </section>
      {/* Section: Form */}
      <section className="bg-gray-100 py-16 px-5 md:px-10 lg:px-20 flex">
        <motion.div
          className="container  mb-4 md:flex justify-center md:visible hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="h-40 md:h-auto"
            src="\assets\illustrations\contact_us.svg"
            alt="Certification Illustration"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" mx-auto bg-white p-8 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-accent hover:bg-accenthover text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
      {/* Section: Address */}
      <section className="bg-white py-16 px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div>
          <MapContainer
            center={[22.5969474, 88.3674524]} // Coordinates of the location
            zoom={15}
            scrollWheelZoom={false}
            className="h-80 lg:h-full rounded-lg shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[22.5969474, 88.3674524]}>
              <Popup>
                Excellence Consultancy Services <br /> Kolkata 700004
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Contact Information and Office Hours */}
        <div className="flex flex-col justify-between space-y-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                26 Srikrishna Lane, Shyampukur, Near Sailendra Sarkar School,
                Kolkata 700004
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-green-500 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                (+91) 8584075245, (+91) 9674679115
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-red-500 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                contact.ecsindia@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Office Hours
            </h3>
            <div className="flex items-start space-x-3">
              <FaClock className="text-blue-500 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                Monday to Saturday: 9:00 AM - 7:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Section: Message */}
      <section className="bg-gray-100 py-12 px-5 md:px-10 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Excellence Consultancy Services, we are more than just
            consultants; we are your partners in achieving excellence. Whether
            it's navigating complex certifications, enhancing operational
            efficiency, or developing new product lines, our experienced team is
            here to guide you every step of the way. Contact us today and let's
            start building a brighter future for your business together.
          </p>
          <p className="text-lg font-semibold text-accent">
            Your success is our mission, and we are committed to helping you
            achieve it!
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
