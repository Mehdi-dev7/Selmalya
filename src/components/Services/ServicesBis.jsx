import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaFileInvoiceDollar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { PiVignette } from "react-icons/pi";
import desktop from "../../assets/desktop.svg";
import leoLogo from "../../assets/leo-logo.jpg";
import lgpiLogo from "../../assets/logo-lgpi2.jpg";
import pharmalandLogo from "../../assets/logo-pharmaland2.jpeg";
import smartRxLogo from "../../assets/logo-smartRx.png";
import winpharmaLogo from "../../assets/winpharma-logo.jpeg";

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
	const softwares = [
		{
			id: 1,
			title: "LGPI",
			link: "#",
			icon: lgpiLogo,
		},
		{
			id: 2,
			title: "Pharmaland",
			link: "#",
			icon: pharmalandLogo,
		},
		{
			id: 3,
			title: "Winpharma",
			link: "#",
			icon: winpharmaLogo,
		},
		{
			id: 4,
			title: "SmartRx",
			link: "#",
			icon: smartRxLogo,
		},
		{
			id: 5,
			title: "Leo",
			link: "#",
			icon: leoLogo,
		},
	];

	return (
		<section className="bg-light min-h-[1000px]">
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pt-20">
				{/* Services */}
				<div className="mb-10">
					<h1 className="text-4xl text-center lg:text-left xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20">
						Nos services
					</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-8">
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
				</div>
				{/* Logiciels */}
				<div>
					<h1 className="text-2xl text-center lg:text-left xl:text-[40px] md:text-4xl font-bold !leading-snug text-mint-dark mt-20">
						Spécialisés dans les logiciels :
					</h1>
					<div className="containers mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-14 md:py-10">
						{/* Logiciels items */}
						<div className="flex flex-col gap-4 xl:gap-8 justify-center items-center lg:items-start w-full mx-auto lg:ml-0 mb-5">
							{softwares.map((software) => (
								<div
									key={software.id}
									className="bg-mint/20 rounded-2xl flex flex-row gap-4 items-center justify-start px-2 py-2 w-full h-20 max-w-md hover:bg-light/90 hover:scale-110 duration-300 hover:shadow-2xl"
								>
									<Image
										src={software.icon}
										alt={software.title}
										
										className="rounded-full w-16 h-16 object-cover border-2 border-white"
									/>
									<h2 className="text-lg font-semibold text-center px-4">
										{software.title}
									</h2>
								</div>
							))}
						</div>
						{/* Logiciels Image */}
						<div className="flex items-center justify-center w-full max-w-xl lg:w-[100%] md:w-[80%] md:my-10 xl:max-w-4xl mx-auto  xl:pl-30">
							<Image
								src={desktop}
								alt="ordi"
								className="w-full max-w-md md:max-w-xl xl:w-[600px] h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
