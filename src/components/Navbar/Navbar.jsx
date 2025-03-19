"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import LogoSelmalya from "../../assets/selmalyapng.png";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const hamburgerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Handle click outside of menu
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isOpen &&
				menuRef.current &&
				hamburgerRef.current &&
				!menuRef.current.contains(event.target) &&
				!hamburgerRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	const NavbarMenu = [
		{
			id: 1,
			title: "Accueil",
			link: "/",
		},
		{
			id: 2,
			title: "Qui sommes-nous ?",
			link: "/présentation",
		},
		{
			id: 3,
			title: "Services",
			link: "/services",
		},
		{
			id: 4,
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
				isScrolled ? "bg-mint/50 backdrop-blur-sm" : "bg-mint"
			}`}
		>
			<div className="flex justify-between items-center lg:px-50 px-10 py-2">
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
									className="font-semibold text-light hover:text-mint-dark duration-200 cursor-pointer relative group"
								>
									<div className="w-2 h-2 bg-mint-dark rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0  group-hover:block hidden absolute duration-200"></div>
									{menu.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{/* Hamburger section */}
				<div className="lg:hidden" ref={hamburgerRef}>
					<IoMdMenu
						onClick={() => setIsOpen(!isOpen)}
						className="text-4xl text-light cursor-pointer hover:text-mint-dark"
					/>
				</div>
			</div>
			{/* Hamburger menu */}
			<div
				ref={menuRef}
				className={`fixed top-[70px] left-0 right-0 bg-mint shadow-lg transition-all duration-300 transform z-10 overflow-hidden ${
					isOpen
						? "max-h-[300px] opacity-100"
						: "maw-h-0 opacity-0 pointer-events-none"
				}`}
			>
				<ul className="flex flex-col items-center py-4 space-y-4">
					{NavbarMenu.map((menu) => (
						<li className="w-full text-center" key={menu.id}>
							<Link
								href={menu.link}
								className="font-semibold text-light hover:text-mint-dark duration-200 block py-2 relative group"
								onClick={() => setIsOpen(false)}
							><div className="w-2 h-2 bg-mint-dark rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0  group-hover:block hidden absolute duration-200"></div>
								{menu.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
