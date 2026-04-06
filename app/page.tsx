import Image from "next/image";
import dkFace01 from "../src/assets/dkFace01.png";

export default function Home() {
  return (
    <main className="page page-home">
      <Image src={dkFace01} alt="Main screen image" priority className="hero-image" />
    </main>
  );
}
