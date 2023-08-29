import LeftSide from "@/components/left.side";
import RightSide from "@/components/right.side";

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">
      <LeftSide />
      <RightSide />
    </main>
  );
}
