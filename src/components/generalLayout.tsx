'use client';
import Navbar from './navbar';

function GeneralLayout({children}: {children: any}) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}

export default GeneralLayout;
