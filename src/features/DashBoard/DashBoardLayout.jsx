import AddResume from "./AddResume";
import ResumeCard from "./ResumeCard";
import Loading from "../../components/ui/Loading";

import DotsStylingBody from "../../components/dotsStylingBody";
import { Search } from "lucide-react";

function DashBoardLayout({
  isLoading,
  Resumes,
  filteredResumes,
  searchResume,
  isPending,
}) {
  if (isLoading || isPending) {
    return <Loading />;
  }

  return (
    <>
      <DotsStylingBody />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[calc(90vh-200px)] overflow-y-auto p-5">
        <div className=" bg-card shadow-md text-center flex items-center justify-center cursor-pointer animate-scale-in  ">
          <AddResume />
        </div>

        {filteredResumes?.map((resume, index) => {
          return (
            <ResumeCard
              key={index}
              title={resume.title}
              description={resume.created_at}
              id={resume?.id}
            />
          );
        })}
        {filteredResumes?.length === 0 && searchResume !== "" && (
          <div className="text-center py-12  ">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">
                No resumes found matching "{searchResume}"
              </p>
              <p className="text-sm">Try adjusting your search criteria</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center gap-3 flex-col w-full md:flex-row ">
        <div className="bg-card flex-1 text-start  size-full md:size-30  p-5  md:p-0 rounded-2xl border">
          <div className="flex flex-col justify-center items-start  min-h-full px-10 ">
            <span className="text-2xl font-bold text-foreground">
              {Resumes?.length}
            </span>
            <p className="text-muted-foreground">Total Resumes</p>
          </div>
        </div>

        {/* static Data  */}
        <div className="bg-card flex-1  text-start size-full  md:size-30  p-5   md:p-0 rounded-2xl border">
          <div className="flex flex-col justify-center items-start  min-h-full px-10">
            <span className="text-2xl font-bold text-foreground"> 5</span>
            <p className="text-muted-foreground">Templates Used</p>
          </div>
        </div>
        <div className="bg-card flex-1 text-start size-full  md:size-30 p-5  md:p-0 rounded-2xl border">
          <div className="flex flex-col justify-center items-start  min-h-full px-10">
            <span className="text-2xl font-bold text-foreground"> 5</span>
            <p className="text-muted-foreground">Downloads This Month</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardLayout;
