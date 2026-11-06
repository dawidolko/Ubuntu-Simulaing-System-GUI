import { useEffect } from "react";
import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;

function App() {
  useEffect(() => {
    if (!TRACKING_ID) return;
    /* Analytics waits until the page has finished loading, so it never delays the first view. */
    const start = () => setTimeout(() => ReactGA.initialize(TRACKING_ID), 2500);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
  }, []);

  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
