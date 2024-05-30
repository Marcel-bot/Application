'use client';

import { ReactNode } from 'react';

interface params {
	title: string;
	clear?: () => void;
	children?: ReactNode;
	execute?: Function;
	icon?: ReactNode;
	input?: string;
	className?: string;
}

export default function Console({
	input,
	title,
	clear,
	children,
	execute,
	icon = <i className='fa fa-circle-x' />,
	className = ''
}: params) {
	function onKeyDown(e: any) {
		if (e.key === 'Enter' && execute) {
			execute(e.target.value);
			console.log(e.target.value);
			e.target.value = '';
		}
	}

	return (
		<div
			className={`bg-slim-gray rounded-[0.5rem] border border-white/20 flex flex-col ${className}`}
		>
			<div className='bg-black/70 rounded-t-[0.5rem] p-3 flex justify-between items-center gap-4'>
				<label className='text-base'>{title}</label>
				<span
					onClick={clear}
					className={`text-base ${clear ? 'cursor-pointer' : ''}`}
				>
					{icon}
				</span>
			</div>
			<div className='p-3 grow'>{children}</div>
			{input && (
				<div className='flex mx-3 py-3 border-t border-t-white/20'>
					<label className='pr-2'>{input}</label>
					<input
						onKeyDown={onKeyDown}
						className='bg-transparent outline-none grow'
					/>
				</div>
			)}
		</div>
	);
}
