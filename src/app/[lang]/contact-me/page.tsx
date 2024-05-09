import { ContactMeForm } from "@/components/contact-me/form";
import type { ParamsWithLang } from "@/lib/types";
import { getDictionary } from "../../../lib/dictionaries";

export default async function ContactMePage({
  params,
}: {
  params: ParamsWithLang;
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="flex flex-1 items-center justify-center">
      <ContactMeForm dict={dict} />
    </main>
  );
}
