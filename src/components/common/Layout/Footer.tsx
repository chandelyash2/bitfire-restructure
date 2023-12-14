import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pb-20 p-4 bg-header lg:p-6 h-auto">
            <Container>
                <div className="flex flex-col gap-4 items-center justify-between lg:flex-row">
                    <Image
                        src="/bitlogo.png"
                        width={50}
                        height={50}
                        alt="logo"
                    />
                    <div className="flex flex-col text-center gap-2 font-semibold lg:flex-row lg:gap-8">
                        <Link href="">About Us</Link>
                        <Link href="">Rules & Regulations</Link>
                        <Link href="">Sportsbook Betting</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="">
                            <FaInstagram />
                        </Link>
                        <Link href="">
                            <FaFacebook />
                        </Link>
                        <Link href="">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
