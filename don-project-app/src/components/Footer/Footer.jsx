// import React from 'react';
import YoutubeIcon from '@assets/youtube.svg';
import FacebookIcon from '@assets/facebook.svg';
import SpotifyIcon from '@assets/spotify.svg';
import InstagramIcon from '@assets/instagram.svg';
import TiktokIcon from '@assets/tiktok.svg';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white py-2 z-10">
      <div className="">
        <div className="flex justify-center items-center gap-12">
          <img className="w-10 h-auto" src={YoutubeIcon} alt="Youtube logo" />
          <img className="w-8 h-auto" src={FacebookIcon} alt="Facebook logo" />
          <img className="w-8 h-auto" src={SpotifyIcon} alt="Spotify logo" />
          <img className="w-8 h-auto" src={InstagramIcon} alt="Instagram logo" />
          <img className="w-8 h-auto" src={TiktokIcon} alt="TikTok logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;