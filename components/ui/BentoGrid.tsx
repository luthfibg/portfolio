'use client';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import dynamic from "next/dynamic";
// import Lottie from "react-lottie";
import { useState, useEffect, useRef } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Pastikan ini hanya dijalankan di client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Jangan render apa pun di server-side
  }

  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const lottieRef = useRef<any>(null); // Use a ref to access the Lottie instance

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        navigator.clipboard.writeText("luthfinewzoneonline@gmail.com");
        setCopied(true);

        // Play the animation when copied
        if (lottieRef.current) {
          lottieRef.current.play();
        }
      } catch (err) {
        console.error("Failed to copy text", err);
      }
    }
  };


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{ 
        background: 'rgb(4, 7, 29)',
        backgroundColor: 
        'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn("object-cover, object-center", imgClassName)}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.js', 'Next.js', 'Typescript'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white-200 dark:bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-white-200 dark:bg-[#10132E]"/>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-white-200 dark:bg-[#10132E]"/>
              {['MySQL', 'Express.js', 'Golang'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-white-200 dark:bg-[#10132E]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 6 && isClient && (
        <div className="relative mt-5">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie
              lottieRef={lottieRef}
              loop={false}
              autoplay={false}
              animationData={animationData}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
              }}
            />
          </div>
          <MagicButton
            title={copied ? 'Email Disalin' : 'Salin Email Saya'}
            icon={<IoCopyOutline/>}
            position="left"
            otherClasses="`bg-[#161a31]`"
            handleClick={handleCopyEmail}
          />
        </div>
        )}
      </div>
    </div>
    </div>
  );
};
