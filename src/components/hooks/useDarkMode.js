import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if(value === true) {
            window.localStorage.setItem('dark-mode');
        }else {
            window.localStorage.removeItem('dark-mode');
        }
    })

    return [key, initialValue]
}