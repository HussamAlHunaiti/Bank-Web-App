import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a href="https://mail.google.com/mail/u/0/?fs=1&to=hussamalhunaiti27@gmail.com&tf=cm" target="_blank">
    Get Started
    </a>
  </button>
);

export default Button;
