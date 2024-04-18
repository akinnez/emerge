'use client';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

function GeneralLayout({children}: {children: any}) {
	return (
		<>
			<Navbar />
			<main className="px-3 xl:px-10">{children}</main>
			<Footer />
		</>
	);
}

export default GeneralLayout;
