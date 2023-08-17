"use client";
import DropDown from "@/components/DropDown";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center w-screen pt-16">
      <DropDown
        getData={(d) => console.log(d)}
        list={[
          { name: "India", id: "1" },
          { name: "USA", id: "2" },
          { name: "Canada", id: "3" },
          { name: "UAE", id: "4" },
          { name: "China", id: "5" },
          { name: "Africa", id: "6" },
          { name: "Nepal", id: "7" },
          { name: "Japan", id: "8" },
        ]}
        placeholder="Destinations"
      />
    </main>
  );
}
