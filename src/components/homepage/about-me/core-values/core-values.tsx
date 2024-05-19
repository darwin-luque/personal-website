import { HelpingHand, HeartHandshake, DraftingCompass } from "lucide-react";
import { useTranslations } from "next-intl";
import type { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const getValues = (t: ReturnType<typeof useTranslations<string>>) => [
  {
    id: "humble",
    title: t("humble.title"),
    description: t("humble.description"),
    icon: <HeartHandshake className="h-5 w-5 flex-shrink-0" />,
  },
  {
    id: "helpOthers",
    title: t("helpOthers.title"),
    description: t("helpOthers.description"),
    icon: <HelpingHand className="h-5 w-5 flex-shrink-0" />,
  },
  {
    id: "mastery",
    title: t("mastery.title"),
    description: t("mastery.description"),
    icon: <DraftingCompass className="h-5 w-5 flex-shrink-0" />,
  },
];

export const CoreValues: FC = () => {
  const t = useTranslations("aboutMe");

  return (
    <>
      <div className="hidden space-y-6 lg:inline lg:space-y-10">
        {getValues(t).map(({ id, title, description, icon }) => (
          <div key={id} className="flex">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground">
              {icon}
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
              <p className="mt-1 text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <Accordion type="single" collapsible className="lg:hidden">
        {getValues(t).map(({ id, title, description, icon }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger>
              <div className="flex items-center gap-5">
                <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground">
                  {icon}
                </span>
                <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-1 text-muted-foreground">{description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
