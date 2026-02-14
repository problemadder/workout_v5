/**
 * Formats a number to have at most 1 decimal place.
 * Returns integers without decimal points.
 * @param value - The number to format
 * @returns The formatted number
 */
export function formatSingleDecimal(value: number): number {
  // Round to 1 decimal place
  const rounded = Math.round(value * 10) / 10;
  
  // If it's a whole number, return as is (will display without decimal)
  // Otherwise return with 1 decimal place
  return rounded;
}

/**
 * Formats total seconds into a display-friendly format (HH:MM:SS or MM:SS)
 * @param seconds - Total seconds
 * @returns Formatted display string
 */
export function formatDurationDisplay(seconds: number): string {
  if (seconds < 0) return '00:00';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * Formats a duration string for compact display
 * @param duration - Duration string in MM:SS format
 * @returns Compact display string (e.g., "5:30" or "45s")
 */
export function formatDurationShort(duration: string): string {
  if (!duration) return '';
  
  const [minutes, seconds] = duration.split(':');
  const m = parseInt(minutes, 10);
  const s = parseInt(seconds, 10);
  
  if (m === 0) {
    return `${s}s`;
  }
  
  return `${m}:${seconds}`;
}
