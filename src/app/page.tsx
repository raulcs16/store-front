import { AlertCircleIcon, ShoppingCart } from "lucide-react";
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
    </main>
  );
}
