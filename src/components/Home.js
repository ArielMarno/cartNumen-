import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Design } from "./Design";
import { About } from "./About";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <About />
        <Design />
        <Footer />
    </div>
  )
}

export default Home;