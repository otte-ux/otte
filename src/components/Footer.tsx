export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} ESAS HOMES. All rights reserved.</p>
      </div>
    </footer>
  );
}
