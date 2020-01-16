import {useEffect} from 'react'
import { useLocalStorage} from './useLocalStorage';

export const useDarkMode = key => {
	const [
		value,
		setValue,
	] = useLocalStorage(key);

	useEffect(() => {
		if (value) {
			document.body.className = 'dark-mode';
		}
		else {
			document.body.className = !'dark-mode';
		}
    }, [value]);
    return [
        value, setValue
    ]
};
