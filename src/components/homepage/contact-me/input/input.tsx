"use client";

import { z } from "zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "@/lib/i18n";
import { ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../../../ui/input";

const formSchema = z.object({
  email: z.string().email(),
});

export const ContactMeInput: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/contact-me?email=" + values.email);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative z-10 flex space-x-3 rounded-lg border bg-background p-3 shadow-lg"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-[1_0_0%] items-center space-y-0">
              <FormLabel htmlFor="email" className="sr-only">
                Contact me
              </FormLabel>
              <FormControl className="p-0 m-0">
                <Input
                  className="h-full m-0 py-0 pl-2 border-none"
                  placeholder="darwin.luque.98@gmail.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex-[0_0_auto]">
          <Button type="submit" size="icon">
            <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
};
