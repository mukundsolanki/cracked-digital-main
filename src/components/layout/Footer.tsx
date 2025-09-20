import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CodeBracketIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { colors } from "@/lib/colors";

const footerLinks = {
  community: [
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Community Guidelines", href: "/guidelines" },
    { name: "Report Issue", href: "/report" },
  ],
  social: [
    { name: "Discord", href: "https://discord.gg/cracked", icon: "💬" },
    {
      name: "GitHub",
      href: "https://github.com/cracked-community",
      icon: "🐙",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/cracked_community",
      icon: "🐦",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/cracked-community",
      icon: "💼",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary[600]}, ${colors.secondary[600]})`,
                }}
              >
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="ml-3 text-2xl font-bold">CRACKED</span>
            </div>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              The ultimate destination for technical knowledge, community
              support, and professional growth. Join thousands of developers
              advancing their careers.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-blue-400" />
                <a
                  href="mailto:hello@cracked.community"
                  className="hover:text-white transition-colors"
                >
                  admin@cracked.digital
                </a>
              </div>

              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3 text-blue-400" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              Made with ❤️ by the cracked community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
