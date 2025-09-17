import Image from "next/image";

import { ToolsDetails as ToolsDetailsProps } from "@/lib/types";
import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";
import HoverVideoPlayer from "react-hover-video-player";
import Link from "next/link";

const ToolsDetails = ({
  title,
  video,
  tools,
  update,
  reference,
  id,
}: ToolsDetailsProps) => {
  return (
    <Card
      className="mx-auto flex transform flex-col gap-3 p-6 transition-transform duration-300 hover:scale-105 md:w-1/3 md:p-8 lg:w-1/3"
      id={id.toString()}
    >
      <Typography
        variant="body1"
        className="text-center font-medium text-gray-100"
      >
        <b>{title}</b>
      </Typography>
      {video != "" ? (
        <div>
          <HoverVideoPlayer
            loop={false}
            restartOnPaused
            playbackRangeStart={0.8}
            hoverTarget={() => document.getElementById(id.toString())}
            videoSrc={video}
            // pausedOverlay={
            //   <img
            //     src="thumbnail-image.jpg"
            //     alt=""
            //     style={{
            //       // Make the image expand to cover the video's dimensions
            //       width: '100%',
            //       height: '100%',
            //       objectFit: 'cover',
            //     }}
            //   />
            // }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
          <Typography className="text-gray-300">{tools} {reference != "" ? ( <Link className="text-sky-600 underline" href={reference}>(Reference)</Link>) : ("")} </Typography>    
            {update != "" ? ( <div>
            <Typography className="font-semibold text-gray-100 mt-2">
              Future Update:{" "}
            </Typography>
            <Typography className="text-gray-300">{update}</Typography>
          </div>) : (<div></div>)}        
        </div>
      ) : (
        <div>
          <ul className="flex list-disc flex-col gap-2 md:gap-1 text-gray-300 ml-8 mb-5">             
           <li>
              Fully Procedural Grass Shader using GPU Instancing (<Link className="text-sky-600 underline" href="https://github.com/Youssef-Afella/UnityURP-InfiniteGrass">Reference</Link>)   
            </li>          
           <li>
              Outline shader (<Link className="text-sky-600 underline" href="https://www.youtube.com/watch?v=LMqio9NsqmM">Reference</Link>)   
            </li>            
           <li>
              Toons shader (<Link className="text-sky-600 underline" href="https://roystan.net/articles/toon-shader/">Reference</Link>)   
            </li>   
             <li>
              Procedural terrain generation (<Link className="text-sky-600 underline" href="https://youtube.com/playlist?list=PLFt_AvWsXl0eBW2EiBtl_sxmDtSgZBxB3&si=vJfCIW0FxJanGwfz">Reference</Link>)   
            </li>       
        </ul>
        </div>
      )}
    </Card>
  );
};

export default ToolsDetails;
