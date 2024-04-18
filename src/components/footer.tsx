import {
	ArrowRight,
	Book,
	CastleIcon,
	Contact,
	Facebook,
	Globe,
	HandHeart,
	Home,
	InstagramIcon,
	LinkedinIcon,
	List,
	Mail,
	Network,
	Store,
	UserPlus,
	Users,
	YoutubeIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	const social = [
		{
			icon: <Facebook />,
			name: 'facebook',
			link: '/',
		},
		{
			icon: <InstagramIcon />,
			name: 'instagram',
			link: '/',
		},
		{
			icon: <YoutubeIcon />,
			name: 'youtube',
			link: '/',
		},
		{
			icon: <LinkedinIcon />,
			name: 'linkedin',
			link: '/',
		},
	];

	const programs = [
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
	];
	return (
		<>
			<footer className="bg-primary-foreground dark:bg-primary px-3 md:px-20 text-white">
				<div className="mx-auto w-full py-6 lg:py-8 flex justify-between flex-col-reverse md:flex-row">
					<div className="mt-10 border-t-4 border-white md:mt-0 md:border-0">
						<div className="pt-5 md:pt-0">
							<Image
								src="/images/EMERGE-LOGO3.png"
								width={150}
								height={150}
								alt="Logo"
								className="mx-auto md:mx-0"
							/>
						</div>
						<p className="font-bold mt-8 ">Contact Address</p>
						<div className="flex mt-5 gap-2">
							<span>
								<Globe />
							</span>
							<p className="">Enugu, Nigeria</p>
						</div>
						<div className="flex mt-3 gap-2">
							<span>
								<Mail />
							</span>
							<p className="">programs@emergeafrica.org</p>
						</div>
						<p className="font-bold my-5 ">Social Network</p>
						<div className="sm:flex sm:items-center sm:justify-between">
							<div className="flex my-6 text-2xl space-x-5 lg:justify-center sm:mt-0">
								{social.map((e, i) => (
									<Link
										key={i}
										href={e.link}
										className="hover:text-primary"
									>
										{e.icon}
									</Link>
								))}
							</div>
						</div>
					</div>

					<div className="">
						<h2 className="my-6 font-semibold uppercase">
							Emerge Africa
						</h2>
						<ul className="font-medium">
							<li className="text-normal">
								<Link
									href={'/about'}
									className="flex gap-3 hover:text-primary"
								>
									<Users />
									About Us
								</Link>
							</li>
							<li className="text-normal">
								<Link
									href={''}
									className="flex gap-3 hover:text-primary my-4"
								>
									<Contact />
									Contact Us
								</Link>
							</li>
							<li className="text-normal">
								<Link
									href={''}
									className="flex gap-3 hover:text-primary"
								>
									<UserPlus />
									Join Us
								</Link>
							</li>
						</ul>
					</div>
					<div className="">
						<h2 className="my-6 font-semibold uppercase">
							Programs
						</h2>
						<ul className="font-medium">
							{programs.map((e, i) => (
								<li className="my-4" key={i}>
									<Link
										href={e.link}
										className="flex gap-3 hover:text-primary"
									>
										<span>{e.icon}</span>
										{e.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="">
						<h2 className="my-6 font-semibold  uppercase dark:">
							Resources
						</h2>
						<ul className="">
							<li className="text-normal my-4">
								<Link
									href={''}
									className="flex gap-4 hover:text-primary"
								>
									<Book /> E-Bronchure
								</Link>
							</li>
							<li className=" text-normal">
								<Link
									href={''}
									className="flex gap-4 hover:text-primary"
								>
									<HandHeart /> Testimonial
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="my-6 text-normal font-semibold  uppercase">
							More about emerge africa
						</h2>
						<ul className="font-medium">
							<li className="text-normal my-4">
								<Link
									href={''}
									className="flex gap-4 hover:text-primary"
								>
									<CastleIcon /> Mission
								</Link>
							</li>
							<li className="mt-3  text-normal">
								<Link
									href="faculty.html"
									className="flex gap-4 hover:text-primary"
								>
									<Globe /> Vision
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
