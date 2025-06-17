import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import useAi from "../services/ServicesAi/useAi";
import Loading from "./ui/Loading";

function ImproveWithAI({ inputValue, onUpdateValues, contentType, filedName }) {
  const [text, setText] = useState("");
  const { AiFunction, isPending } = useAi();

  //  this function will be called when the textarea value changes
  const handleTextAreaChange = (e) => {
    //this for live update
    onUpdateValues(e.target.value);
    //this for data that will be send to AI
    setText(e.target.value);
  };
  // after i get response from ai i will call this function and replace old data with new data
  const handleImprove = (responses) => {
    onUpdateValues(responses);
  };

  // Fetch the wordList from localStorage.
  // This list is stored after the user submits a job description
  // and receives a response from the AI, which classifies the skills
  // into hard, mid, and easy categories.
  const wordList = JSON.parse(localStorage.getItem("keywords"));
  const hardSkills = wordList?.hard?.map((word, index) => (
    <li key={`hard-${index}`}>
      <Badge className="bg-red-500 text-white text-center whitespace-pre-wrap p-2 text-sm font-bold rounded">
        {word}
      </Badge>
    </li>
  ));

  const mediumSkills = wordList?.mid?.map((word, index) => (
    <li key={`mid-${index}`}>
      <Badge className="bg-blue-500 text-white text-center whitespace-pre-wrap p-2 text-sm font-bold rounded">
        {word}
      </Badge>
    </li>
  ));

  const easySkills = wordList?.easy?.map((word, index) => (
    <li key={`easy-${index}`}>
      <Badge className="bg-green-700 text-white text-center whitespace-pre-wrap p-2 text-sm font-bold rounded">
        {word}
      </Badge>
    </li>
  ));

  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild type="button" className="p-1">
          <p className="text-xs md:text-sm text-wrap">
            Generate {filedName} Based on Job Description ✨
          </p>
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Generate an Optimized Summary</SheetTitle>
          <SheetDescription>
            We will use AI to create a professional summary tailored to the job
            description you provided. This helps highlight your relevant skills
            and improve your chances with recruiters and applicant tracking
            systems (ATS).
          </SheetDescription>

          <Textarea
            placeholder="Type your job description"
            value={inputValue}
            onChange={handleTextAreaChange}
          />
          <Button
            asChild
            disabled={isPending}
            size="sm"
            className="p-2"
            onClick={() =>
              AiFunction({
                Text: text,
                handleImprove,
                contentType,
              })
            }
          >
            <p className="text-xs md:text-sm text-wrap">
              {isPending ? <Loading /> : "Generate Summary"}
            </p>
          </Button>
          <p className="text-xs md:text-sm text-wrap">Note</p>
          <SheetDescription className="text-xs md:text-sm text-wrap">
            These keywords were extracted from job descriptions. To improve your
            ATS score, include only the ones you've actually used or worked
            with. Add them naturally in your resume—in the skills section, your
            job descriptions, or your summary—to match what recruiters and ATS
            systems are looking for
          </SheetDescription>
        </SheetHeader>

        <ul className="flex items-center px-5 gap-2 flex-wrap max-h-[calc(50vh-110px)] overflow-y-auto">
          {hardSkills}
          {mediumSkills}
          {easySkills}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default ImproveWithAI;
