import { Home, Dumbbell, Calendar, BarChart3, BookOpen, Upload, Target } from 'lucide-react';

export const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'workout', label: 'Workout', icon: Calendar },
  { id: 'stats', label: 'Stats', icon: BarChart3 },
  { id: 'targets', label: 'Targets', icon: Target },
  { id: 'exercises', label: 'Exercises', icon: Dumbbell },
  { id: 'templates', label: 'Templates', icon: BookOpen },
  { id: 'import', label: 'Import', icon: Upload }
] as const;

export type TabId = (typeof TABS)[number]['id'];
