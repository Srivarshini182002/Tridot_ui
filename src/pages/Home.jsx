import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Highlights from "../components/Highlights";
import HeroSection from "../components/Hero";
import WebSpecial from "../components/WebSpecial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Header />
      <Navbar />
      <Highlights />
      <HeroSection />
      <WebSpecial />
      <Footer />
    </div>
  );
};

export default Home;