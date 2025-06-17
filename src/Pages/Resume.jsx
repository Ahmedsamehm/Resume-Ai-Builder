import { useNavigate } from "react-router-dom";
import ResumeLayOut from "../features/Resume/ResumeLayOut";
import { Button } from "../components/ui/button";
import { useResumeContext } from "../context/ResumeContext";

function Resume() {
  const navigate = useNavigate();
  const { reactToPrintFn } = useResumeContext();
  const handleBackToDashBoard = () => {
    navigate("/DashBoard");
    localStorage.removeItem("keywords");
    localStorage.removeItem("jobDescription");
    localStorage.removeItem("steps");
  };
  return (
    <>
      <header className="flex  justify-between">
        <h1>Resume</h1>
        <div className="space-x-2">
          <Button onClick={handleBackToDashBoard}>Back</Button>
          <Button onClick={reactToPrintFn}>DownloadPdf</Button>
        </div>
      </header>
      <section className="bg-accent">
        <ResumeLayOut />
      </section>
    </>
  );
}

export default Resume;
