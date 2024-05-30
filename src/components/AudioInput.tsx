'use client';

import { useEffect, useRef } from 'react';

function useAudioInput() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		async function setupMicrophone() {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

			const audioContext = new (window.AudioContext ||
				// @ts-ignore
				window.webkitAudioContext)();
			const source = audioContext.createMediaStreamSource(stream);
			const analyser = audioContext.createAnalyser();

			analyser.fftSize = 2048;
			const bufferLength = analyser.frequencyBinCount;
			const dataArray = new Uint8Array(bufferLength);

			source.connect(analyser);

			const visualizer = ref.current!;
			const numberOfBars = 16;
			const barIndexes = Array.from({ length: numberOfBars }, (_, i) =>
				Math.floor(i * (bufferLength / numberOfBars))
			);

			function createBars() {
				visualizer.innerHTML = '';

				for (let i = 0; i < numberOfBars; i++) {
					const bar = document.createElement('div');
					bar.classList.add('audio-bar');
					visualizer.appendChild(bar);
				}
			}

			function draw() {
				requestAnimationFrame(draw);

				analyser.getByteFrequencyData(dataArray);

				const bars: HTMLCollectionOf<Element> =
					visualizer.getElementsByClassName('audio-bar');
				for (let i = 0; i < numberOfBars; i++) {
					const bar: Element = bars[i];
					const height = (dataArray[barIndexes[i]] / 255) * 100;
					(bar as HTMLDivElement).style.height =
						Math.min(height * 2, 100) + '%';
				}
			}

			createBars();
			draw();
		}

		void setupMicrophone();
	}, []);

	return ref;
}

export default function AudioInput() {
	const ref = useAudioInput();

	return (
		<div ref={ref} className='flex h-10 items-center justify-between'></div>
	);
}
