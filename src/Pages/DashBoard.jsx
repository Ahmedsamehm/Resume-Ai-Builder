import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../features/DashBoard/DashBoardLayout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { memo, useCallback, useEffect, useState } from "react";
import { useFetchData } from "../features/DashBoard/useFetchResumesData";

const DashBoard = () => {
  const navigate = useNavigate();
  const { Resumes, isLoading, isPending } = useFetchData();
  const [searchResume, setSearchResume] = useState("");
  const [filteredResumes, setFilteredResumes] = useState([]);
  useEffect(() => {
    if (Resumes) {
      setFilteredResumes(Resumes);
    }
  }, [Resumes]);
  const handleSearchResume = useCallback(
    (e) => {
      const searchItem = e.target.value;
      setSearchResume(searchItem);

      const filterResume = Resumes?.filter((resume) => {
        return resume?.title.toLowerCase().includes(searchItem.toLowerCase());
      });
      setFilteredResumes(filterResume);
    },
    [Resumes]
  );

  return (
    <>
      <header>
        <div className="flex justify-between ">
          <div className=" ">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              My Resumes
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage and create professional resumes with ease
            </p>
          </div>
          <Button onClick={() => navigate("/")}>Back</Button>
        </div>
        <div className="flex w-full  items-center gap-2 ">
          <Input
            value={searchResume}
            onChange={handleSearchResume}
            type="text"
            placeholder="Search"
          />
        </div>
      </header>

      <DashBoardLayout
        Resumes={Resumes}
        isLoading={isLoading}
        filteredResumes={filteredResumes}
        searchResume={searchResume}
        isPending={isPending}
      />
    </>
  );
};
export default memo(DashBoard);
