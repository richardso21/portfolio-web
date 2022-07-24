import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ExitOverlay from '../common/exit-overlay';

const ProjectItem = ({ data, uid, isSelected }: any) => {
  const router = useRouter();
  return (
    <>
      {isSelected && <ExitOverlay onClick={() => router.push('/projects')} />}
      <Link
        href={'/projects?selected=' + uid}
        shallow={true}
        className={isSelected ? 'pointer-events-none' : ''}
      >
        <div
          className={
            'group w-full h-72 sm:h-96 relative rounded overflow-hidden active:scale-95 transition z-20 ' +
            (isSelected ? 'pointer-events-none' : 'cursor-pointer')
          }
        >
          <motion.div
            className="relative h-full transition duration-200 group-hover:blur-sm group-hover:brightness-75 child:h-full"
            layoutId={uid + '_img'}
          >
            <Image
              src={data.frontImage.url}
              alt={data.frontImage.alt}
              width={data.frontImage.dimensions.width}
              height={data.frontImage.dimensions.height}
              objectFit="cover"
            />
          </motion.div>
          <div className="absolute w-full left-0 -bottom-10 sm:-bottom-40 z-10 backdrop-blur backdrop-brightness-75 transition-all duration-200 group-hover:bottom-0 p-5 text-white ease-out">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold pb-2.5"
              layoutId={uid}
            >
              {data.name}
            </motion.h2>
            <p className="text-md sm:text-xl italic font-medium text-gray-200">
              {data.techStack}
            </p>
            <span className="text-gray-300 text-lg italic absolute bottom-5 right-5">
              {data.dateDone}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectItem;
