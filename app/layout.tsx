import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
        </body>
    </html>
  );
}




