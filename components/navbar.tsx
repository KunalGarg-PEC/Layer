
"use client";

import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";

export function NavComponent() {
  const router = useRouter()
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Layer</span>
      </Navbar.Brand>
      
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
      <button onClick={()=>{
        router.push("/signup")
      }
      } className="bg-red-500 rounded-md p-2">Signup</button>
    </Navbar>
  );
}
