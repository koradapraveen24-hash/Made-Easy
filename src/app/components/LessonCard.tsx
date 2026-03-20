import { motion } from 'motion/react';
import { FileText, Download, Bookmark, BookmarkCheck } from 'lucide-react';
import { Lesson } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { toggleBookmark, isBookmarked, addRecentlyViewed } from '../utils/storage';
import { useState, useEffect } from 'react';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

export const LessonCard = ({ lesson, index }: LessonCardProps) => {
  const { user } = useAuth();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (user) {
      setBookmarked(isBookmarked(user.id, lesson.id));
    }
  }, [user, lesson.id]);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (user) {
      toggleBookmark(user.id, lesson.id);
      setBookmarked(!bookmarked);
    }
  };

  const handleView = () => {
    if (user) {
      addRecentlyViewed(user.id, lesson.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {lesson.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {lesson.description}
              </p>
            </div>
          </div>
          
          {user && (
            <button
              onClick={handleBookmark}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ml-2"
              aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              ) : (
                <Bookmark className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              )}
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-4">
          <a
            href={lesson.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleView}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <FileText className="w-4 h-4" />
            <span>View PDF</span>
          </a>
          
          <a
            href={lesson.pdfUrl}
            download
            onClick={handleView}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Download PDF"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
