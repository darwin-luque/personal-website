import {
  HelpingHand,
  HeartHandshake,
  DraftingCompass,
  ChevronRightIcon,
} from "lucide-react";

export const AboutMe = () => {
  return (
    <div className="container py-12 lg:py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="lg:w-3/4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Welcome to my portfolio
          </h2>
          <p className="mt-3 text-muted-foreground">
            I am a software engineer who loves to build things. I have a
            background in software development and have been working in the
            industry for over {new Date().getFullYear() - 2021} years. I have
            experience in building web applications, mobile applications, and
            APIs. I am passionate about technology and enjoy learning new
            things. I am always looking for new challenges and opportunities to
            grow.
          </p>
          <p className="mt-5">
            <span className="group inline-flex items-center gap-x-1 font-medium underline-offset-4">
              See my core values
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
              <h3 className="text-base font-semibold sm:text-lg">Humble</h3>
              <p className="mt-1 text-muted-foreground">
                I value humility, embracing a mindset of openness, continuous
                learning, and self-awareness. It&apos;s about recognizing our
                strengths while staying grounded and respectful of others.
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border  bg-primary text-primary-foreground">
              <HelpingHand className="h-5 w-5 flex-shrink-0" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base font-semibold sm:text-lg">
                Help others
              </h3>
              <p className="mt-1 text-muted-foreground">
                I prioritize helping others, striving to make a positive impact in
                both professional and personal settings. Whether through
                mentorship, volunteering, or collaboration, I believe in lifting
                others up and fostering a supportive community.
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground">
              <DraftingCompass className="h-5 w-5 flex-shrink-0" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base font-semibold sm:text-lg">Mastery</h3>
              <p className="mt-1 text-muted-foreground">
                I pursue mastery, dedicating myself to continuous improvement,
                innovation, and excellence in my craft. It&apos;s about pushing
                boundaries, honing skills, and striving for the highest level of
                proficiency and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
