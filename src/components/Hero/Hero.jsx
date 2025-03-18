import Image from "next/image";
import Blob from "../../assets/blob-selmalya.svg";
import HeroPng from "../../assets/selmalyapng.png";

export default function Hero() {
	return (
		<section className="bg-light overflow-hidden relative h-[calc(100vh-70px)] flex items-center justify-center px-4 md:px-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
				{/* Blob (agrandi au-dessus de md) */}
				<div className="flex justify-center items-center mb-30">
					<Image
						src={Blob}
						alt="blob"
						className="absolute w-[500px] md:w-[550px] lg:w-[700px] xl:w-[1000px] opacity-70"
					/>

					{/* Images */}

					<div className="relative w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 md:mt-0">
						<Image
							src={HeroPng}
							alt="hero"
							className="absolute inset-0 w-full h-full object-contain bg-white"
						/>
					</div>
				</div>

				{/* Texte */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
					<h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">
						Selmalya
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
						Spécialiste du <span className="text-mint">Tiers-Payant</span>
					</p>

					<button className="primary-btn flex items-center gap-2 mt-5 md:mt-10 px-10 py-3 text-lg md:text-xl lg:text-2xl">
						Devis
					</button>
				</div>
			</div>
		</section>
	);
}
