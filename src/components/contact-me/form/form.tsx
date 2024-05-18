"use client";

import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, type FC } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { env } from "@/env";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export const ContactMeForm: FC = () => {
  const t = useTranslations("contactMe.form");
  const params = useSearchParams();
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: params.get("email") ?? "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setIsPending(true);
    await emailjs
      .send(
        env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          limitRate: {
            id: "contact me",
            throttle: 1000,
          },
        },
      )
      .then(() => toast(t("messageSent")))
      .catch((error) => {
        console.error(error);
        toast(t("messageSentError"));
      });

    form.reset();
    setIsPending(false);
  });

  return (
    <Card className="w-full max-w-4xl space-y-8">
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{t("title")}</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              {t("description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>{t("name")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("namePlaceholder")} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("emailPlaceholder")}
                        type="email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>{t("subject")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("subjectPlaceholder")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder={t("messagePlaceholder")}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button disabled={isPending} size={isPending ? "icon" : "default"}>
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t("sendMessage")
              )}
            </Button>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
};
