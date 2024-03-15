
import { Sidebar } from "./components/sidebar";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="flex">
     <Sidebar/>
     <div>
      <Dashboard/>
     </div>
    </div>
  );
}