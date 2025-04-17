import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="footer-section mb-6 w-[40%] m-x-auto">
            <h3 className="text-xl font-bold">IPL Score Tracker</h3>
            <p className="mt-3">
              The ultimate destination for IPL cricket fans to stay updated with live scores,
              team standings, and match schedules.
            </p>
          </div>
          
          <div className="footer-section mb-6 ">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-2">
              <li><a href="/live-scores" className="text-white hover:underline hover:text-amber-200">Live Scores</a></li>
              <li><a href="/schedule" className="text-white hover:underline hover:text-amber-200 ">Schedule</a></li>
              <li><a href="/teams" className="text-white hover:underline hover:text-amber-200 ">Teams</a></li>
              <li><a href="/stats" className="text-white hover:underline hover:text-amber-200 " >Stats</a></li>
              <li><a href="/news" className="text-white hover:underline hover:text-amber-200 ">News</a></li>
            </ul>
          </div>
          
          <div className="footer-section mb-4 ">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="social-icons mt-2 ">
              <a href="https://twitter.com/" className="mr-5   text-amber-500 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com/" className="mr-5 text-amber-500 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/" className="mr-5  text-amber-500 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/" className=" mr-5 text-amber-500 hover:text-white"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="mt-1">Download our mobile app for a better experience</p>
          </div>
        </div>

        <div className="footer-bottom border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-sm">© 2025 IPL Score Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;