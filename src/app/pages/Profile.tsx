import { motion } from 'motion/react';
import { Bookmark, User as UserIcon, Mail, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getUserBookmarks, getLessons } from '../utils/storage';
import { LessonCard } from '../components/LessonCard';
import { Navigate } from 'react-router';

export const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const bookmarks = getUserBookmarks(user.id);
  const allLessons = getLessons();
  const bookmarkedLessons = bookmarks
    .map(b => allLessons.find(l => l.id === b.lessonId))
    .filter((lesson): lesson is NonNullable<typeof lesson> => lesson !== undefined);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8"
      >
        <div className="flex items-start gap-6">
          <div className="bg-white bg-opacity-20 p-6 rounded-full">
            <UserIcon className="w-12 h-12" />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Member since {formatDate(user.createdAt)}</span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full mt-2">
                <span className="capitalize">{user.role}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bookmarks Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <Bookmark className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Bookmarked Lessons
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {bookmarkedLessons.length} {bookmarkedLessons.length === 1 ? 'lesson' : 'lessons'} saved
          </p>
        </motion.div>

        {bookmarkedLessons.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bookmarkedLessons.map((lesson, index) => (
              <LessonCard key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <Bookmark className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              No bookmarked lessons yet
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Start bookmarking lessons to access them quickly later
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
};
