import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-100">
      <div className="flex gap-4">
        <Link href="/" className="text-lg font-bold">Logo</Link>
      </div>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
