export function speak(text: string) {
	window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}