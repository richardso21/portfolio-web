import { motion } from 'framer-motion';

const ExitOverlay = ({ onClick }: { onClick: () => {} }) => (
  <motion.div
    onClick={onClick}
    className="h-screen w-screen left-0 top-0 backdrop-brightness-75 z-0 fixed cursor-pointer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  ></motion.div>
);

export default ExitOverlay;
