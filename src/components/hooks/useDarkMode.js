import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

 const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('dark-mode', initialValue);
    useEffect(() => {
            if (value === true){
                document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    },[value]);
    return [value, setValue];
}


export default useDarkMode;