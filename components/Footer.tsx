import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-silver/10 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-widest text-text-primary mb-4 block">
            ACCREDIAN
          </Link>
          <p className="text-text-secondary text-sm max-w-sm">
            Empowering enterprises with cutting-edge data solutions and strategic insights.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-text-primary mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><Link href="#" className="hover:text-silver transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-silver transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-silver transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-text-primary mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><Link href="#" className="hover:text-silver transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-silver transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-silver/10 text-center text-xs text-text-secondary">
        &copy; {new Date().getFullYear()} Accredian Clone. All rights reserved.
      </div>
    </footer>
  );
}
