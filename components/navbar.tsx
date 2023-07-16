import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 ">
            <p className="font-bold text-lg uppercase">Store</p>
          </Link>
          <MainNav data={[]} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
