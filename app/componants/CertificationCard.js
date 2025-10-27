import { Award } from "lucide-react";
export const CertificationCard = ({ name, source }) => (
    <div className="bg-gray-900/50 border border-cyan-700/30 p-4 rounded-lg flex items-center space-x-4">
        <Award className="w-6 h-6 text-cyan-300 shrink-0" />
        <div>
            <p className="text-gray-200 font-medium">{name}</p>
            <p className="text-cyan-400 text-sm">{source}</p>
        </div>
    </div>
);