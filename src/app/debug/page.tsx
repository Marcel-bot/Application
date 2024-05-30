'use client';

import Console from '@/components/Console';

export default function Debug() {
	return (
		<main className='flex gap-6 items-stretch grow flex-col md:flex-row'>
			<Console
				execute={() => 1}
				className='grow basis-0'
				title={'test'}
				input={'$'}
			></Console>
			<div className='grow basis-0 gap-6 flex flex-col'>
				<Console
					execute={() => 1}
					className='grow basis-0'
					title={'test'}
					input={'$'}
				></Console>
				<Console
					execute={() => 1}
					className='grow basis-0'
					title={'test'}
					input={'$'}
				></Console>
			</div>
			<Console
				execute={() => 1}
				className='grow basis-0'
				title={'test'}
				input={'$'}
			></Console>
		</main>
	);
}
