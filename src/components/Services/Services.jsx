import { BiSupport } from "react-icons/bi";
import { FaFileInvoiceDollar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { PiVignette } from "react-icons/pi";

export default function Services() {
	const services = [
		{
			id: 1,
			title: "Gestion des tiers payants",
			link: "#",
			icon: <FaHandHoldingUsd />,
		},
		{
			id: 2,
			title: "Géstion des Crédits",
			link: "#",
			icon: <FaFileInvoiceDollar />,
		},
		{
			id: 3,
			title: "Gestion des vignettes avancées",
			link: "#",
			icon: <PiVignette />,
		},
		{
			id: 4,
			title: "Satisfaction client",
			link: "#",
			icon: <IoMdHappy />,
		},
		{
			id: 5,
			title: "Assistance",
			link: "#",
			icon: <BiSupport />,
		},
		{
			id: 6,
			title: "Confidentialité",
			link: "#",
			icon: <MdSecurity />,
		},
	];

	return (
		<section className="bg-light min-h-[600px]">
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pt-20">
			{/* Services */}
				<h1 className="text-4xl text-center lg:text-left xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20">
					Nos services
				</h1>
				<div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-mint/20 rounded-2xl  flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-light/90 hover:scale-110 duration-300 hover:shadow-2xl"
						>
							<div className="text-4xl mb-4">{service.icon}</div>
							<h2 className="text-lg font-semibold text-center px-3">
								{service.title}
							</h2>
						</div>
					))}
				</div>
				{/* Logiciels */}
				<h1 className="text-4xl text-center lg:text-left xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20">
					Logiciels
				</h1>
			</div>
		</section>
	);
}
