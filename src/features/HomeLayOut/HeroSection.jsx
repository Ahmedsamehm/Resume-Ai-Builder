import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import DotsStylingBody from "../../components/dotsStylingBody";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <DotsStylingBody />
      <div className="container flex flex-col gap-6 items-center justify-center min-h-[80vh]">
        <span
          data-slot="badge"
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3 [a&]:hover:bg-primary/90 border-transparent bg-primary/10 text-primary gap-2 pl-0.5"
        >
          <span
            data-slot="badge"
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3 bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent text-xs font-medium rounded-sm"
          >
            Featured
          </span>
          <span>AI-Powered</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--lucide size-4"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 18l6-6l-6-6"
            />
          </svg>
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance text-center">
          Create Your Professional Resume in Minutes
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl text-balance text-center">
          Effortlessly craft a stunning resume with the power of AI. Get noticed
          by recruiters and land your dream job faster.
        </p>
        <div className="flex gap-2">
          <Button
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 has-[>svg]:px-3"
            type="button"
          >
            See How It Works
          </Button>
          <Button
            onClick={() => {
              navigate("/DashBoard");
            }}
            className="focus-visible:border-ring cursor-pointer focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
            type="button"
          >
            Build Your Resume
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
