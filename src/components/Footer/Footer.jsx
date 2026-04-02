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
        {/* COLUMN 3: MAP / LOCATION */}
        <div className="flex flex-col">
          <h4 className="text-base-content font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">
            Find Us
          </h4>
          <div className="group relative w-full h-32 rounded-xl overflow-hidden border border-base-200 bg-base-200/30 transition-all duration-500 hover:border-primary/30">
            {/* Map Overlay Link */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Dhaka+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10 bg-base-100/40 group-hover:bg-transparent transition-colors duration-300"
            >
              <div className="bg-primary text-primary-content p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <FiMapPin size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-base-100 px-3 py-1 rounded-full shadow-sm">
                Open in Maps
              </span>
            </a>

            {/* Google Maps Embed Iframe */}
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.2721867803!2d90.38896175!3d23.74490335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbddd590d!2sDhaka!5e0!3m2!1sen!2sbd!4v1711234567890!5m2!1sen!2sbd"
              className="w-full h-full grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="mt-4 text-[10px] uppercase tracking-widest font-semibold opacity-50">
            Click the map for directions
          </p>
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
              <div className="flex items-center flex-nowrap gap-3 hover:text-primary transition-colors cursor-pointer group">
                <FiPhone className="text-primary shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="whitespace-nowrap tabular-nums">
                  +880 1234 567890
                </span>
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
