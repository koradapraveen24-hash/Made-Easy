import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Subject } from '../types';
import * as Icons from 'lucide-react';

interface SubjectCardProps {
  subject: Subject;
  index: number;
}

export const SubjectCard = ({ subject, index }: SubjectCardProps) => {
  // Get the icon component dynamically
  const IconComponent = Icons[subject.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        to={`/subject/${subject.id}`}
        className="block group"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Color header */}
          <div className={`h-2 ${subject.color}`} />
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 ${subject.color} bg-opacity-10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                {IconComponent && <IconComponent className={`w-8 h-8 ${subject.color.replace('bg-', 'text-')}`} />}
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                {subject.lessonCount} lessons
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {subject.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {subject.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
