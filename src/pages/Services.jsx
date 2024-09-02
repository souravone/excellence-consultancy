import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaRegListAlt,
  FaChalkboardTeacher,
  FaIndustry,
  FaFlask,
  FaSearch,
  FaClipboardList,
  FaCheck,
  FaUserCheck,
  FaAward,
  FaUserShield,
  FaHandsHelping,
  FaClipboardCheck,
  FaChartLine,
  FaBreadSlice,
  FaFish,
  FaLeaf,
  FaSeedling,
  FaWineBottle,
  FaAppleAlt,
  FaCheese,
  FaTint,
  FaBook,
  FaBalanceScale,
} from "react-icons/fa";

const services = [
  {
    title: "System Certification Consultancy",
    description:
      "Expert consultancy services to help businesses achieve certifications like ISO, BRCGS, FSSC, and more, ensuring compliance with international quality and safety standards.",
    icon: <FaCertificate size={40} className="text-blue-500" />,
  },
  {
    title: "Vendor Audits",
    description:
      "Comprehensive vendor audit services to evaluate and enhance supplier quality and compliance throughout your supply chain.",
    icon: <FaRegListAlt size={40} className="text-green-500" />,
  },
  {
    title: "Project Setup",
    description:
      "Consultancy for setting up food factories, packaging facilities, and more, ensuring a seamless transition from concept to operation.",
    icon: <FaIndustry size={40} className="text-orange-500" />,
  },
  {
    title: "R&D of Food Products",
    description:
      "Innovative research and development services for food products, including sweets, pickles, and more, tailored to market needs.",
    icon: <FaFlask size={40} className="text-red-500" />,
  },
  {
    title: "Training",
    description:
      "Specialized training programs on system certification standards, from HACCP to BRCGS, designed to empower your team with essential knowledge and skills.",
    icon: <FaBook size={40} className="text-purple-500" />,
  },
  {
    title: "Legal Compliance",
    description:
      "Expert guidance on FSSAI regulatory requirements, labeling norms, and other legal compliances to keep your business fully compliant.",
    icon: <FaBalanceScale size={40} className="text-teal-500" />,
  },
];

const steps = [
  {
    title: "Phase 1: Gap Analysis",
    description:
      "Conduct a gap assessment to know the position of the organization with respect to the standard to be implemented.",
    icon: <FaSearch size={40} className="text-blue-500" />,
  },
  {
    title: "Phase 2: Training",
    description:
      "Provide training to staff and workers to create awareness regarding the standard.",
    icon: <FaChalkboardTeacher size={40} className="text-green-500" />,
  },
  {
    title: "Phase 3: Documentation Development",
    description:
      "Develop and hand over necessary documents (SOPs, Records, etc.) with training on record-keeping.",
    icon: <FaClipboardList size={40} className="text-orange-500" />,
  },
  {
    title: "Phase 4: Implementation & Verification",
    description:
      "Perform periodic verification during the course of system implementation.",
    icon: <FaCheck size={40} className="text-red-500" />,
  },
  {
    title: "Phase 5: Internal Audit",
    description:
      "Conduct an internal audit to ensure compliance with all clauses of the standard.",
    icon: <FaUserCheck size={40} className="text-purple-500" />,
  },
  {
    title: "Phase 6: Certification Audit",
    description:
      "Facilitate the certification audit from the certification body of your choice or ours.",
    icon: <FaAward size={40} className="text-yellow-500" />,
  },
];

const benefits = [
  {
    title: "Experienced Consultants",
    description:
      "Our team consists of highly experienced consultants with years of expertise in system certification.",
    icon: <FaUserShield size={40} className="text-blue-500" />,
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide customized solutions tailored to your organization’s specific needs and goals.",
    icon: <FaHandsHelping size={40} className="text-green-500" />,
  },
  {
    title: "Comprehensive Approach",
    description:
      "We follow a holistic approach from gap analysis to certification audit, ensuring successful implementation.",
    icon: <FaClipboardCheck size={40} className="text-orange-500" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Our team has a proven track record of helping businesses achieve certifications smoothly and efficiently.",
    icon: <FaChartLine size={40} className="text-red-500" />,
  },
];

const industries = [
  {
    title: "Bakery & Confectionery",
    icon: <FaBreadSlice size={50} className="text-yellow-500" />,
  },
  {
    title: "Aquaculture Farms",
    icon: <FaFish size={50} className="text-blue-500" />,
  },
  {
    title: "Agriculture (Tea Gardens)",
    icon: <FaLeaf size={50} className="text-green-500" />,
  },
  {
    title: "Beverage Industry",
    icon: <FaWineBottle size={50} className="text-purple-500" />,
  },
  {
    title: "Fruit & Vegetables",
    icon: <FaAppleAlt size={50} className="text-red-500" />,
  },
  {
    title: "Dairy Products",
    icon: <FaCheese size={50} className="text-orange-500" />,
  },
  {
    title: "Edible Oils",
    icon: <FaTint size={50} className="text-yellow-600" />,
  },
  {
    title: "Grain Processing",
    icon: <FaSeedling size={50} className="text-green-400" />,
  },
];

function Services() {
  return (
    <>
      {/* Section - Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Consultancy Services for Your Certification Needs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer expert consultancy services focused on system
              certifications, project setup, and R&D of food products. With a
              primary focus on system certification consultancy, we ensure our
              clients achieve compliance with the highest standards.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Section - Services offering */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-600">
              From system certifications to R&D of food products, explore our
              wide range of services.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
              >
                {/* Icon */}
                <div className="mb-4">{service.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section - Process overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Method of Operation
            </h2>
            <p className="text-lg text-gray-600">
              We ensure your organization achieves certification with a
              well-defined, step-by-step process.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Icon */}
                <div className="mb-4">{step.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section - Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Benefits of Choosing Us
            </h2>
            <p className="text-lg text-gray-600">
              Discover the advantages of partnering with our consultancy for
              your certification needs.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Icon */}
                <div className="mb-4">{benefit.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section - Industries */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our expertise spans across diverse industries, providing
              comprehensive consultancy solutions.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Icon */}
                <div className="mb-4">{industry.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {industry.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section - CTA */}
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

export default Services;
