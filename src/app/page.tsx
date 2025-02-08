import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <div className="main flex flex-col items-center justify-center pt-6">
      <h1>Home Page</h1>
      <div className="links">
        <Button><Link href="/LearnEventFunctionState">Learn Event Function and State</Link>
        </Button>

      </div>

    </div>
  );
}
