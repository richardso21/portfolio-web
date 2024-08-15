import { motion } from 'framer-motion';
import Image from "next/legacy/image";
import Link from 'next/link';

const ProjectItem = ({ data, uid }: any) => {
  return (
    <Link href={'/projects/' + uid}>
      <div className="group w-full h-96 sm:h-72 relative rounded-md overflow-hidden active:scale-95 transition cursor-pointer bg-slate-700">
        <motion.div
          className="relative h-full transition duration-200 group-hover:blur-sm group-hover:brightness-50 child:h-full child:block"
          layoutId={uid + '_img'}
        >
          <Image
            src={data.frontImage.url}
            alt={data.frontImage.alt}
            width={data.frontImage.dimensions.width}
            height={data.frontImage.dimensions.height}
            objectFit="cover"
            quality={80}
          />
        </motion.div>
        <div className="absolute w-full left-0 -bottom-0 sm:-bottom-40 z-10 backdrop-blur backdrop-brightness-75 transition-all duration-200 group-hover:bottom-0 p-5 text-white ease-out">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold pb-5 [text-shadow:0_0_5px_black]"
            layoutId={uid}
          >
            {data.name}
          </motion.h2>
          <p className="text-md sm:text-xl italic font-medium text-gray-100">
            {data.techStack}
          </p>
          <span className="text-gray-200 text-lg italic absolute bottom-5 right-5">
            {data.dateDone}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
