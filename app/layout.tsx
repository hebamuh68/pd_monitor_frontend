import React from "react";
import "./globals.css";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";

const cairo = Cairo({subsets:['latin', 'arabic'],variable:'--font-sans'});


export default function RootLayout({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <html lang="en" className={cn("font-sans", cairo.variable)}>
            <body>{ children}</body>
        </html>
    )
}