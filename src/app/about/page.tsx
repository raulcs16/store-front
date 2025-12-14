import { AlertCircleIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    name: "Warehouse Automation",
    src: "/warehouse.jpeg",
    message:
      "Warehouse Automation applications impose specific demands on motion control systems. Robotic picking systems require precise positioning and rapid movements. Conveyor systems prioritize consistent speed and smooth transitions. Parcel sorters and singulators require high performance motors with networking capabilities and long duty cycles. AGVs/AMRs need reliable, responsive and efficient motion control. Packaging automation demands adjustable motion control to accommodate various package sizes, highlighting the need for system flexibility.",
  },
  {
    name: "Energy",
    src: "/energy.jpg",
    message:
      "In the oil, gas and alternative energy industries, Servo and Stepper motors are utilized out on the field and in in-house manufacturing for their performance, precision and reliability. On the field, these motors must operate while exposed to extreme temperatures, vibrations and rain. In manufacturing contexts, these systems must perform as stated for long periods of time to maintain production lines operating without problems. As the world adopts eco-friendly measures, these systems are also having to undergo improvements in efficiency.",
  },
  {
    name: "Semiconductor",
    src: "/conductors.png",
    message:
      "Semiconductor equipment demands exceptionally precise, fast, and reliable motion control components to handle microscopic tasks like lithography, wire bonding and laser etching. These components must also operate continuously in cleanrooms while maintaining high throughput and minimal vibration",
  },
  {
    name: "Packaging",
    src: "/packaging.jpg",
    message:
      "Life Sciences equipment requires precise and reliable motion control components, as even the slightest deviations impact experimental results and patient outcomes. Precision and quality must be combined with a compact form factor in many lab and direct-to-patient designs, necessitating high-torque miniature motors or compact gearing solutions. To ensure consistent performance and quality, designs often must comply with regulatory standards as well.",
  },
  {
    name: "Life Sciences",
    src: "/life.jpg",
    message:
      "Life Sciences equipment requires precise and reliable motion control components, as even the slightest deviations impact experimental results and patient outcomes. Precision and quality must be combined with a compact form factor in many lab and direct-to-patient designs, necessitating high-torque miniature motors or compact gearing solutions. To ensure consistent performance and quality, designs often must comply with regulatory standards as well.",
  },
  {
    name: "AGV & AMR",
    src: "/agv-amr.jpg",
    message:
      "Applied Motion Products understands the importance of efficient, precise, and powerful motion control in your Automated Guided Vehicle (AGV) or Autonomous Mobile Robot (AMR) design. We also understand the rigorous safety requirements and stringent form factor constraints you must account for as an AGV/AMR designer. Applied Motion is fully invested in providing you the necessary motion control solutions to level up your automated vehicle design by providing the power, efficiency, and precision it requires all the while putting footprint control, safety functions and the power to simplify your supply chain into your hands.",
  },
];

export default function Home() {
  return (
    <main className=" min-h-screen w-full bg-background text-foreground">
      <section className="mt-8 px-16">
        <h2 className="text-xl text-center font-bold mb-4">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((indust) => (
            <div className="relative w-80 h-60 rounded-lg overflow-hidden">
              <Image
                src={indust.src}
                alt={indust.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute bottom-0 w-full  from-black/70 to-transparent p-3">
                <p className="text-white text-xl font-extrabold uppercase tracking-widest text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  {indust.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
