import Link from "next/link";
import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-primary/80 backdrop-blur-md border-b border-silver/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest text-text-primary">
          ACCREDIAN
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="text-text-secondary hover:text-silver transition-colors">Features</Link>
          <Link href="#benefits" className="text-text-secondary hover:text-silver transition-colors">Benefits</Link>
          <Link href="#testimonials" className="text-text-secondary hover:text-silver transition-colors">Testimonials</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex h-10 px-4">Log In</Button>
          <Button className="h-10 px-4">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
