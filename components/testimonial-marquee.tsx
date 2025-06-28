"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "MidasCreed has transformed our business with their innovative solutions. Their team is professional and delivers exceptional results.",
    author: "Sarah Johnson",
    company: "TechStart Africa",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    quote:
      "The AR solutions provided by MidasCreed have revolutionized how we interact with our customers. Truly cutting-edge technology.",
    author: "Michael Chen",
    company: "Digital Innovations",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    quote:
      "Working with MidasCreed on our Web3 integration was seamless. Their expertise in blockchain technology is outstanding.",
    author: "David Mwangi",
    company: "Future Finance",
    img: "https://avatar.vercel.sh/david",
  },
  {
    quote:
      "The web design team at MidasCreed created a beautiful, functional website that perfectly represents our brand.",
    author: "Lisa Banda",
    company: "Creative Solutions",
    img: "https://avatar.vercel.sh/lisa",
  },
  {
    quote:
      "Their AI solutions have significantly improved our operational efficiency. We couldn't be happier with the results.",
    author: "James Phiri",
    company: "Smart Systems",
    img: "https://avatar.vercel.sh/james",
  },
  {
    quote: "The team at MidasCreed went above and beyond to deliver a product that exceeded our expectations.",
    author: "Grace Mutale",
    company: "Innovate Malawi",
    img: "https://avatar.vercel.sh/grace",
  },
]

const firstRow = testimonials.slice(0, 3)
const secondRow = testimonials.slice(3)

const TestimonialCard = ({
  img,
  author,
  company,
  quote,
}: {
  img: string
  author: string
  company: string
  quote: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4",
        "border-gray-50/[.1] bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image className="rounded-full" width="40" height="40" alt={author} src={img || "/placeholder.svg"} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{author}</figcaption>
          <p className="text-xs font-medium text-white/60">{company}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-300">{quote}</blockquote>
    </figure>
  )
}

export function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-6">
      {/* First Row - Moving Left */}
      <div className="group flex overflow-hidden w-full [--gap:1rem]">
        <div className="flex testimonial-slider-left shrink-0 gap-[--gap] py-4 group-hover:[animation-play-state:paused]">
          {/* First set */}
          {firstRow.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              img={testimonial.img}
              author={testimonial.author}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
          {/* Second set */}
          {firstRow.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.author}-copy-1`}
              img={testimonial.img}
              author={testimonial.author}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
          {/* Third set for seamless loop */}
          {firstRow.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.author}-copy-2`}
              img={testimonial.img}
              author={testimonial.author}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>

      {/* Second Row - Moving Right */}
      <div className="group flex overflow-hidden w-full [--gap:1rem]">
        <div className="flex testimonial-slider-right shrink-0 gap-[--gap] py-4 group-hover:[animation-play-state:paused]">
          {/* First set */}
          {secondRow.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              img={testimonial.img}
              author={testimonial.author}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
          {/* Second set */}
          {secondRow.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.author}-copy-1`}
              img={testimonial.img}
              author={testimonial.author}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
          {/* Third set for seamless loop */}
          {secondRow.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.author}-copy-2`}
              img={testimonial.img}
              author={testimonial.author}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  )
}
