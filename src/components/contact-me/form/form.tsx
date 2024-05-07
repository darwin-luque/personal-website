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
import {
  name,
  email,
  message,
  subject,
  contactMe,
  sendMessage,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  subjectPlaceholder,
  contactMeDescription,
  messageSentError,
  messageSent,
} from "@/paraglide/messages";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export const ContactMeForm: FC = () => {
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
      .then(() => toast(messageSent()))
      .catch((error) => {
        console.error(error);
        toast(messageSentError());
      });

    form.reset();
    setIsPending(false);
  });

  return (
    <Card className="w-full max-w-4xl space-y-8">
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{contactMe()}</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              {contactMeDescription()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>{name()}</FormLabel>
                    <FormControl>
                      <Input placeholder={namePlaceholder()} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>{email()}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={emailPlaceholder()}
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
                  <FormLabel>{subject()}</FormLabel>
                  <FormControl>
                    <Input placeholder={subjectPlaceholder()} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>{message()}</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder={messagePlaceholder()}
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
                sendMessage()
              )}
            </Button>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
};
