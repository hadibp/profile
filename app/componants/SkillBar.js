import { motion } from "framer-motion";

export const SkillBar = ({ name, icon: Icon }) => (
  <motion.div
    className="bg-gray-900 border border-cyan-700/30 p-4 rounded-lg flex items-center space-x-4 shadow-lg shadow-cyan-500/5 relative overflow-hidden group"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="absolute top-0 left-0 h-full bg-cyan-700/30 z-0"
      initial={{ width: "0%" }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
    <div className="relative z-10 flex items-center space-x-4">
      <Icon className="w-8 h-8 text-cyan-300" />
      <span className="text-gray-200 font-medium">{name}</span>
    </div>
  </motion.div>
);