import { motion } from 'framer-motion';
import ExperienceItem from './experience-item';

const ExperienceList = ({
  experiences,
}: {
  experiences: Array<any>;
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="pl-6 sm:pl-12 pr-2 md:pr-10"
    >
      <ol className="relative border-l border-gray-500 child:text-xl">
        {experiences.map((experience: any) => (
          <ExperienceItem key={experience.id} data={experience.data} />
        ))}
      </ol>
    </motion.div>
  );
};

export default ExperienceList;
