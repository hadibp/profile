import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ProjectCard = ({ title, description, technologies, link }) => (
    <motion.div
        className="bg-gray-900/50 border border-cyan-700/50 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:border-cyan-600 transition-all duration-300 group flex flex-col"
        whileHover={{ y: -8 }}
    >
        <div className="p-6 flex flex-col -grow">
            <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
            <p className="text-gray-400 mb-4 grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map(tech => (
                    <span key={tech} className="bg-cyan-900/50 border border-cyan-700/50 text-cyan-200 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                ))}
            </div>
             <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 mt-auto font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                View Project <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    </motion.div>
);