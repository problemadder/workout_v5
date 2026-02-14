import { useState, useEffect } from 'react';

const STORAGE_KEY = 'uiScale';
const DEFAULT_SCALE = 1;

export function useUiScale() {
    const [scale, setScale] = useState<number>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? parseFloat(saved) : DEFAULT_SCALE;
    });

    useEffect(() => {
        // Apply the scale to the document root
        document.documentElement.style.setProperty('--scale-multiplier', scale.toString());
        localStorage.setItem(STORAGE_KEY, scale.toString());
    }, [scale]);

    return { scale, setScale };
}
