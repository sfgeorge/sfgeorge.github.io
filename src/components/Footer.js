import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black fa-xs text-center text-white-50">
      <div className="container fa-xs">
        Copyright &copy; Gatsby-starter-grayscale {new Date().getFullYear()}
      </div>
    </footer>
  );
}
