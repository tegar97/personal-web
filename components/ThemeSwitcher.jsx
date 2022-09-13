import useTheme from '@/libs/hooks/useTheme';
import { IconDeviceDesktop, IconMoonStars, IconSun } from '@tabler/icons';
import clsx from 'clsx';
import styles from '@/components/styles';

export function ThemeSwitcher() {
    let [setting, setSetting] = useTheme('system');

    function onChange() {
        if (setting === 'light') {
            setSetting('dark');
        }
        if (setting === 'dark') {
            setSetting('light');
        }

        if (setting == 'dark') {
            setSetting('system');
        }

        if (setting == 'system') {
            setSetting('light');
        }
    }
    return (
        <button
            onClick={onChange}
            type='button'
            className={clsx(
                styles.flexCenter,
                'h-8 w-8 rounded-full bg-white shadow dark:bg-gray-700 dark:text-white dark:shadow-pink-500/20'
            )}
        >
            <span>
                {setting === 'dark' ? (
                    <IconMoonStars stroke={1} className='h-5 w-5' />
                ) : setting === 'light' ? (
                    <IconSun stroke={1} className='h-5 w-5' />
                ) : (
                    <IconDeviceDesktop stroke={1} className='h-5 w-5' />
                )}
            </span>
        </button>
    );
}
