import Card from "./components/card";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-4xl text-center p-10 font-extrabold">Shop Tax Free in Three Easy Steps</h1>
      <div className="flex justify-center justify-evenly">
      <Card/>
      <Card/>
      <Card/>
      </div>
     </div>
  )
}
