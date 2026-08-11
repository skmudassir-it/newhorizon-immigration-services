import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";

export function FaqSection({
  faqs,
  id,
}: {
  faqs: { q: string; a: string }[];
  id?: string;
}) {
  return (
    <Reveal id={id}>
      <div className="glass-card mx-auto max-w-3xl rounded-3xl p-2">
        <Accordion defaultValue={["0"]}>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={String(i)} className="px-4 not-last:border-b not-last:border-[rgba(14,90,93,0.1)]">
              <AccordionTrigger className="min-h-11 py-4 text-[15px] font-semibold text-[#0f2b30]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-[#547075]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Reveal>
  );
}
