import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Menu, XCircle} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '@/components/dropdown';

function Navbar() {
	const [isOpen, setOpen] = useState(false);
	function open() {
		setOpen(true);
	}
	function close() {
		setOpen(false);
	}
	const navList = [
		{
			label: 'Home',
			link: '/',
		},
		{
			label: `Our Programmes`,
			dropdownMenu: [
				{
					label: `SheWrites Conference`,
					link: `/`,
				},
				{
					label: `Emerge Story labs`,
					link: `/`,
				},
				{
					label: `Residency`,
					link: `/`,
				},
				{
					label: `NextGen`,
					link: `/`,
				},
				{
					label: `Masterclasses`,
					link: `/`,
				},
				{
					label: `SDG8`,
					link: `/`,
				},
			],
		},
		{
			label: `Our Impact`,
			link: `/`,
		},
		{
			label: `What We Do`,
			link: `/`,
		},

		{
			label: `Contact Us`,
			link: '/',
		},
		{
			label: `About Us`,
			link: '/',
		},
	];
	return (
		<>
			<header className="sticky top-0 w-full flex px-3 xl:px-10 lg:justify-between items-center text-foreground shadow-sm shadow-foreground">
				<div className="lg:hidden">
					<Button variant={'outline'} onClick={() => open()}>
						<Menu></Menu>
					</Button>
				</div>
				<Link
					href={'/'}
					className="text-2xl w-full lg:w-auto flex justify-center lg:flex-none lg:justify-start lg:text-3xl tracking-wider cursor-pointer"
				>
					<Image
						src={'/images/EMERGE-LOGO3.png'}
						width={90}
						layout="fixed"
						objectFit="contain"
						height={90}
						alt={'logo'}
					/>
				</Link>

				<nav
					className={`fixed lg:static top-0 z-10 flex-col min-w-[300px] lg:w-full h-screen lg:h-full justify-start flex lg:flex-row lg:justify-center items-center ${
						isOpen
							? 'left-0 bg-foreground transition-all duration-500 ease-linear lg:bg-white py-40 lg:py-0'
							: '-left-[100%] lg:left-0'
					}`}
				>
					<Button
						className="absolute top-4 right-0 mx-5 lg:hidden"
						onClick={() => close()}
					>
						<XCircle></XCircle>
					</Button>

					{navList.map((e, i) => (
						<div
							key={i}
							className={`text-white hover:text-primary-foreground lg:text-foreground lg:px-0 px-6 w-full lg:w-auto text-lg font-medium rounded-md lg:text-xl hover:cursor-pointer m-3 xl:m-6`}
						>
							{e?.link ? (
								<Link href={e.link}>{e.label}</Link>
							) : (
								<Dropdown
									dropdownMenu={
										e.dropdownMenu as Array<object>
									}
									label={e.label}
								/>
							)}
						</div>
					))}
				</nav>
				<Button className="font-semibold" size={`lg`}>
					Join Us
				</Button>
			</header>
		</>
	);
}

export default Navbar;
