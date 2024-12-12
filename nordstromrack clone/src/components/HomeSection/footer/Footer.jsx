import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm border-t border-gray-300">
      {/* Top Footer Section */}
      <div className="container mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>Order Status</li>
              <li>Guest Returns</li>
              <li>Shipping & Return Policy</li>
              <li>Gift Cards</li>
              <li>Product Recalls</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About Us</h3>
            <ul className="space-y-2">
              <li>About Our Brand</li>
              <li>The Nordy Club</li>
              <li>Store Locator</li>
              <li>All Brands</li>
              <li>Careers</li>
              <li>Get Email Updates</li>
              <li>Nordstrom Blog</li>
              <li>Nordy Podcast</li>
              <li>Store Openings</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Nordstrom Rack & The Community
            </h3>
            <ul className="space-y-2">
              <li>Corporate Social Responsibility</li>
              <li>Diversity, Equity, Inclusion & Belonging</li>
              <li>Big Brothers Big Sisters</li>
              <li>Donate Clothes</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Nordstrom Card</h3>
            <ul className="space-y-2">
              <li>Apply for a Nordstrom Card</li>
              <li>Pay My Bill</li>
              <li>Manage My Nordstrom Card</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Nordstrom, Inc.
            </h3>
            <ul className="space-y-2">
              <li>Nordstrom</li>
              <li>HauteLook</li>
              <li>Investor Relations</li>
              <li>Press Releases</li>
              <li>Nordstrom Media Network</li>
            </ul>
          </div>
          <div className="apps">
            <h3 className="flex gap-2 text-gray-500 text-[16px] mb-3">
              <FaDownload size={25} />
              <p>Download our Apps</p>
            </h3>
            <div className="flex items-center gap-6 p-2">
              <FaFacebookF size={25} className="text-gray-600" />
              <FaXTwitter size={25} className="text-gray-600" />
              <FaPinterestP size={25} className="text-gray-600" />
              <FaInstagram size={25} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-200 py-4 text-center border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Shaikh Ashfaq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
