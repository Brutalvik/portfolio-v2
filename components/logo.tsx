"use client";

import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Logo = () => {
    const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL;

  return (
    <motion.img
      src={logoUrl}
      alt="vbytes"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        maxWidth: "30px", //  limit the maximum size.
        height: "auto", // Maintain aspect ratio.
      }}
    />
  );
};

export default Logo;
