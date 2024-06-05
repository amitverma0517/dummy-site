import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div>
          Main body
        </div>
        
      </div>
    </main>
  );
}
