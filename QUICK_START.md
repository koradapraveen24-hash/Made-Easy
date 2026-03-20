# 🚀 Quick Start Guide - Student Learning Portal

## ⚡ Instant Access

The application is **already running** in your browser. No setup needed!

## 🔑 Demo Login Credentials

```
Email: admin@student-portal.com
Password: <any password works>
Role: Admin (full access)
```

## 📋 Main Features at a Glance

### 1️⃣ Browse Subjects (Homepage)
- **6 subjects** available: Math, Physics, CS, Chemistry, Biology, English
- **55+ lessons** total across all subjects
- **Search bar** to filter subjects
- **Recently viewed** section (when logged in)

### 2️⃣ View Lessons (Subject Page)
- Click any subject card to see its lessons
- Each lesson has:
  - 📄 View PDF button (opens in new tab)
  - 💾 Download button
  - 🔖 Bookmark toggle (if logged in)
- Search within lessons

### 3️⃣ User Features
#### Without Login:
✅ Browse all subjects
✅ View all lessons
✅ Access PDFs

#### With Login:
✅ All above features
✅ Bookmark lessons
✅ View bookmarks in profile
✅ Track recently viewed lessons

#### Admin Access:
✅ All student features
✅ Access admin panel
✅ Add new lessons
✅ Delete lessons
✅ View statistics

## 🎯 Common Tasks

### Create a New Account
1. Click **"Sign Up"** in header
2. Enter your name, email, and password
3. Confirm password
4. Click **"Create Account"**
5. ✅ Auto-logged in!

### Bookmark a Lesson
1. Login first (or sign up)
2. Browse to any subject
3. Click the **bookmark icon** on a lesson
4. View all bookmarks in **Profile** page

### Add a Lesson (Admin Only)
1. Login as admin
2. Go to **Admin Panel** (header menu)
3. Click **"Add New Lesson"** button
4. Fill in:
   - Subject (dropdown)
   - Lesson title
   - Description
   - PDF URL
5. Click **"Add Lesson"**

### Toggle Dark Mode
- Click the **moon/sun icon** in header
- Theme saves automatically
- Works on all pages

## 🗺️ Page Navigation

| Page | URL | Access |
|------|-----|--------|
| Homepage | `/` | Everyone |
| Subject Page | `/subject/math` | Everyone |
| Login | `/login` | Public |
| Sign Up | `/signup` | Public |
| Profile | `/profile` | Logged in only |
| Admin Panel | `/admin` | Admin only |

## 📱 Responsive Design

### Mobile (< 768px)
- Hamburger menu
- 1 column layout
- Touch-optimized buttons

### Tablet (768px - 1024px)
- 2 column grid
- Expanded navigation

### Desktop (> 1024px)
- 3 column grid
- Full navigation bar

## 🎨 Subject List

| Subject | Icon | Color | Lessons |
|---------|------|-------|---------|
| Mathematics | Calculator | Blue | 8 |
| Physics | Atom | Purple | 6 |
| Computer Science | Code | Green | 10 |
| Chemistry | Flask | Orange | 7 |
| Biology | Microscope | Emerald | 9 |
| English | Book | Red | 5 |

## 💡 Tips & Tricks

### Search Effectively
- Search works on both subject names and descriptions
- Search is case-insensitive
- Results update in real-time

### Manage Bookmarks
- Bookmark icon turns blue when saved
- Remove bookmark by clicking again
- View all in Profile page
- Bookmarks persist across sessions

### Admin Panel
- Stats show total subjects and lessons
- Delete requires confirmation
- Lessons organized by subject
- New lessons appear immediately

### Dark Mode
- Saves your preference
- Applies to all pages
- Smooth transitions
- Easy on the eyes at night

## 🔄 Data Persistence

All data is stored in **browser localStorage**:
- User accounts
- Login sessions
- Bookmarks
- Recently viewed
- Theme preference
- Subjects and lessons

**Note**: Data is local to your browser. Clearing browser data will reset everything.

## ⚠️ Important Notes

### This is a Demo
- No real backend server
- No actual password validation
- PDF links are placeholder examples
- Not production-ready

### For Production Use
Consider adding:
- Real backend (Supabase, Firebase)
- Actual file uploads
- Password encryption
- Email verification
- Payment integration (if needed)

## 🐛 Troubleshooting

### Can't Login?
- Use demo credentials above
- Or create new account via signup
- Password can be anything in demo mode

### Bookmarks Not Saving?
- Make sure you're logged in
- Check if localStorage is enabled
- Not in incognito/private mode

### Dark Mode Not Working?
- Toggle the button in header
- Refresh the page if needed
- Check browser compatibility

### PDFs Not Opening?
- Demo PDFs are placeholders
- Check browser popup settings
- Try download button instead

## 🎓 Next Steps

### As a Student:
1. Create your account
2. Browse subjects of interest
3. Bookmark useful lessons
4. Track your learning progress

### As an Admin:
1. Login with admin credentials
2. Go to Admin Panel
3. Add lessons to subjects
4. Manage existing content

### As a Developer:
1. Explore the code structure
2. Check `/PROJECT_DOCUMENTATION.md`
3. Modify subjects in `/src/app/data/mockData.ts`
4. Customize theme in `/src/styles/theme.css`

## 📚 File Locations

### Key Files:
```
/PROJECT_DOCUMENTATION.md  ← Full documentation
/QUICK_START.md           ← This file
/src/app/App.tsx          ← Main app
/src/app/routes.tsx       ← Page routes
/src/app/data/mockData.ts ← Initial data
/src/app/utils/storage.ts ← Data management
```

### Component Files:
```
/src/app/components/Layout.tsx      ← Main layout
/src/app/components/SubjectCard.tsx ← Subject cards
/src/app/components/LessonCard.tsx  ← Lesson cards
```

### Page Files:
```
/src/app/pages/Home.tsx       ← Homepage
/src/app/pages/SubjectPage.tsx ← Subject detail
/src/app/pages/Login.tsx      ← Login page
/src/app/pages/Signup.tsx     ← Registration
/src/app/pages/Profile.tsx    ← User profile
/src/app/pages/AdminPanel.tsx ← Admin dashboard
```

## ✨ Feature Highlights

### 🎨 Modern UI
- Gradient buttons
- Smooth animations
- Card-based layouts
- Responsive design

### 🔐 Authentication
- Login/Signup system
- Session persistence
- Role-based access
- Protected routes

### 📱 User Experience
- Intuitive navigation
- Search functionality
- Bookmark system
- Recently viewed
- Dark mode

### 👨‍💼 Admin Tools
- Add lessons
- Delete lessons
- View statistics
- Content management

## 🎉 You're Ready!

Start exploring the Student Learning Portal. Browse subjects, bookmark lessons, and enjoy learning!

**Need help?** Check `/PROJECT_DOCUMENTATION.md` for detailed information.

---

**Happy Learning! 📚✨**
