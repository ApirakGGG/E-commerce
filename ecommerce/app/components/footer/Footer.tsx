import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-slate-100 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-semibold mb:-2 text-slate-200">
              Shop Categories
            </h3>
            <Link href="/">IPhone</Link>
            <Link href="/">IPAD</Link>
            <Link href="/">MacBook</Link>
            <Link href="/">AIRPODS</Link>
            <Link href="/">WATCH</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-semibold mb-2 text-slate-200">
              Customer Service
            </h3>
            <Link href="/sendemail">Contact US</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/5 mb-6 md:mb-2">
            <h3 className="text-centertext-base font-semibold mb-2">ABOUT US</h3>
            <p className="mb-2 ">
              Apple Inc. is an American multinational technology company
              headquartered in Cupertino, California. As of March 2023, Apple is
              the worlds biggest company by market capitalization, and with
              US$394.3 billion the largest technology company by 2022 revenue.
            </p>
            <p></p>
          </div>
          <FooterList>
            <h3 className="text-base font-semibold mb:-2 text-slate-200">
              FOLLOW US
            </h3>
            <div className=" flex gap-2  ">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
