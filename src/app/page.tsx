import { Metadata } from "next";

import Example from "@/components/Example";
import { ThemeSwitcher } from "@/components/core/themes/theme-switcher";

const APP_NAME = "electricsql-next-pwa example";
const APP_DESCRIPTION =
  "This is an example of using next-pwa plugin, with local first architecture based CRDTs with ElectricSQL";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-slate-800">
      <Example />
      <ThemeSwitcher />
    </main>
  );
}

export const metadata: Metadata = {
  title: "ElectricSQL ⚡ PWA 💖 Next.js",
  description: APP_DESCRIPTION,
  twitter: {
    card: "summary_large_image",
    creator: "@imamdev_",
    images: "https://example.com/og.png",
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#317EFB",
  viewport:
    "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/icons/16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/icons/32.png",
      sizes: "32x32",
      type: "image/png",
    },
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa", "local-first architecture"],
};
