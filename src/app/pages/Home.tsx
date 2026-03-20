import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, TrendingUp } from 'lucide-react';
import { SubjectCard } from '../components/SubjectCard';
import { SearchBar } from '../components/SearchBar';
import { LessonCard } from '../components/LessonCard';
import { getSubjects, getUserRecentlyViewed } from '../utils/storage';
import { useAuth } from '../contexts/AuthContext';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const subjects = getSubjects();
  const { user } = useAuth();
  
  const recentlyViewed = user ? getUserRecentlyViewed(user.id) : [];

  // Filter subjects based on search
  const filteredSubjects = useMemo(() => {
    if (!searchQuery) return subjects;
    
    const query = searchQuery.toLowerCase();
    return subjects.filter(subject => 
      subject.name.toLowerCase().includes(query) ||
      subject.description.toLowerCase().includes(query)
    );
  }, [subjects, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Student Learning Portal
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Access comprehensive study materials, lesson-wise PDFs, and resources for all your subjects
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search subjects..."
        />
      </div>

      {/* Recently Viewed Section */}
      {user && recentlyViewed.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Recently Viewed
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewed.map((lesson, index) => (
              <LessonCard key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        </motion.section>
      )}

      {/* Subjects Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Browse Subjects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredSubjects.length} {filteredSubjects.length === 1 ? 'subject' : 'subjects'} available
          </p>
        </motion.div>

        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject, index) => (
              <SubjectCard key={subject.id} subject={subject} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No subjects found matching "{searchQuery}"
            </p>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">{subjects.length}</div>
            <div className="text-blue-100">Subjects Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              {subjects.reduce((acc, subject) => acc + subject.lessonCount, 0)}
            </div>
            <div className="text-blue-100">Total Lessons</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Access Anytime</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
