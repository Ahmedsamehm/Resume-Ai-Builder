import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { format, parseISO } from "date-fns";

import { useDeleteResume } from "./useFetchResumesData";
import { Loader2 } from "lucide-react";
const ResumeCard = ({ title, description, id, index }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { DeleteResumeCard, isPending } = useDeleteResume();
  const navigate = useNavigate();
  const formattedDate = format(parseISO(description), "yyyy-MM-dd");
  const getIdCard = () => {
    searchParams.set("ResumeId", id);
    setSearchParams(searchParams);
    navigate(`/Resume/${id}`);
  };

  const HandelDeleteResume = (id) => {
    DeleteResumeCard(id);
  };
  return (
    <Card
      key={index}
      className="cursor-pointer  text-center min-h-[calc(20vh-50px)] hover:ease-in-out hover:scale-105 transition-all duration-300  hover:animate-fade-in "
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          onClick={() => {
            getIdCard();
          }}
        >
          Action
        </Button>

        <Button
          variant="destructive"
          onClick={() => {
            HandelDeleteResume(id);
          }}
          disabled={isPending}
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Delete"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeCard;
