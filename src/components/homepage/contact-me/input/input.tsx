"use client";

import { z } from "zod";
import type { FC } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
});

export const ContactMeInput: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    void router.push("/contact-me?email=" + values.email);
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
              <FormControl className="m-0 p-0">
                <Input
                  className="m-0 h-full border-none py-0 pl-2"
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
