import Navbar from "./Navbar";
import Footer from "./Footer";


export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pb-26 md:pb-0">{children}</main>
      <Footer />
      
    </>
  );
}