import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";
const categories = [
  {
    src: "/stepservo.png",
    name: "stepservo products",
  },
  {
    src: "/stepper.png",
    name: "stepper products",
  },
  {
    src: "/servo.png",
    name: "servo products",
  },
  {
    src: "/gearhead.png",
    name: "gearheads",
  },
  {
    src: "/power.png",
    name: "powersupplies",
  },
  {
    src: "/module.png",
    name: "accessories",
  },
  {
    src: "/ul.png",
    name: "ul recognized products",
  },
  {
    src: "/networks.png",
    name: "industrial networks",
  },
  {
    src: "/gearmotors.png",
    name: "gearmotors",
  },
];
export default function Home() {
  return (
    <main className=" min-h-screen w-full bg-background text-foreground">
      <section className="mt-4 flex items-start gap-4 border-l-4 border-accent bg-secondary/60 px-6 py-4 font-mono text-sm leading-snug">
        <AlertCircleIcon size={32} className="shrink-0 text-accent" />

        <div className="text-foreground px-2">
          <span className="font-bold uppercase tracking-wide">
            Inventory Notice
          </span>
          <br />
          <p>
            Applied Motion will be conducting inventory from{" "}
            <span className="font-semibold">12/17 – 12/19</span>. No shipments
            will be made during this time. Shipping operations will resume on{" "}
            <span className="font-semibold">12/22</span>.
          </p>
          <p>
            Applied Motion will also be closed for the Christmas Holiday from{" "}
            <span className="font-semibold">12/24 – 12/26</span>. Normal
            business operations will resume on{" "}
            <span className="font-semibold">12/29</span>.
          </p>
        </div>
      </section>
      <div className="flex justify-center items-center p-4">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>
      <section className="px-8 p-2">
        <p>All Categories</p>
        <hr className="text-accent"></hr>
        <br></br>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-accent transition-shadow duration-200"
            >
              <Image
                alt={cat.name}
                src={cat.src}
                width={150}
                height={150}
                className="object-contain w-full h-40"
              />
              <h2 className="mt-2 font-bold text-accent text-sm uppercase text-center">
                {cat.name}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
