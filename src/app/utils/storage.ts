import { User, Lesson, Subject, Bookmark, RecentlyViewed } from '../types';
import { initialSubjects, initialLessons } from '../data/mockData';

// Storage keys
const KEYS = {
  USERS: 'slp_users',
  CURRENT_USER: 'slp_current_user',
  SUBJECTS: 'slp_subjects',
  LESSONS: 'slp_lessons',
  BOOKMARKS: 'slp_bookmarks',
  RECENTLY_VIEWED: 'slp_recently_viewed',
  THEME: 'slp_theme'
};

// Initialize storage with default data
export const initializeStorage = () => {
  if (!localStorage.getItem(KEYS.SUBJECTS)) {
    localStorage.setItem(KEYS.SUBJECTS, JSON.stringify(initialSubjects));
  }
  if (!localStorage.getItem(KEYS.LESSONS)) {
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(initialLessons));
  }
  if (!localStorage.getItem(KEYS.USERS)) {
    // Create default admin user
    const defaultAdmin: User = {
      id: 'admin-1',
      email: 'admin@student-portal.com',
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(KEYS.USERS, JSON.stringify([defaultAdmin]));
  }
  if (!localStorage.getItem(KEYS.BOOKMARKS)) {
    localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.RECENTLY_VIEWED)) {
    localStorage.setItem(KEYS.RECENTLY_VIEWED, JSON.stringify([]));
  }
};

// User operations
export const getUsers = (): User[] => {
  const users = localStorage.getItem(KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(KEYS.USERS, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(KEYS.CURRENT_USER);
  return userJson ? JSON.parse(userJson) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(KEYS.CURRENT_USER);
  }
};

// Subject operations
export const getSubjects = (): Subject[] => {
  const subjects = localStorage.getItem(KEYS.SUBJECTS);
  return subjects ? JSON.parse(subjects) : [];
};

export const saveSubjects = (subjects: Subject[]) => {
  localStorage.setItem(KEYS.SUBJECTS, JSON.stringify(subjects));
};

// Lesson operations
export const getLessons = (): Lesson[] => {
  const lessons = localStorage.getItem(KEYS.LESSONS);
  return lessons ? JSON.parse(lessons) : [];
};

export const getLessonsBySubject = (subjectId: string): Lesson[] => {
  return getLessons()
    .filter(lesson => lesson.subjectId === subjectId)
    .sort((a, b) => a.order - b.order);
};

export const getLesson = (lessonId: string): Lesson | undefined => {
  return getLessons().find(lesson => lesson.id === lessonId);
};

export const saveLessons = (lessons: Lesson[]) => {
  localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
};

export const addLesson = (lesson: Lesson) => {
  const lessons = getLessons();
  lessons.push(lesson);
  saveLessons(lessons);
  
  // Update subject lesson count
  const subjects = getSubjects();
  const subjectIndex = subjects.findIndex(s => s.id === lesson.subjectId);
  if (subjectIndex !== -1) {
    subjects[subjectIndex].lessonCount += 1;
    saveSubjects(subjects);
  }
};

export const deleteLesson = (lessonId: string) => {
  const lessons = getLessons();
  const lessonToDelete = lessons.find(l => l.id === lessonId);
  const updatedLessons = lessons.filter(lesson => lesson.id !== lessonId);
  saveLessons(updatedLessons);
  
  // Update subject lesson count
  if (lessonToDelete) {
    const subjects = getSubjects();
    const subjectIndex = subjects.findIndex(s => s.id === lessonToDelete.subjectId);
    if (subjectIndex !== -1 && subjects[subjectIndex].lessonCount > 0) {
      subjects[subjectIndex].lessonCount -= 1;
      saveSubjects(subjects);
    }
  }
};

// Bookmark operations
export const getBookmarks = (): Bookmark[] => {
  const bookmarks = localStorage.getItem(KEYS.BOOKMARKS);
  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const getUserBookmarks = (userId: string): Bookmark[] => {
  return getBookmarks().filter(b => b.userId === userId);
};

export const isBookmarked = (userId: string, lessonId: string): boolean => {
  return getBookmarks().some(b => b.userId === userId && b.lessonId === lessonId);
};

export const toggleBookmark = (userId: string, lessonId: string) => {
  const bookmarks = getBookmarks();
  const existingIndex = bookmarks.findIndex(
    b => b.userId === userId && b.lessonId === lessonId
  );
  
  if (existingIndex >= 0) {
    bookmarks.splice(existingIndex, 1);
  } else {
    bookmarks.push({
      userId,
      lessonId,
      createdAt: new Date().toISOString()
    });
  }
  
  localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify(bookmarks));
};

// Recently viewed operations
export const getRecentlyViewed = (): RecentlyViewed[] => {
  const viewed = localStorage.getItem(KEYS.RECENTLY_VIEWED);
  return viewed ? JSON.parse(viewed) : [];
};

export const getUserRecentlyViewed = (userId: string, limit: number = 6): Lesson[] => {
  const viewed = getRecentlyViewed()
    .filter(v => v.userId === userId)
    .sort((a, b) => new Date(b.viewedAt).getTime() - new Date(a.viewedAt).getTime())
    .slice(0, limit);
  
  const lessons = getLessons();
  return viewed
    .map(v => lessons.find(l => l.id === v.lessonId))
    .filter((lesson): lesson is Lesson => lesson !== undefined);
};

export const addRecentlyViewed = (userId: string, lessonId: string) => {
  const viewed = getRecentlyViewed();
  
  // Remove existing entry for this user and lesson
  const filtered = viewed.filter(
    v => !(v.userId === userId && v.lessonId === lessonId)
  );
  
  // Add new entry at the beginning
  filtered.push({
    userId,
    lessonId,
    viewedAt: new Date().toISOString()
  });
  
  // Keep only last 50 entries
  const limited = filtered.slice(-50);
  
  localStorage.setItem(KEYS.RECENTLY_VIEWED, JSON.stringify(limited));
};

// Theme operations
export const getTheme = (): 'light' | 'dark' => {
  const theme = localStorage.getItem(KEYS.THEME);
  return theme === 'dark' ? 'dark' : 'light';
};

export const setTheme = (theme: 'light' | 'dark') => {
  localStorage.setItem(KEYS.THEME, theme);
};
