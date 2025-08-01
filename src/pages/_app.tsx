import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/pages.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
