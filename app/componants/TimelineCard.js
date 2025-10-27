export const TimelineCard = ({ role, company, duration, description }) => (
  <div className="relative pl-8 md:pl-12 py-4 border-l-2 border-cyan-700/50 group">
    <div className="absolute -left-2 top-4 w-4 h-4 bg-cyan-700/50 rounded-full border-4 border-gray-950 group-hover:bg-cyan-300 transition-colors duration-300"></div>
    <h3 className="text-xl font-semibold text-gray-100">{role}</h3>
    <p className="text-cyan-300 mb-1">
      {company} | {duration}
    </p>
    <p className="text-gray-400">{description}</p>
  </div>
);