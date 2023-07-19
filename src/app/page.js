import Card from "./components/card";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-4xl text-center p-10 font-extrabold">Discover us in Three Easy Steps</h1>
      <div className="flex justify-center justify-evenly">
      <Card title="Contact" image="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" description=" Loreum ipsum" button="More"/>
      <Card title="About us" image="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" description=" Loreum XXX" button="Next"/>
      <Card title="Connect" image="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" description=" Loreum QQQQQ" button="Skip"/>
      </div>
      <h1 className="text-4xl text-center p-10 font-extrabold"></h1>
      <Footer/>
     </div>
  )
}
