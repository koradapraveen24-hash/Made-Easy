# 🏗️ Technical Architecture - Student Learning Portal

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser Application                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌────────────────────────────────────────────────────┐    │
│  │              React Application Layer                │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │         App.tsx (Root Component)              │  │    │
│  │  │  - ThemeProvider (Dark/Light Mode)           │  │    │
│  │  │  - AuthProvider (User Session)               │  │    │
│  │  │  - RouterProvider (Navigation)               │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  │                                                      │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │              Routing Layer                    │  │    │
│  │  │  - React Router 7 (BrowserRouter)            │  │    │
│  │  │  - Page Components                           │  │    │
│  │  │  - Protected Routes                          │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  │                                                      │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │           Component Layer                     │  │    │
│  │  │  - Layout (Header, Footer)                   │  │    │
│  │  │  - SubjectCard, LessonCard                   │  │    │
│  │  │  - SearchBar, LoadingSpinner                 │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌────────────────────────────────────────────────────┐    │
│  │              State Management Layer                 │    │
│  │  - React Context API                               │    │
│  │  - AuthContext (User, Login, Logout)              │    │
│  │  - ThemeContext (Dark/Light)                       │    │
│  │  - Component State (useState, useEffect)           │    │
│  └────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Data Persistence Layer                 │    │
│  │  - LocalStorage API                                │    │
│  │  - Storage Utilities (storage.ts)                  │    │
│  │  - CRUD Operations                                 │    │
│  └────────────────────────────────────────────────────┘    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend Framework
```yaml
React: 18.3.1
  - Functional Components
  - Hooks (useState, useEffect, useContext)
  - Custom Hooks (useAuth, useTheme)
  - JSX/TSX syntax

TypeScript: Latest
  - Strict type checking
  - Interface definitions
  - Type safety
  - Better IDE support
```

### Styling
```yaml
Tailwind CSS: 4.1.12
  - Utility-first CSS
  - Dark mode support
  - Custom theme tokens
  - Responsive design utilities
  - JIT (Just-In-Time) compilation

Custom CSS:
  - /src/styles/theme.css (theme variables)
  - /src/styles/fonts.css (typography)
```

### Routing
```yaml
React Router: 7.13.0
  - BrowserRouter
  - Route definitions
  - Link components
  - useNavigate hook
  - useParams hook
  - Protected routes
```

### UI Libraries
```yaml
Lucide React: 0.487.0
  - Icon components
  - Consistent design
  - Tree-shakeable

Motion (motion/react): 12.23.24
  - Animations
  - Transitions
  - Gesture handling
  - Layout animations
```

### Build Tools
```yaml
Vite: 6.3.5
  - Fast HMR (Hot Module Replacement)
  - Optimized builds
  - ESM support
  - Plugin ecosystem
```

## Data Flow Architecture

### Authentication Flow
```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       │ Login/Signup
       ▼
┌──────────────────┐
│  AuthContext     │
│  - login()       │
│  - signup()      │
│  - logout()      │
└────────┬─────────┘
         │
         │ Validate
         ▼
┌──────────────────┐
│  storage.ts      │
│  - getUsers()    │
│  - saveUser()    │
│  - getCurrentU() │
└────────┬─────────┘
         │
         │ Store/Retrieve
         ▼
┌──────────────────┐
│  localStorage    │
│  'slp_users'     │
│  'slp_current_user'│
└──────────────────┘
```

### Data CRUD Flow
```
┌─────────────┐
│  Component  │
└──────┬──────┘
       │
       │ Call function
       ▼
┌──────────────────┐
│  storage.ts      │
│  - getLessons()  │
│  - addLesson()   │
│  - deleteLesson()│
└────────┬─────────┘
         │
         │ Read/Write
         ▼
┌──────────────────┐
│  localStorage    │
│  Key-Value Store │
└────────┬─────────┘
         │
         │ Parse JSON
         ▼
┌──────────────────┐
│  Application     │
│  State Update    │
└──────────────────┘
```

### Bookmark Flow
```
User clicks bookmark
       │
       ▼
LessonCard.handleBookmark()
       │
       ▼
toggleBookmark(userId, lessonId)
       │
       ├─ Check if exists
       │  ├─ Yes → Remove
       │  └─ No → Add
       │
       ▼
Update localStorage
       │
       ▼
setBookmarked(!bookmarked)
       │
       ▼
UI updates immediately
```

## Component Architecture

### Layout Component (HOC Pattern)
```tsx
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   │   ├── Login/Signup (if not logged in)
│   │   └── User Menu (if logged in)
│   ├── Theme Toggle
│   └── Mobile Menu
├── Main Content (children)
└── Footer
```

### Page Components
```tsx
Home
├── Hero Section
├── Search Bar
├── Recently Viewed (conditional)
│   └── LessonCard[] (map)
├── Subject Grid
│   └── SubjectCard[] (map)
└── Stats Section

SubjectPage
├── Back Button
├── Subject Header
├── Search Bar
└── Lesson List
    └── LessonCard[] (map)

Profile
├── User Info Header
└── Bookmarked Lessons
    └── LessonCard[] (map)

AdminPanel
├── Admin Header
├── Stats Cards
├── Add Lesson Form
└── Lessons by Subject
    └── Lesson Items with Delete
```

## State Management Strategy

### Global State (Context)
```typescript
// AuthContext
- user: User | null
- login: (email, password) => Promise<boolean>
- signup: (email, password, name) => Promise<boolean>
- logout: () => void
- isAdmin: boolean

// ThemeContext
- theme: 'light' | 'dark'
- toggleTheme: () => void
```

### Local State (Component)
```typescript
// Typical component state
- [data, setData] = useState<Type>()
- [loading, setLoading] = useState(false)
- [error, setError] = useState('')
- [searchQuery, setSearchQuery] = useState('')
```

### Derived State (useMemo)
```typescript
const filteredLessons = useMemo(() => {
  if (!searchQuery) return lessons;
  return lessons.filter(l => 
    l.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [lessons, searchQuery]);
```

## Data Models

### TypeScript Interfaces
```typescript
interface User {
  id: string;              // Unique identifier
  email: string;           // User email (unique)
  name: string;            // Display name
  role: 'student' | 'admin'; // Access level
  createdAt: string;       // ISO timestamp
}

interface Subject {
  id: string;              // Subject identifier
  name: string;            // Display name
  description: string;     // Brief description
  icon: string;            // Lucide icon name
  color: string;           // Tailwind color class
  lessonCount: number;     // Number of lessons
}

interface Lesson {
  id: string;              // Lesson identifier
  title: string;           // Lesson title
  description: string;     // Lesson description
  pdfUrl: string;          // PDF file URL
  subjectId: string;       // Parent subject
  order: number;           // Display order
  createdAt: string;       // ISO timestamp
  thumbnailUrl?: string;   // Optional thumbnail
}

interface Bookmark {
  userId: string;          // User who bookmarked
  lessonId: string;        // Bookmarked lesson
  createdAt: string;       // When bookmarked
}

interface RecentlyViewed {
  userId: string;          // User who viewed
  lessonId: string;        // Viewed lesson
  viewedAt: string;        // When viewed
}
```

## Storage Architecture

### LocalStorage Schema
```json
{
  "slp_users": [
    {
      "id": "user-1",
      "email": "admin@student-portal.com",
      "name": "Admin User",
      "role": "admin",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "slp_current_user": {
    "id": "user-1",
    "email": "admin@student-portal.com",
    "name": "Admin User",
    "role": "admin",
    "createdAt": "2024-01-01T00:00:00Z"
  },
  "slp_subjects": [...],
  "slp_lessons": [...],
  "slp_bookmarks": [...],
  "slp_recently_viewed": [...],
  "slp_theme": "dark"
}
```

### Storage Operations
```typescript
// Read operations (GET)
getUsers(): User[]
getCurrentUser(): User | null
getSubjects(): Subject[]
getLessons(): Lesson[]
getLessonsBySubject(id: string): Lesson[]
getBookmarks(): Bookmark[]
getUserBookmarks(userId: string): Bookmark[]
getRecentlyViewed(): RecentlyViewed[]

// Write operations (POST/PUT)
saveUser(user: User): void
setCurrentUser(user: User | null): void
saveSubjects(subjects: Subject[]): void
saveLessons(lessons: Lesson[]): void
addLesson(lesson: Lesson): void
toggleBookmark(userId: string, lessonId: string): void
addRecentlyViewed(userId: string, lessonId: string): void

// Delete operations (DELETE)
deleteLesson(lessonId: string): void

// Utility operations
isBookmarked(userId: string, lessonId: string): boolean
initializeStorage(): void
```

## Routing Architecture

### Route Configuration
```typescript
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    // Layout + Home page
  },
  {
    path: '/subject/:subjectId',
    element: <Layout><SubjectPage /></Layout>
    // Dynamic subject pages
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>
    // Public authentication
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>
    // Public registration
  },
  {
    path: '/profile',
    element: <Layout><Profile /></Layout>
    // Protected: requires auth
  },
  {
    path: '/admin',
    element: <Layout><AdminPanel /></Layout>
    // Protected: requires admin role
  },
  {
    path: '*',
    element: <Layout><NotFound /></Layout>
    // 404 catch-all
  }
]);
```

### Route Protection
```typescript
// In component
const { user, isAdmin } = useAuth();

// Redirect if not authenticated
if (!user) {
  return <Navigate to="/login" />;
}

// Redirect if not admin
if (!isAdmin) {
  return <Navigate to="/" />;
}
```

## Animation Strategy

### Motion Components
```typescript
// Entrance animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>

// Staggered animations
transition={{ delay: index * 0.1 }}

// Exit animations
<AnimatePresence>
  {show && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
  )}
</AnimatePresence>

// Hover states
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## Performance Optimizations

### Implemented
```typescript
// 1. Memoized computations
const filtered = useMemo(() => {...}, [deps]);

// 2. Lazy initial state
const [state] = useState(() => expensiveComputation());

// 3. Conditional rendering
{user && <Component />}

// 4. Key props for lists
{items.map(item => <Card key={item.id} />)}
```

### Future Optimizations
```typescript
// 1. Code splitting
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

// 2. Virtual scrolling (for long lists)
import { FixedSizeList } from 'react-window';

// 3. Image lazy loading
loading="lazy"

// 4. Debounced search
const debouncedSearch = useDebounce(searchQuery, 300);

// 5. React Query (for API caching)
const { data } = useQuery('lessons', fetchLessons);
```

## Error Handling

### Current Implementation
```typescript
// Try-catch in async functions
try {
  const success = await login(email, password);
  if (success) navigate('/');
} catch (err) {
  setError('An error occurred');
} finally {
  setIsLoading(false);
}

// Conditional error display
{error && (
  <div className="error-message">
    {error}
  </div>
)}
```

### Future Enhancements
```typescript
// Error boundaries
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    logError(error, info);
  }
}

// Global error handler
window.addEventListener('unhandledrejection', handleError);

// Validation schemas (Zod)
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
```

## Security Considerations

### Current (Demo)
```typescript
// ⚠️ NOT PRODUCTION READY
// - No password hashing
// - Client-side only validation
// - No rate limiting
// - No CSRF protection
```

### Production Requirements
```typescript
// 1. Backend authentication
POST /api/auth/login
  - Hash password (bcrypt)
  - Generate JWT token
  - Set HTTP-only cookie

// 2. API validation
  - Joi/Zod schemas
  - Sanitize inputs
  - Rate limiting

// 3. HTTPS only
  - Force SSL
  - Secure cookies
  - HSTS headers

// 4. CSRF protection
  - CSRF tokens
  - SameSite cookies

// 5. XSS prevention
  - Content Security Policy
  - Sanitize user input
  - Escape output
```

## Build & Deployment

### Development
```bash
npm run dev
# Vite dev server on http://localhost:5173
# Hot Module Replacement (HMR)
# Fast refresh
```

### Production Build
```bash
npm run build
# Output: /dist folder
# Minified JS/CSS
# Optimized assets
# Source maps
```

### Deployment Targets
```yaml
Static Hosts:
  - Vercel (recommended)
  - Netlify
  - GitHub Pages
  - Cloudflare Pages

With Backend:
  - Vercel + Supabase
  - Netlify + Firebase
  - AWS Amplify
  - Custom VPS
```

## Testing Strategy (Future)

### Unit Tests
```typescript
// Component tests (Vitest + Testing Library)
describe('LessonCard', () => {
  it('renders lesson title', () => {
    render(<LessonCard lesson={mockLesson} />);
    expect(screen.getByText('Lesson Title')).toBeInTheDocument();
  });
});
```

### Integration Tests
```typescript
// User flow tests
test('user can bookmark a lesson', async () => {
  // Login
  // Navigate to subject
  // Click bookmark
  // Check localStorage
  // Verify UI update
});
```

### E2E Tests
```typescript
// Playwright/Cypress
test('complete learning flow', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Mathematics');
  await page.click('text=Algebra');
  // ...
});
```

## Monitoring & Analytics (Future)

### Error Tracking
```typescript
// Sentry integration
Sentry.init({
  dsn: 'YOUR_DSN',
  environment: 'production'
});
```

### Analytics
```typescript
// Google Analytics / Plausible
gtag('event', 'pdf_view', {
  lesson_id: lesson.id,
  subject: subject.name
});
```

### Performance Monitoring
```typescript
// Web Vitals
import { getCLS, getFID, getFCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
```

## Scalability Roadmap

### Phase 1: Current (Demo)
- ✅ LocalStorage persistence
- ✅ Client-side routing
- ✅ Static content
- ✅ No backend

### Phase 2: Basic Backend
- 🔲 Supabase integration
- 🔲 Real authentication
- 🔲 Database storage
- 🔲 File uploads

### Phase 3: Advanced Features
- 🔲 Progress tracking
- 🔲 Quiz system
- 🔲 Discussion forums
- 🔲 Video lessons

### Phase 4: Scale
- 🔲 CDN integration
- 🔲 Caching layer
- 🔲 API optimization
- 🔲 Microservices

---

## Summary

This architecture provides a **solid foundation** for a modern educational platform. The modular design allows for easy extension and migration to a full-stack solution when needed.

**Key Strengths:**
- ✅ Type-safe with TypeScript
- ✅ Component-based architecture
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Dark mode support
- ✅ Clean code organization

**Next Steps for Production:**
- 🎯 Add backend (Supabase/Firebase)
- 🎯 Implement real file uploads
- 🎯 Add authentication security
- 🎯 Set up CI/CD pipeline
- 🎯 Add monitoring/analytics
- 🎯 Write comprehensive tests

---

**Built with modern best practices for educational web applications.**
