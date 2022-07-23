import { motion } from 'framer-motion';

const ProjectItem = () => {
  return (
    <motion.div className="group w-full h-72 sm:h-96 relative rounded-md overflow-hidden active:scale-95 transition cursor-pointer">
      <div className="w-full h-full transition duration-200 group-hover:blur-sm group-hover:brightness-75 bg-[url('https://via.placeholder.com/300x200.png')] bg-no-repeat bg-cover bg-center" />
      <div className="absolute w-full left-0 -bottom-14 z-10 backdrop-blur backdrop-brightness-75 transition-all duration-200 group-hover:bottom-0 p-5 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold pb-5">
          Really long project name
        </h2>
        <p className="text-2xl italic font-medium text-gray-200">
          Next.js, React, Typescript
        </p>
        <span className="text-gray-300 text-lg italic absolute bottom-5 right-5">
          Jan 2022
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
