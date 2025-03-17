import { AboutUs } from "./Aboutus";
import { ImageSlider } from "./Imageslider";

function Home() {
    return (
        <div className="flex flex-col md:flex-row p-12 gap-10 bg-white min-h-screen items-center">
      {/* <AboutUs /> */}
      <ImageSlider />
    </div>
    );
  }

export default Home;