import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const links = {
  "About Us": [
    { label: "Our Story", href: "#" },
    { label: "Bernie the Gator", href: "#" },
    { label: "Creation to Play", href: "#" },
  ],
  Explore: [
    { label: "Rewards", href: "#" },
    { label: "Gift Cards", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Exclusive Discounts", href: "#" },
  ],
  Help: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Shipping & Handling", href: "#" },
    { label: "Return Policy", href: "#" },
    { label: "Purchase Internationally", href: "#" },
  ],
  Partners: [
    { label: "Wholesale Website", href: "#" },
    { label: "Wholesale Application", href: "#" },
  ],
};

const socials = [
  { name: "TikTok", href: "#", icon: <FaTiktok className="h-6 w-6" /> },
  { name: "Instagram", href: "#", icon: <FaInstagram className="h-6 w-6" /> },
  { name: "Facebook", href: "#", icon: <FaFacebook className="h-6 w-6" /> },
  { name: "Pinterest", href: "#", icon: <FaPinterest className="h-6 w-6" /> },
  { name: "YouTube", href: "#", icon: <FaYoutube className="h-6 w-6" /> },
];

const Footer = () => {
  return (
    <footer className="bg-[rgb(2,178,144)] text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {Object.entries(links).map(([section, items]) => (
            <nav
              key={section}
              aria-label={section}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/15"></div>

        {/* Social row */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition"
              >
                <span className="sr-only">{s.name}</span>
                <span className="text-white/90">{s.icon}</span>
              </a>
            ))}
          </div>
          <p>
            <Link to="/terms">terms</Link> & conditions with privacy policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
