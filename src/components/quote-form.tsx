"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { services, type Service } from "@/lib/data";
import { quoteSchema, type QuoteInput } from "@/lib/quote-schema";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function QuoteForm({ defaultService }: { defaultService?: Service["slug"] }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: defaultService ?? "" },
  });

  const serviceValue = watch("service") || undefined;

  async function onSubmit(values: QuoteInput) {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Request received!", {
          description: "A consultant will reach out within one business day.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: data.error ?? "Please try again in a moment.",
        });
      }
    } catch {
      toast.error("Network error", {
        description: "Could not reach the server. Please try again.",
      });
    }
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-input bg-white/70 px-4 text-[15px] shadow-sm backdrop-blur-md transition-colors placeholder:text-[#8aa3a6] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none aria-invalid:border-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-[#0f2b30]">
            Full name
          </Label>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={inputClass}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="text-xs font-medium text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-[#0f2b30]">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="text-xs font-medium text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-semibold text-[#0f2b30]">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p role="alert" className="text-xs font-medium text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-semibold text-[#0f2b30]">
            Service of interest
          </Label>
          <Select
            value={serviceValue}
            onValueChange={(value) => setValue("service", value ?? "", { shouldValidate: true })}
          >
            <SelectTrigger
              id="service"
              className="h-12 w-full rounded-xl border border-input bg-white/70 px-4 text-[15px] shadow-sm backdrop-blur-md data-placeholder:text-[#8aa3a6]"
            >
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-2xl">
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p role="alert" className="text-xs font-medium text-destructive">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold text-[#0f2b30]">
          Tell us about your case
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Briefly describe your situation, timeline, and any prior filings…"
          className="w-full rounded-xl border border-input bg-white/70 px-4 py-3 text-[15px] shadow-sm backdrop-blur-md placeholder:text-[#8aa3a6] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none aria-invalid:border-destructive"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p role="alert" className="text-xs font-medium text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-gradient h-12 w-full rounded-full text-[15px] font-semibold sm:w-auto sm:px-10"
      >
        {isSubmitting ? (
          <>
            <i className="fa-solid fa-circle-notch animate-spin text-sm" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Request Free Consultation
            <i className="fa-solid fa-paper-plane text-xs" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
