'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ViewportHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Déplacer la logique viewport dans useEffect pour éviter l'hydration mismatch
        const updateHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [pathname]);

    return null;
}