import { NavLink } from "react-router";
import { menuItems } from "../../routes/menuConfig";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import Logo from "../Logo/Logo";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 border-t border-base-200 pt-20 pb-10 px-6 lg:px-20 text-base-content/70">
      {/* GRID ADJUSTMENT: grid-cols-2 by default (mobile/tablet), grid-cols-4 on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* COLUMN 1: BRAND */}
        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
          <Logo />
          <p className="text-sm leading-relaxed max-w-xs">
            Providing high-quality digital solutions and modern experiences.
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div>
          <h4 className="text-base-content font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="hover:text-primary transition-all duration-300 flex items-center group"
                >
                  <span className="h-[1px] w-0 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: SUPPORT */}
        <div>
          <h4 className="text-base-content font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">
            Support
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            {[
              "Help Center / FAQ",
              "Privacy Policy",
              "Terms of Service",
              "Contact Support",
            ].map((text, i) => (
              <li key={i}>
                <NavLink
                  to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-primary transition-all duration-300"
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4: OFFICE & SOCIAL */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-base-content font-bold uppercase text-[11px] tracking-[0.2em] mb-6">
              Office
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <FiMapPin className="text-primary mt-1 shrink-0" />
                <span className="leading-relaxed">
                  123 Tech Avenue, <br /> Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <FiPhone className="text-primary shrink-0 group-hover:rotate-12 transition-transform" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <FiMail className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span>hello@yourbrand.com</span>
              </div>
            </div>
          </div>

          {/* FOLLOW SECTION */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest block">
              Follow us
            </span>
            <div className="flex items-center gap-5">
              {SocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={
                    social.label === "WhatsApp"
                      ? `https://wa.me/8801611642648`
                      : social.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 block group"
                  aria-label={social.label}
                >
                  <div className="w-6 h-6 flex items-center justify-center text-base-content group-hover:text-primary transition-colors fill-current">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-base-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest font-semibold opacity-60 text-center md:text-left">
        <p>© {currentYear} YourBrand. All rights reserved.</p>

        <div className="flex items-center gap-4 group">
          <span className="text-base-content/50 font-medium">Developed by</span>
          <div className="h-4 w-[1px] bg-base-content/20 hidden md:block"></div>
          <a
            href="https://github.com/Raihan1018"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Raihan
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
