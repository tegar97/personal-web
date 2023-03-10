import { useIsomorphicLayoutEffect } from '@/libs/hooks/useIsomorphicLayoutEffect';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

function update(): void {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark', 'changing-theme');
    } else {
        document.documentElement.classList.remove('dark', 'changing-theme');
    }
    window.setTimeout(() => {
        document.documentElement.classList.remove('changing-theme');
    });
}

function useTheme(
    system: string
): (
    | string
    | React.SetStateAction<any>
    | ((value: ((prevState: string) => string) | string) => void)
)[] {
    let [setting, setSetting] = useState('system');
    let initial = useRef(true);

    useIsomorphicLayoutEffect(() => {
        let theme = localStorage.theme;
        if (theme === 'light' || theme === 'dark') {
            setSetting(theme);
        }
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (setting === 'system') {
            localStorage.removeItem('theme');
        } else if (setting === 'light' || setting === 'dark') {
            localStorage.theme = setting;
        }
        if (initial.current) {
            initial.current = false;
        } else {
            update();
        }
    }, [setting]);

    useEffect(() => {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (mediaQuery?.addEventListener) {
            mediaQuery.addEventListener('change', update);
        } else {
            mediaQuery.addListener(update);
        }

        function onStorage() {
            update();
            let theme = localStorage.theme;
            if (theme === 'light' || theme === 'dark') {
                setSetting(theme);
            } else {
                setSetting('system');
            }
        }

        window.addEventListener('storage', onStorage);

        return () => {
            if (mediaQuery?.removeEventListener) {
                mediaQuery.removeEventListener('change', update);
            } else {
                mediaQuery.removeListener(update);
            }

            window.removeEventListener('storage', onStorage);
        };
    }, []);

    return [setting, setSetting];
}

export default useTheme;
