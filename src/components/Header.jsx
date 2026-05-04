export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between text-white">
      <div className="text-2xl font-bold tracking-tighter italic">muzzyhud</div>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-300 transition-colors">About us</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Our works</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Pricing & Architecture</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Testimonials</a>
      </nav>
      <button className="border border-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
        Contact us
      </button>
    </header>
  )
}
