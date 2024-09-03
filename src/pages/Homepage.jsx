import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import { stats, companies, testimonials, sellingPoints } from "../constants";

function Homepage() {
  return (
    <>
      {/* Section - Hero */}
      <section className="hero bg-gray-100 py-3 md:py-8 lg:py-16">
        <div className="container mx-auto px-1 md:px-8 lg:px-10 flex flex-col-reverse gap-2 md:gap-2 lg:gap-28 md:flex-row justify-center items-center">
          {/* Text Content */}
          <motion.div
            className="container flex flex-col md:w-1/2 items-center md:items-start justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl leading-6 md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              Empowering Food Industries with World-Class Certifications
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-center md:text-left">
              Specializing in ISO, BRC, and FSSC certifications, we help your
              business meet the highest standards. We are committed to guiding
              you through the complexities of food safety and quality
              certifications.
            </p>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accenthover text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded transition-all duration-300"
            >
              Get in touch
            </Link>
          </motion.div>
          {/* Illustration */}
          <motion.div
            className="container md:w-1/2 mb-4 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="h-40 md:h-auto"
              src="\assets\illustrations\hero.svg"
              alt="Certification Illustration"
            />
          </motion.div>
        </div>
      </section>
      {/* Section - Count up */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-100 shadow-md rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <h3 className="text-4xl font-bold text-accent mb-2">
                  <CountUp
                    end={stat.end}
                    duration={3}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </h3>
                <p className="text-lg font-medium text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Section: Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-lg italic mb-4">
                    {testimonial.description}
                  </p>
                  <p className="text-sm font-semibold">{testimonial.person}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Section: Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Experience
          </motion.h2>
          <motion.p
            className="text-lg text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our team has had the privilege of working with these esteemed
            companies during our previous roles as independent consultants and
            in other leading firms.
          </motion.p>
          <div className="overflow-hidden relative">
            <motion.div
              className="flex"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 mx-20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-10 md:max-h-16"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section: Why choose us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sellingPoints.map((point, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {point.title}
                </h3>
                <p>{point.description}</p>
              </motion.div>
            ))}
          </div>
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

export default Homepage;
