
import Dashboard from "../Dashboard/page";
import { Sidebar } from "./components/sidebar";


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