import React from 'react';

const Footer = () => {
  return (
    <div className="mt-12 bg-base-200 text-base-content">
      <footer className="w-11/12 mx-auto py-10 flex flex-col sm:flex-row sm:flex-wrap justify-between gap-8 text-center sm:text-left">
        
        {/* Services */}
        <nav className="flex-1 min-w-[200px]">
          <h6 className="footer-title font-semibold mb-3">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>

        {/* Company */}
        <nav className="flex-1 min-w-[200px]">
          <h6 className="footer-title font-semibold mb-3">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>

        {/* Legal */}
        <nav className="flex-1 min-w-[200px]">
          <h6 className="footer-title font-semibold mb-3">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>

        {/* Newsletter */}
        <form className="flex-1 min-w-[250px]">
          <h6 className="footer-title font-semibold mb-3">Newsletter</h6>
          <fieldset>
            <label className="block mb-2 text-sm text-gray-500">Enter your email address</label>
            <div className="join w-full">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Bottom Credit Line */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-700">NoteCorp</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
