import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Banner from "./Banner";
import TemporaryDrawer from "@/app/category/Category";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="relative">
      <div
        className="
          sticky
          top-0
          w-full
          bg-blue-200
          z-30
          shadow-sm
        "
      >
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-between gap-5 md:gap-0">
              <div className="absolute left-3  p-4  ">
                <Image src="/react.gif" width={50} height={50} alt="Logo" />
              </div>
              <Link
                href="/"
                className="font-bold text-3xl animate-bounce animate-duration-[2000ms] ml-4"
              >
                APPLE
              </Link>

              <div className="hidden md:block">
                <SearchBar />
              </div>

              <div className="flex items-center gap-3 md:gap-12 ">
                <div className="flex ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                  <CartCount />
                </div>
                <UserMenu currentUser={currentUser} />
              </div>
            </div>
          </Container>
        </div>
        <Categories />
      </div>
      <div className="mt-1">
      <TemporaryDrawer />
      </div>
      <div>
        <div className="flex items-center justify-center gap-3 md:gap-12 ">
          <Banner currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
