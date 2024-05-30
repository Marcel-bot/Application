export default function MessageBox() {
	return (
		<div className='bg-slim-gray flex px-4 py-3 rounded-3xl border border-white/20'>
			<input
				placeholder='Type something here'
				className='grow bg-transparent outline-none'
			/>
		</div>
	);
}
