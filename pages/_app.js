import "../styles/globals.css";
import TitleBar from "../components/TitleBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TitleBar />
      <Component {...pageProps} />
    </>
  );
}
