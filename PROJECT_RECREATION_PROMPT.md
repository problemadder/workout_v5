# Workout Tracker - Complete Project Recreation Prompt

## Project Overview
Create a comprehensive workout tracking Progressive Web App (PWA) using React, TypeScript, and Tailwind CSS. The app should be a mobile-first fitness tracker that allows users to log workouts, manage exercises, create templates, set targets, view statistics, and import/export data.

## Technology Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom Solarized color theme
- **Build Tool**: Vite
- **PWA**: vite-plugin-pwa for offline capabilities
- **Icons**: Lucide React
- **Storage**: localStorage with custom React hook
- **Linting**: ESLint with TypeScript support

## Color Scheme
Use the Solarized color palette with these custom category colors:
- **Abs**: #FFE6A9 (light yellow)
- **Arms**: #9EC6F3 (light blue)
- **Back**: #898AC4 (purple-blue)
- **Shoulders**: #E5E0D8 (light beige)
- **Chest**: #D1D8BE (moss grey)
- **Cardio**: #819A91 (green-teal)
- **Legs**: #A7C1A8 (sage green)
- **Full Body**: #E5989B (dusty rose)

## Core Data Types
Create TypeScript interfaces for:

### Exercise
```typescript
interface Exercise {
  id: string;
  name: string;
  description?: string;
  category: 'abs' | 'legs' | 'arms' | 'back' | 'shoulders' | 'chest' | 'cardio' | 'full-body';
  createdAt: Date;
}
```

### WorkoutSet
```typescript
interface WorkoutSet {
  id: string;
  exerciseId: string;
  reps: number;
  notes?: string;
}
```

### Workout
```typescript
interface Workout {
  id: string;
  date: Date;
  sets: WorkoutSet[];
  notes?: string;
}
```

### WorkoutTemplate
```typescript
interface WorkoutTemplate {
  id: string;
  name: string;
  exercises: {
    exerciseId: string;
    sets: number;
  }[];
  createdAt: Date;
}
```

### WorkoutTarget
```typescript
interface WorkoutTarget {
  id: string;
  name: string;
  type: 'sets' | 'reps';
  category?: Exercise['category'];
  exerciseId?: string;
  targetValue: number;
  period: 'weekly' | 'monthly' | 'yearly';
  isActive: boolean;
  createdAt: Date;
}
```

## Application Structure

### Main App Component
- Use localStorage hooks for data persistence
- Manage 7 main tabs: Dashboard, Exercises, Templates, Workout, Targets, Stats, Import
- Handle auto-save functionality for pending workouts
- Calculate comprehensive workout statistics

### Navigation Component
Create a fixed bottom navigation with 7 tabs:
1. **Dashboard** (Home icon) - Overview and today's status
2. **Exercises** (Dumbbell icon) - Exercise management
3. **Templates** (BookOpen icon) - Workout templates
4. **Workout** (Calendar icon) - Main workout logging
5. **Targets** (Target icon) - Goal setting and tracking
6. **Stats** (BarChart3 icon) - Analytics and progress
7. **Import** (Upload icon) - Data import/export

### Dashboard Component
Display:
- Training percentages for current week, month, and year
- Today's workout status (completed or not started)
- Recent workout activity (last 5 workouts)
- Quick start workout button
- Last workout information with days ago

Calculate training percentages by counting workout days vs total days in the period.

### Exercise Management Component
Features:
- CRUD operations for exercises
- Category filtering with exercise counts
- Alphabetical sorting
- 8 predefined categories with color coding
- Search and filter functionality
- Responsive card layout

### Workout Logger Component
The main workout interface should include:
- Exercise selection with search and category filtering
- Dynamic set addition with rep tracking
- Exercise grouping by consecutive sets
- Real-time max/average rep display as placeholders
- Template integration (use and save)
- Auto-save functionality
- Notes for workouts
- Responsive design for mobile use

Key features:
- Group consecutive sets of the same exercise together
- Show set numbers within each exercise group
- Display historical max and average reps for each set position
- Allow adding individual sets or multiple sets at once
- Smart exercise selection that auto-updates when filtering

### Template Manager Component
Features:
- Create, edit, delete workout templates
- Exercise selection with set count specification
- Template import/export via CSV
- Use templates to populate workout logger
- Batch template operations

### Target System Component
Implement goal tracking with:
- Target creation for sets or reps
- Weekly, monthly, yearly periods
- Category-based or exercise-specific targets
- Progress calculation and visualization
- Status indicators (completed, on-track, needs attention)
- Progress bars with color coding

### Statistics Dashboard Component
Comprehensive analytics including:
- Training percentages (week, month, year)
- Last 7 days activity visualization
- Exercise year-over-year comparisons
- Yearly training percentage charts
- Monthly training comparison charts
- Max reps over time progression charts
- Sets per category breakdowns
- Most used exercises rankings
- Exercise-specific statistics with filtering

### Import/Export System
CSV functionality for:
- Exercise import/export with templates
- Workout history import/export (detailed and summary)
- Target import/export
- Template import/export
- Data validation and error handling
- App reset functionality

## Key Features to Implement

### 1. Workout Logging
- Mobile-first interface optimized for quick logging
- Exercise search with auto-complete
- Set grouping by exercise
- Real-time statistics display
- Template integration
- Auto-save functionality

### 2. Progress Tracking
- Max rep tracking by set position
- Average rep calculations
- Training frequency percentages
- Streak calculations (current and longest)
- Year-over-year comparisons

### 3. Data Management
- localStorage persistence
- CSV import/export capabilities
- Data validation and error handling
- Backup and restore functionality

### 4. User Experience
- Responsive design (mobile-first)
- Intuitive navigation
- Quick actions and shortcuts
- Visual feedback and animations
- Offline PWA capabilities

## Technical Implementation Details

### localStorage Hook
Create a custom hook for localStorage management:
```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  // Handle JSON serialization/deserialization
  // Error handling for localStorage access
  // Return [value, setValue] tuple
}
```

### Date Utilities
Implement date formatting and comparison functions:
- formatDate() - Full date display
- formatShortDate() - Abbreviated format
- isToday() - Check if date is today
- getDaysAgo() - Calculate days between dates

### Statistics Calculations
- Training percentages for different periods
- Streak calculations
- Max/average rep tracking by set position
- Exercise frequency analysis
- Progress trend calculations

### CSV Processing
Robust CSV import/export with:
- Proper quote handling and escaping
- Header validation and flexible matching
- Error reporting and data validation
- Template generation for user guidance

### PWA Configuration
Set up service worker with:
- Offline functionality
- App manifest for installation
- Icon sets for different platforms
- Caching strategies for assets

## UI/UX Guidelines

### Design Principles
- Mobile-first responsive design
- Clean, minimalist interface
- Consistent color coding for categories
- Intuitive navigation patterns
- Quick access to common actions

### Visual Hierarchy
- Clear section headers with icons
- Consistent spacing (8px grid system)
- Proper contrast ratios for readability
- Visual feedback for user actions
- Loading states and error handling

### Interaction Patterns
- Swipe-friendly mobile interface
- Touch-optimized button sizes
- Contextual actions and shortcuts
- Progressive disclosure of features
- Confirmation for destructive actions

## Data Flow Architecture

### State Management
- Centralized state in main App component
- Props drilling for component communication
- localStorage for persistence
- Auto-save for workout data

### Component Communication
- Parent-child prop passing
- Callback functions for state updates
- Event handling for user interactions
- Data validation at component boundaries

## Performance Considerations
- Lazy loading for large datasets
- Efficient re-rendering with React keys
- Optimized localStorage operations
- Minimal bundle size with tree shaking
- Progressive loading for better UX

## Deployment
- Build optimized production bundle
- Configure PWA manifest and service worker
- Set up Netlify deployment
- Enable offline functionality
- Test across different devices and browsers

## Testing Strategy
- Component functionality testing
- Data persistence validation
- CSV import/export verification
- Cross-browser compatibility
- Mobile responsiveness testing
- PWA installation and offline testing

This prompt provides a complete blueprint for recreating the workout tracker application with all its features, technical specifications, and implementation details.