// 'use client';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

// const progress = new ProgressBar({
//   size: 8,
//   color: "#29e",
//   className: "z-50",
//   delay: 100,
// });

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);



export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Theme >
      {children}
    </Theme>
  )
}