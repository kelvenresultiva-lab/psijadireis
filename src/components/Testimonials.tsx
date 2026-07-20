import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import Reveal from "@/components/Reveal";
import DragScroll from "@/components/DragScroll";

export default function Testimonials() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {testimonials.title}
          </h2>
        </Reveal>
      </div>

      <Reveal direction="up" delay={100} className="mt-16">
        <DragScroll className="gap-6 px-6 sm:px-[max(1.5rem,calc((100%-1140px)/2))]">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              className="flex w-[78vw] max-w-[360px] shrink-0 flex-col gap-4 border border-line bg-white p-8 sm:w-[calc((100%-3rem)/3)]"
            >
              <div className="flex gap-1 text-gold-bright">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-heebo text-sm font-light leading-relaxed text-ink/80">
                “{item.text}”
              </p>
              <span className="font-lato text-sm font-light text-muted">
                {item.name}
              </span>
            </div>
          ))}
        </DragScroll>
      </Reveal>
    </section>
  );
}
