import React from "react";
import ChaiCodeLogo from "@/assets/chaicode-logo.png";

export default function ContainerLayout({ children }) {
  return (
    <main>
      {children}
      <a href="https://chaicode.com" target="_blank">
        <img
          src={ChaiCodeLogo}
          alt="ChaiCode Logo"
          title="ChaiCode Logo"
          width={100}
          height={80}
          className="absolute bottom-8 right-8"
        />
      </a>
    </main>
  );
}
