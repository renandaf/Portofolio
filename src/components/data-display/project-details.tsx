"use client";
import Image from "next/image";
import { Gamepad,Github  } from "lucide-react";
import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";
import Button from "../general/button";
import YouTubePlayer from "@/components/general/youtube-player";

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};

const ProjectDetails = ({
  name,
  description,
  list,
  url,
  youtube,
  github,
  layoutType = "default",
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-full flex-col md:flex-row">
      {/* Video */}

      <div
        className={mergeClasses(
          "flex items-center justify-center border-gray-700 bg-gray-800 p-8 max-md:rounded-t-xl md:w-1/2 lg:p-8",
          layoutType === "default"
            ? "md:rounded-l-xl md:border-r"
            : "md:order-last md:rounded-r-xl md:border-l"
        )}
      >
        {youtube ? (
          <YouTubePlayer url={youtube} />
        ) : (
          <Typography variant="h1" className="font-semibold text-gray-500">
            Coming Soon
          </Typography>
        )}
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          "flex flex-col gap-2 p-6 md:w-1/2 lg:px-12 lg:py-8",
          layoutType === "default" ? "" : "md:order-first"
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-black">
          {name}
        </Typography>
        <Typography className="text-gray-300">{description}</Typography>
        <Typography className="font-bold text-gray-100">Features :</Typography>
        <ul className="mb-5 ml-8 flex list-disc flex-col gap-2 text-gray-300 md:gap-1">
          {list?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
        <Button
          className="px-4 py-1.5 font-medium text-gray-1000 transition-colors duration-200 hover:bg-red-500 active:bg-red-400 bg-red-400"
          onClick={() => {
            window.location.href = url;
          }}
        >
          Play the demo
          <Gamepad className="ml-2 stroke-gray-1000" />
        </Button>
        {github ?  <Button
          className=" px-4 py-1.5 font-medium text-gray-1000 transition-colors duration-200 hover:bg-indigo-500 active:bg-indigo-400 bg-indigo-400"
          onClick={() => {
            window.location.href = github;
          }}
        >
          Full Code
          <Github className="ml-2 stroke-gray-1000" />
        </Button>: <></>}
      </div>
    </Card>
  );
};

export default ProjectDetails;
