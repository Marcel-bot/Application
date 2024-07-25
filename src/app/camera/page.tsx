import Console from '@/components/Console';
import Button from '@/components/Button';

export default function Camera() {
	return (
		<main className='flex gap-6 grow flex-col md:flex-row'>
			<Console className='grow' title={'Camera - online'} icon={'30 fps'}>
				<img
					className='rotate-90'
					src='http://192.168.172.224:81/stream'
					alt='test'
				/>
			</Console>
			<aside className='flex flex-row md:flex-col gap-4'>
				<div className='flex flex-col justify-between grow gap-4'>
					<div className='flex flex-col gap-4'>
						<Button>Change resolution</Button>
						<Button>Change recognition model</Button>
					</div>
					<div className='flex flex-col gap-4'>
						<Button>Capture</Button>
						<Button>Upload image</Button>
					</div>
				</div>
				<Console
					className='grow md:grow-0'
					title={'Camera - online'}
					icon={<i className='fa fa-folder' />}
				>
					<img alt='test' />
				</Console>
			</aside>
		</main>
	);
}
