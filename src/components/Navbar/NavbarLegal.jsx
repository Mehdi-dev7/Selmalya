import Image from "next/image";
import Link from "next/link";
import LogoSelmalya from "../../assets/selmalyapng.png";

export default function NavbarLegal() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-mint shadow-md duration-300">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src={LogoSelmalya}
							alt="Selmalya"
							className="w-12 h-12 md:w-16 md:h-16 border-2 border-black rounded-full object-contain bg-white"
						/>
					</Link>

					{/* Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-light hover:text-mint-dark transition-colors"
						>
							Accueil
						</Link>
						<Link
							href="/#qui-sommes-nous"
							className="text-light hover:text-mint-dark transition-colors"
						>
							Qui sommes-nous ?
						</Link>
						<Link
							href="/#services"
							className="text-light hover:text-mint-dark transition-colors"
						>
							Services
						</Link>
						<Link
							href="/#contact"
							className="text-light hover:text-mint-dark transition-colors"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
