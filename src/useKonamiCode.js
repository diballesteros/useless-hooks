const KONAMI_CODE = '38,38,40,40,37,39,37,39,66,65';
const KONAMI_KEYS = [
	'38',
	'38',
	'40',
	'40',
	'37',
	'39',
	'37',
	'39',
	'66',
	'65',
];

export default function useKonamiCode({ onKonamiCode }) {
	const [code, setCode] = useState([]);
	const [isKonamiCode, setIsKonamiCode] = useState(false);

	useEffect(() => {
		if (code === KONAMI_CODE) {
			setIsKonamiCode(true);
			setCode([]);
			onKonamiCode();
		}
	}, [code]);

	const handleKeyDown = (e) => {
		if (!KONAMI_KEYS.includes(e.key)) {
			setCode([]);
			return;
		}
		setCode(code + e.keyCode);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return isKonamiCode;
}