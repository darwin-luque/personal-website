import {
  HelpingHand,
  HeartHandshake,
  DraftingCompass,
  ChevronRightIcon,
} from "lucide-react";
import {
  humble,
  mastery,
  helpOthers,
  aboutMeWelcome,
  seeMyCoreValues,
  humbleDescription,
  masteryDescription,
  aboutMeDescription,
  helpOthersDescription,
} from "@/paraglide/messages";

export const AboutMe = () => {
  return (
    <div className="container py-12 lg:py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="lg:w-3/4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {aboutMeWelcome()}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {aboutMeDescription({
              plusYears: new Date().getFullYear() - 2021,
            })}
          </p>
          <p className="mt-5">
            <span className="group inline-flex items-center gap-x-1 font-medium underline-offset-4">
              {seeMyCoreValues()}
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1" />
            </span>
          </p>
        </div>
        <div className="space-y-6 lg:space-y-10">
          <div className="flex">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground">
              <HeartHandshake className="h-5 w-5 flex-shrink-0" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base font-semibold sm:text-lg">{humble()}</h3>
              <p className="mt-1 text-muted-foreground">
                {humbleDescription()}
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border  bg-primary text-primary-foreground">
              <HelpingHand className="h-5 w-5 flex-shrink-0" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base font-semibold sm:text-lg">
                {helpOthers()}
              </h3>
              <p className="mt-1 text-muted-foreground">
                {helpOthersDescription()}
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground">
              <DraftingCompass className="h-5 w-5 flex-shrink-0" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base font-semibold sm:text-lg">
                {mastery()}
              </h3>
              <p className="mt-1 text-muted-foreground">
                {masteryDescription()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
