import React from "react";
import { LayoutGrid, Lightbulb, Smartphone } from "lucide-react";

function FeaturesSection() {
  return (
    <>
      <section className="relative py-20">
        <div className="container flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-3 items-center">
            <span
              data-slot="badge"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3 [a&]:hover:bg-primary/90 border-transparent gap-1.5 bg-primary/10 text-primary"
            >
              Features
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
              Key Features
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
            Explore the powerful features that make resume building a breeze.
            Our AI-powered tools help you create a professional resume in
            minutes.
          </p>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-none hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div
                data-slot="card-content"
                className="px-6 flex flex-col items-center gap-5"
              >
                <div className="rounded-md p-3 bg-primary/10 text-primary">
                  <LayoutGrid className="size-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-center">
                    AI-Powered Content Suggestions
                  </h3>
                  <p className="text-muted-foreground text-base text-center">
                    Get instant suggestions for content, tailored to your
                    experience and the job you're applying for. Let AI guide
                    your writing.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-none hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div
                data-slot="card-content"
                className="px-6 flex flex-col items-center gap-5"
              >
                <div className="rounded-md p-3 bg-primary/10 text-primary">
                  <Lightbulb className="size-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-center">
                    Smart Section Suggestions
                  </h3>
                  <p className="text-muted-foreground text-base text-center">
                    Get suggestions for relevant sections based on your
                    experience and the job description. Ensure you never miss a
                    key detail.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-none hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div
                data-slot="card-content"
                className="px-6 flex flex-col items-center gap-5"
              >
                <div className="rounded-md p-3 bg-primary/10 text-primary">
                  <Smartphone className="size-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-center">
                    Download it with PDF Format
                  </h3>
                  <p className="text-muted-foreground text-base text-center">
                    Download your resume in PDF, to submit to any job
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
