// Type definitions for the Student Learning Portal

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
  createdAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  subjectId: string;
  order: number;
  createdAt: string;
  thumbnailUrl?: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessonCount: number;
}

export interface Bookmark {
  userId: string;
  lessonId: string;
  createdAt: string;
}

export interface RecentlyViewed {
  userId: string;
  lessonId: string;
  viewedAt: string;
}
