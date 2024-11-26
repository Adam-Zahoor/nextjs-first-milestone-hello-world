import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-red-400 flex justify-center">
      <div className="flex justify-center bg-white h-14 w-screen">
        <p className="flex items-center justify-center text-center text-4xl pt-1">Hello World!</p>
      </div>
    </div>
  );
}
