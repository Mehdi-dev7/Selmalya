"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link as LinkScroll } from "react-scroll";
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
			link: "accueil",
		},
		{
			id: 2,
			title: "Qui sommes-nous ?",
			link: "qui-sommes-nous",
		},
		{
			id: 3,
			title: "Services",
			link: "services",
		},
		{
			id: 4,
			title: "Contact",
			link: "contact",
		},
	];

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-[999] ${
				isScrolled ? "bg-mint/75 backdrop-blur-sm" : "bg-mint"
			}`}
		>
			<div className="container mx-auto">
				<motion.div
					className="flex justify-between items-center lg:px-50 px-10 py-2"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
				>
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
								<li key={menu.id} className="group">
									<LinkScroll
										to={menu.link}
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className="font-semibold text-light hover:text-mint-dark duration-200 cursor-pointer"
									>
										<span className="relative inline-block">
											{menu.title}
											<div className="absolute left-0 right-0 bottom-0 mx-auto bg-mint-dark w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
										</span>
									</LinkScroll>
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
				</motion.div>
				{/* Hamburger menu */}
				<div
					ref={menuRef}
					className={`absolute top-full left-0 right-0 transition-all duration-300 transform z-10 overflow-hidden ${
						isOpen ? "max-h-[300px]" : "max-h-0 opacity-0 pointer-events-none"
					} ${isScrolled ? "bg-mint/75 backdrop-blur-sm" : "bg-mint"}`}
				>
					<ul className="flex flex-col items-center py-4 space-y-4 border-t border-light/70">
						{NavbarMenu.map((menu) => (
							<li className="w-full text-center group" key={menu.id}>
								<LinkScroll
									to={menu.link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="font-semibold text-light cursor-pointer hover:text-mint-dark duration-200 block py-2"
									onClick={() => setIsOpen(false)}
								>
									<span className="relative inline-block">
										{menu.title}
										<div className="absolute left-0 right-0 bottom-0 mx-auto bg-mint-dark w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
									</span>
								</LinkScroll>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
