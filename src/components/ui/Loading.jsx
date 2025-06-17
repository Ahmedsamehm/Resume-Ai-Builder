import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] ">
      <LoaderCircle className="animate-spin"  size={70} />
    </div>
  );
}

export default Loading;
