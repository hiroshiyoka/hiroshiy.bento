import Footer from "@/components/footer";
import LeftSide from "@/components/left.side";
import RightSide from "@/components/right.side";

export default function Home() {
  return (
    <main className="container flex flex-col xl:flex-row flex-1 h-full w-full mx-auto gap-6 xl:gap-10">
      <LeftSide />
      <RightSide />
      <div className="flex xl:hidden px-8 pb-10 w-full">
        <Footer />
      </div>
    </main>
  );
}
