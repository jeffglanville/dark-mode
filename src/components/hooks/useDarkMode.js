import {useEffect} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode');
    useEffect(() => {
        const toggleMode = () => {
            if (value === 'dark-mode'){
                setValue('light')
        }else {
            setValue('dark-mode')
        }
    }
    });
}



