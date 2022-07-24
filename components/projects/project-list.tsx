import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProjectItem from './project-item';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectList = ({ projects }: { projects: Array<any> }): JSX.Element => {
  const router = useRouter();
  const [param, setParam] = useState('');
  // get params from url (SSG)
  useEffect(() => {
    if (!router.isReady) return;
    const query: string = router.query.selected as string;
    setParam(query);
    console.log(query);
  }, [router.isReady, router.query]);

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project: any) => (
        <motion.div key={project.id} variants={item}>
          <ProjectItem
            data={project.data}
            uid={project.uid}
            isSelected={param}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
