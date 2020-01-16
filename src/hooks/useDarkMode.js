import { useLocalStorage, useEffect } from './useLocalStorage';

export const useDarkMode = key => {
	const [
		value,
		setValue,
	] = useLocalStorage(key);

	useEffect(() => {
		if (useLocalStorage) {
			document.body.className = 'dark-mode';
		}
		else {
			document.body.className = '';
		}
    }, []);
    return [
        value, setValue
    ]
};
