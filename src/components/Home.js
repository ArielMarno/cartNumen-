import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Diseños } from "./Diseños";
import { About } from "./About";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <About />
        <Diseños />
        <Footer />
    </div>
  )
}

export default Home;