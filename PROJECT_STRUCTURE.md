# Workout Tracker - Project Structure

## File Tree

```
fitness-workout-tracker/
├── public/
│   ├── favicon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── apple-touch-icon.svg
│   └── masked-icon.svg
├── src/
│   ├── components/
│   │   ├── BarChart.tsx                    # Reusable bar chart component
│   │   ├── Dashboard.tsx                   # Main dashboard with today's status and recent activity
│   │   ├── DurationInput.tsx               # Specialized input for time-based exercises
│   │   ├── ExerciseConsistencyChart.tsx    # Chart visualization for consistency metrics
│   │   ├── ExerciseConsistencyComparison.tsx # Comparative view for consistency data
│   │   ├── ExerciseList.tsx                # Exercise management (CRUD operations)
│   │   ├── Header.tsx                      # App header component
│   │   ├── ImportExport.tsx                # CSV import/export functionality
│   │   ├── Navigation.tsx                  # Bottom navigation bar
│   │   ├── PieChart.tsx                    # Reusable pie chart component
│   │   ├── Stats.tsx                       # Statistics and analytics dashboard
│   │   ├── StatsSummaryCard.tsx            # Shareable summary card for workout stats
│   │   ├── Targets.tsx                     # Workout targets/goals management
│   │   ├── TemplateManager.tsx             # Workout template creation and management
│   │   └── WorkoutLogger.tsx               # Main workout logging interface
│   ├── constants/
│   │   └── navigation.ts                   # Navigation configuration and tab definitions
│   ├── data/
│   │   └── defaultExercises.ts             # Default exercise data
│   ├── hooks/
│   │   ├── useExerciseConsistencyData.ts   # Hook for calculating consistency metrics
│   │   ├── useLocalStorage.ts              # Custom hook for persistent storage
│   │   └── useUiScale.ts                   # Hook for managing global UI scaling
│   ├── types/
│   │   ├── index.ts                        # Core type definitions
│   │   └── statsTypes.ts                   # Type definitions for statistics
│   ├── utils/
│   │   ├── csvExport.ts                    # CSV export utilities
│   │   ├── csvImport.ts                    # CSV import and parsing utilities
│   │   ├── dataUtils.ts                    # General data manipulation utilities
│   │   ├── dateUtils.ts                    # Date formatting and manipulation
│   │   ├── draftWorkoutUtils.ts            # Utilities for handling draft workouts
│   │   ├── durationUtils.ts                # Time duration formatting and calculation
│   │   ├── formatUtils.ts                  # General formatting helpers
│   │   └── maxRepUtils.ts                  # Max/average rep calculation utilities
│   ├── App.tsx                             # Main application component
│   ├── index.css                           # Global CSS with Tailwind imports
│   ├── main.tsx                            # Application entry point
│   └── vite-env.d.ts                       # Vite environment type definitions
├── .gitignore                              # Git ignore rules
├── .bolt/                                  # Bolt configuration files
│   ├── config.json
│   └── prompt
├── eslint.config.js                        # ESLint configuration
├── index.html                              # Main HTML template
├── package.json                            # Project dependencies and scripts
├── package-lock.json                       # Locked dependency versions
├── postcss.config.js                       # PostCSS configuration
├── README.md                               # Project documentation
├── tailwind.config.js                      # Tailwind CSS configuration
├── tsconfig.app.json                       # TypeScript config for app
├── tsconfig.json                           # Main TypeScript configuration
├── tsconfig.node.json                      # TypeScript config for Node.js
└── vite.config.ts                          # Vite build configuration with PWA
```

## Component Overview

### Core Components

- **App.tsx**: Main application state management, routing, and UI scaling provider
- **Navigation.tsx**: Bottom navigation integration using `constants/navigation.ts`

### Feature Components

- **Dashboard.tsx**: Home screen showing training percentages, today's workout status, and recent activity (including workout durations)
- **WorkoutLogger.tsx**: Primary workout interface with exercise selection, set logging (reps/time), and template integration
- **ExerciseList.tsx**: Exercise management with category filtering and CRUD operations
- **Stats.tsx**: Comprehensive analytics including training percentages, exercise comparisons, consistency charts, and progress tracking
- **Targets.tsx**: Goal setting and progress tracking for workout targets
- **TemplateManager.tsx**: Create, edit, and use workout templates
- **ImportExport.tsx**: CSV import/export functionality with data management tools and reset options

### Visualization Components

- **BarChart.tsx**: Generic bar chart component for displaying categorical data
- **PieChart.tsx**: Generic pie chart component for distribution data
- **ExerciseConsistencyChart.tsx**: Visualizes workout consistency over time
- **StatsSummaryCard.tsx**: A formatted summary card of statistics designed for sharing

### Form Components

- **DurationInput.tsx**: Specialized input component for handling time-based exercise inputs (MM:SS)

### Utility Modules

- **csvExport.ts**: Export workouts, exercises, and targets to CSV format (includes summary exports)
- **csvImport.ts**: Parse and import CSV data with validation
- **dateUtils.ts**: Date formatting, comparison, and helper functions
- **durationUtils.ts**: Utilities for converting, formatting, and calculating time durations
- **maxRepUtils.ts**: Calculate max reps/time and averages for exercise tracking (supports rolling windows)
- **draftWorkoutUtils.ts**: Logic for managing unsaved workout drafts

### Hooks

- **useLocalStorage.ts**: Custom React hook for persistent data storage
- **useUiScale.ts**: Manages the application's UI scaling factor
- **useExerciseConsistencyData.ts**: Encapsulates logic for deriving consistency stats from workout history

## Key Features

1. **Exercise Management**: Create, edit, delete exercises with 8 predefined categories
2. **Workout Logging**: Log sets (reps or duration) with real-time max/average display (3-month rolling window)
3. **Template System**: Save and reuse workout routines
4. **Target Tracking**: Set and monitor workout goals (weekly/monthly/yearly)
5. **Statistics Dashboard**: 
   - Training percentages
   - Monthly/Yearly consistency
   - Exercise progress charts
   - Category breakdown
6. **Data Import/Export**: CSV support for detailed data and summaries
7. **UI Scaling**: Adjustable interface size for better accessibility
8. **PWA Support**: Installable web app with offline capabilities
9. **Responsive Design**: Mobile-first design with Solarized color scheme

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom Solarized theme
- **Build Tool**: Vite
- **PWA**: vite-plugin-pwa
- **Icons**: Lucide React
- **Storage**: localStorage with custom hooks
- **Linting**: ESLint with TypeScript support

## Color Palette

Custom category colors (Solarized-inspired):
- Abs: #FFE6A9 (light yellow)
- Arms: #9EC6F3 (light blue)
- Back: #898AC4 (purple-blue)
- Shoulders: #E5E0D8 (light beige)
- Chest: #D1D8BE (moss grey)
- Cardio: #819A91 (green-teal)
- Legs: #A7C1A8 (sage green)
- Full Body: #E5989B (dusty rose)