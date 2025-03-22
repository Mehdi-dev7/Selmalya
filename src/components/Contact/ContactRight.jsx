import email from "@/assets/Emails.svg";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

export default function ContactRight() {
	return (
		<div className="flex flex-col items-center justify-center gap-12 w-full lg:w-[30%] mb-30">
			<Image src={email} alt="Contact" className="max-w-[300px]" />
      <ContactInfo />
      
		</div>
	);
}
