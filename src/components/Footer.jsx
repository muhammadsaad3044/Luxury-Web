import React from "react";
import footerImage from "../assets/images/footer.jpg";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Twitch,
} from "lucide-react";

function Footer() {
  return (
    <section
      className="relative overflow-hidden min-h-screen md:min-h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-28 relative z-10">
        <div className="max-w-2xl">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              Begin Your Membership Journey
            </h2>

            <p className="mt-5 text-sm md:text-base text-white/90 max-w-md leading-relaxed font-light">
              Join a private quarterly experience designed around precision,
              craftsmanship, and personal refinement.
            </p>

            {/* Input + Button */}
            <div className="mt-8 flex w-full max-w-md shadow-2xl rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email for private access"
                className="flex-1 px-4 py-3 text-sm outline-none bg-white text-[#2C2B28] placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F6660] transition"
              />
              <button className="bg-[#6F6660] text-white px-6 text-sm font-medium hover:bg-[#5f5752] transition duration-300 ease-in-out">
                Sign Up
              </button>
            </div>

            {/* Shop Links */}
            <div className="mt-16">
              <h4 className="text-xs tracking-widest text-white/70 mb-4">
                SHOP
              </h4>

              <ul className="space-y-2 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition duration-200 ease-in-out hover:translate-x-1">New arrival</li>
                <li className="hover:text-white cursor-pointer transition duration-200 ease-in-out hover:translate-x-1">Shop by category</li>
                <li className="hover:text-white cursor-pointer transition duration-200 ease-in-out hover:translate-x-1">Shop by collection</li>
                <li className="hover:text-white cursor-pointer transition duration-200 ease-in-out hover:translate-x-1">Gift</li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h4 className="text-xs tracking-widest text-white/70 mb-4">
                FOLLOW US ON
              </h4>

              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter, Youtube, Twitch].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="w-9 h-9 flex items-center justify-center border border-white/50 rounded-full text-white hover:bg-white hover:text-black hover:border-white transition duration-300 ease-in-out cursor-pointer transform hover:scale-110"
                    >
                      <Icon size={16} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Top Right Circle */}
        <div className="absolute top-0 right-0 w-65 h-65 border-30 border-[#6E655E] rounded-full translate-x-1/3 -translate-y-1/3 opacity-70"></div>
        <div className="absolute top-0 right-0 w-42 h-42 border-20 border-[#6E655E] rounded-full translate-x-1/3 -translate-y-1/3 opacity-70"></div>

        {/* Decorative Bottom Right Star */}
        <div className="absolute bottom-16 right-24 text-[#2C2B28] text-6xl opacity-90">
          ✱
        </div>
      </div>
    </section>
  );
}

export default Footer;