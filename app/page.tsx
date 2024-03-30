import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <Button>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
