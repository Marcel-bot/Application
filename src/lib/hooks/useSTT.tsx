import { useEffect, useRef } from 'react';

export default function useSTT() {
	const rec = useRef<any>();

	useEffect(() => {
		if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
			return;
		}

		// @ts-ignore
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();
		recognition.lang = 'en-US';

		recognition.onstart = () => {
			console.log('Voice recognition started. Try speaking into the microphone.');
		};

		recognition.onresult = (event: any) => {
			const transcript = event.results[0][0].transcript;
			console.log('You said: ' + transcript);
		};

		recognition.onerror = (event: any) => {
			console.log('Error occurred in recognition: ' + event.error);
		};

		rec.current = recognition;
	}, []);

	return rec;
}