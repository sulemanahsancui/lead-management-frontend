import Header from "./components/Header";
import LeadList from "./components/LeadList";

export default function Home() {
  return (
    <div className="p-8 h-full">
      <Header />
      <div className="max-w-4xl mx-auto">
        {/* Use LeadList component */}
        <LeadList />
      </div>
    </div>
  );
}
