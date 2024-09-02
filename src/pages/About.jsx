import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaHandsHelping,
  FaLightbulb,
  FaRegHandshake,
} from "react-icons/fa";

import { introduction } from "../constants";
import { teamMembers } from "../constants";
import { story } from "../constants";

function About() {
  return (
    <>
      {/* Section: Introduction */}
      <section className="bg-white py-16 px-5 md:px-10 lg:px-20">
        <div className="container mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
          >
            About Excellence Consultancy Services
          </motion.h2>

          {/* Company Overview */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 text-center mx-auto mb-12"
          >
            {introduction.paragraph}
          </motion.p>

          {/* Mission, Vision, Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-500"
            >
              <FaBullseye className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">{introduction.mission}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 p-6 rounded-lg shadow-md hover:bg-green-100 transition-colors duration-500"
            >
              <FaLightbulb className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600">{introduction.vision}</p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-yellow-50 p-6 rounded-lg shadow-md hover:bg-yellow-100 transition-colors duration-500"
            >
              <FaRegHandshake className="text-yellow-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-yellow-700 mb-2">
                Core Values
              </h3>
              <p className="text-gray-600">{introduction.core}</p>
            </motion.div>
          </div>

          {/* USP Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-12 mt-16 rounded-lg shadow-lg text-center mx-auto"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 text-lg">{introduction.whyChooseUs}</p>
          </motion.div>
        </div>
      </section>
      {/* Section: Team */}
      <section className="bg-gray-100 py-16 px-5 md:px-10 lg:px-20">
        <div className="container mx-auto">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
          >
            Meet the Team
          </motion.h2>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                {/* Team Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />

                {/* Team Member Name and Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4">
                  {member.title}
                </p>

                {/* Team Member Bio */}
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section: Story */}
      <section className="bg-white py-16 px-5 md:px-8 lg:px-10">
        <div className="container mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Our Story
          </motion.h2>

          {/* Story Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed text-gray-700 text-justify mb-8"
          >
            {story}
          </motion.p>

          {/* Additional Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl leading-relaxed text-gray-700 text-justify"
          >
            Our founders, each with a distinct yet complementary set of skills,
            have worked in various sectors of the food industry and beyond.
            Together, we’ve faced the challenges of navigating complex
            regulatory environments, designing effective management systems, and
            implementing sustainable practices. Driven by a passion for
            continuous improvement and a desire to make a difference, we decided
            to create a consultancy that prioritizes personalized service,
            practical solutions, and long-term value. Our journey is not just
            about building a business; it's about fostering a community where
            quality and compliance are viewed as pathways to success.
          </motion.p>
        </div>
      </section>
      {/* Section: CTA */}
      <section className="bg-gray-800 py-12 px-5 md:px-8 lg:px-10 ">
        <div className="container mx-auto">
          {/* CTA Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Ready to Elevate Your Business?
          </motion.h2>

          {/* CTA Paragraph */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white"
            >
              Whether you’re looking to achieve certification, improve your
              processes, or start a new project, our team is here to guide you
              every step of the way. Reach out to us today to discuss how we can
              help you succeed.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="whitespace-nowrap"
            >
              <Link
                to="/contact"
                className="bg-accent hover:bg-accenthover text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
