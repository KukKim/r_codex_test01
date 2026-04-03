import Image from "next/image";
import dkFace01 from "../src/assets/dkFace01.png";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px"
      }}
    >
      <Image
        src={dkFace01}
        alt="Main screen image"
        priority
        style={{
          maxWidth: "100%",
          height: "auto"
        }}
      />
    </main>
  );
}
