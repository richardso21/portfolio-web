import { PrismicRichText } from '@prismicio/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectContent = ({ data, uid }: any) => {
  return (
    <div className="relative pt-24">
      <motion.h1
        className="text-white text-5xl md:text-6xl font-bold inline-block mb-10 z-10"
        layoutId={uid}
      >
        {data.name}
      </motion.h1>
      <motion.div
        className="relative z-0 h-[40vh]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.35 } }}
      >
        <picture>
          <img
            src={data.frontImage.url}
            alt={data.frontImage.alt}
            className="absolute h-full object-cover md:object-contain"
          />
        </picture>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        className="py-5 text-white text-2xl sm:text-3xl w-full lg:w-9/12 child:pb-10"
      >
        <PrismicRichText
          field={data.details}
          components={{
            paragraph: ({ children }) => (
              <div className="text-gray-300">{children}</div>
            ),
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectContent;
