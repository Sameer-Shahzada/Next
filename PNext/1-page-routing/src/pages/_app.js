import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <h1 className="text-center">Hello Next js</h1>
    <Component {...pageProps} />;   {/* This is the dynamic component */}
    <h6 className="bg-red-500 text-white">Sameer is here</h6>
    </>
  ) 
}
