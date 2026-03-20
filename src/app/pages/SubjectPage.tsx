import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { LessonCard } from '../components/LessonCard';
import { SearchBar } from '../components/SearchBar';
import { getSubjects, getLessonsBySubject } from '../utils/storage';
import * as Icons from 'lucide-react';

export const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  const subjects = getSubjects();
  const subject = subjects.find(s => s.id === subjectId);
  const lessons = subjectId ? getLessonsBySubject(subjectId) : [];

  // Filter lessons based on search
  const filteredLessons = useMemo(() => {
    if (!searchQuery) return lessons;
    
    const query = searchQuery.toLowerCase();
    return lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(query) ||
      lesson.description.toLowerCase().includes(query)
    );
  }, [lessons, searchQuery]);

  if (!subject) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Subject not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[subject.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to subjects
        </Link>
      </motion.div>

      {/* Subject Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              {IconComponent && <IconComponent className="w-12 h-12" />}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {subject.name}
              </h1>
              <p className="text-blue-100 text-lg mb-4">
                {subject.description}
              </p>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">
                  {subject.lessonCount} {subject.lessonCount === 1 ? 'lesson' : 'lessons'} available
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      {lessons.length > 0 && (
        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search lessons..."
          />
        </div>
      )}

      {/* Lessons Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Course Lessons
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredLessons.length} {filteredLessons.length === 1 ? 'lesson' : 'lessons'} found
          </p>
        </motion.div>

        {filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredLessons.map((lesson, index) => (
              <LessonCard key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        ) : lessons.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No lessons found matching "{searchQuery}"
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No lessons available for this subject yet
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
};
