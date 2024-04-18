import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
	Menu,
	Users,
	XCircle,
	Contact,
	Globe,
	Store,
	Home,
	Network,
	ArrowRight,
	List,
} from 'lucide-react';
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
			label: `Who We Are`,
			dropdownMenu: [
				{
					label: `About Us`,
					link: `/`,
					icon: <Users />,
				},
				{
					label: `Contact Us`,
					link: `/`,
					icon: <Contact />,
				},
			],
		},
		{
			label: `Our Programmes`,
			dropdownMenu: [
				{
					label: `SheWrites Conference`,
					link: `/`,
					icon: <Globe />,
				},
				{
					label: `Emerge Story labs`,
					link: `/`,
					icon: <Store />,
				},
				{
					label: `Residency`,
					link: `/`,
					icon: <Home />,
				},
				{
					label: `NextGen`,
					link: `/`,
					icon: <ArrowRight />,
				},
				{
					label: `Masterclasses`,
					link: `/`,
					icon: <List />,
				},
				{
					label: `SDG8`,
					link: `/`,
					icon: <Network />,
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
				<Button size={`lg`}>Join Us</Button>
			</header>
		</>
	);
}

export default Navbar;
