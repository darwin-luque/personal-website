import {
  Award,
  Shuffle,
  ShipWheel,
  HandHeart,
  Handshake,
  BrainCircuit,
} from "lucide-react";
import type { FC } from "react";
import { ContactMeInput } from "./input";
import {
  authentic,
  collaborative,
  driven,
  empathetic,
  innovative,
  invitation,
  letsTalk,
  versatile,
} from "@/paraglide/messages";
import { buttonVariants } from "@/components/ui/button";

export const ContactMe: FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container py-24 lg:py-32">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {letsTalk()}
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{invitation()}</p>
          <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
            <ContactMeInput />
            <div className="absolute end-0 top-0 hidden -translate-y-12 translate-x-20 md:block">
              <svg
                className="h-auto w-16 text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 start-0 hidden -translate-x-32 translate-y-10 md:block">
              <svg
                className="h-auto w-40 text-cyan-500"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-20">
            <p className={buttonVariants({ variant: "outline" })}>
              <HandHeart className="mr-2 h-auto w-3 flex-shrink-0" />
              {empathetic()}
            </p>
            <p className={buttonVariants({ variant: "outline" })}>
              <Shuffle className="mr-2 h-auto w-3 flex-shrink-0" />
              {versatile()}
            </p>
            <p className={buttonVariants({ variant: "outline" })}>
              <BrainCircuit className="mr-2 h-auto w-3 flex-shrink-0" />
              {innovative()}
            </p>
            <p className={buttonVariants({ variant: "outline" })}>
              <Handshake className="mr-2 h-auto w-3 flex-shrink-0" />
              {collaborative()}
            </p>
            <p className={buttonVariants({ variant: "outline" })}>
              <ShipWheel className="mr-2 h-auto w-3 flex-shrink-0" />
              {driven()}
            </p>
            <p className={buttonVariants({ variant: "outline" })}>
              <Award className="mr-2 h-auto w-3 flex-shrink-0" />
              {authentic()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
