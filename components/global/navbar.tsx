import { UserButton, currentUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
  const user = await currentUser();
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      <Link href={"/"}>
        <aside className="flex items-center gap-[2px]">
          <p className="text-3xl font-bold">Fu</p>
          <Image
            src={"/fuzzieLogo.png"}
            width={15}
            height={15}
            alt="fuzzie logo"
            className="shadow-sm"
          />
          <p className="text-3xl font-bold">zie</p>
        </aside>
      </Link>
      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
        <ul className="flex list-none items-center gap-4">
          <li className="">
            <Link href={"#"}>Products</Link>
          </li>
          <li className="">
            <Link href={"#"}>Pricing</Link>
          </li>
          <li className="">
            <Link href={"#"}>Clients</Link>
          </li>
          <li className="">
            <Link href={"#"}>Resources</Link>
          </li>
          <li className="">
            <Link href={"#"}>Documentation</Link>
          </li>
          <li className="">
            <Link href={"#"}>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <Menu className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
