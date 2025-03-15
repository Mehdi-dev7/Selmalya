import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import LogoSelmalya from "../../assets/selmalyapng.png";
import Link from "next/link";

export default function Navbar() {
	const NavbarMenu = [
		{
			id: 1,
			title: "Présentation",
			link: "/présentation",
		},
		{
			id: 2,
			title: "Services",
			link: "/services",
		},
		{
			id: 3,
			title: "Logiciels",
			link: "/logiciels",
		},
		{
			id: 4,
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<nav className="relative z-20 bg-mint ">
			<div className="flex justify-between items-center md:px-40 px-10 py-2">
				{/* Log section */}

				<div className="flex justify-center items-center">
					<Image
						className="logo w-15 h-15 border-2 border-black rounded-full object-contain bg-white "
						src={LogoSelmalya}
						alt="logo"
					/>
				</div>
				{/* Menu section */}
				<div className="hidden lg:block">
					<ul className="flex items-center gap-10 ">
						{NavbarMenu.map((menu) => (
							<li key={menu.id}>
								<Link
									href={menu.link}
									className="font-semibold text-light hover:text-mint-dark duration-150 curosr-pointer relative group"
								>
									<div className="w-2 h-2 bg-mint-dark rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0  group-hover:block hidden absolute duration-150"></div>
									{menu.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{/* Hamburger section */}
				<div className="lg:hidden ">
					<IoMdMenu className="text-4xl text-light cursor-pointer hover:text-mint-dark" />
				</div>
			</div>
		</nav>
	);
}
