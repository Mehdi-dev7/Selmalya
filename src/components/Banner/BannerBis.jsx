import Image from "next/image";
import { motion } from "framer-motion";
import BannerImage from "../../assets/Designer.svg";
// Importez votre image spécifique pour Banner

export default function BannerBis() {
   

    return (
        <section className="bg-light/50 min-h-[800px] sm:min-h-[1000px] flex items-center justify-center py-10 sm:py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-8 md:py-24">
                {/* banner text */}
                <div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto order-2 lg:order-1">
                    <div className="text-center lg:text-left space-y-4 sm:space-y-6">
                        <motion.h1
                            className="text-3xl sm:text-4xl xl:text-[50px] md:text-5xl font-bold leading-tight text-mint-dark mb-8 sm:mb-12 md:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Votre titre Banner
                        </motion.h1>

                        <motion.div
                            className="text-base sm:text-lg md:text-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <p>
                                Votre texte Banner
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* banner image */}
                <motion.div
                    className="flex justify-center items-center w-full max-w-xl mx-auto lg:pl-8 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src={BannerImage}
                        alt="Selmalya Banner"
                        className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:w-[100%] h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}