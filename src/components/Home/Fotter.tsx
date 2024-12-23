export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">About</a>
              </li>
              <li className="mb-2">
                <a href="#">Services</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Phone: (555) 123-4567</li>
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Address: 123 Street Name</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span>Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span>Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
