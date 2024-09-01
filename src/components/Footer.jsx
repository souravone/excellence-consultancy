function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-4">
      <div className="container mx-auto px-5 md:px-8 lg:px-10 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Excellence Consultancy Services. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
