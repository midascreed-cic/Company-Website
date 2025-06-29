import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Michael Lumanga",
    role: "Co-Founder & DevOps Lead Engineer",
    bio: "Michael leads MidasCreed's DevOps strategies, ensuring seamless integration and operational excellence across all our technology platforms.",
    image: "/images/Michael-Lumanga.png",
    linkedin: "https://www.linkedin.com/in/michaelslumanga",
  },
  {
    name: "Conrad Zidana",
    role: "Chief Technology Officer",
    bio: "Conrad brings cutting-edge AI and blockchain expertise to MidasCreed, driving our technological advancements and innovation initiatives.",
    image: "/images/Conrad-Zidana.png",
    linkedin: "https://www.linkedin.com/in/conrad-zidana-94554b21b",
  },
  {
    name: "Takondwa Namalima",
    role: "Strategic Partnerships & Grants Lead",
    bio: "Takondwa spearheads MidasCreed's global impact strategy, forging high-value partnerships and securing transformative grants to power our SDG and innovation-driven initiatives.",
    image: "/Takondwa.png",
    linkedin: "https://www.linkedin.com/in/takondwa-namalima-8a0159252/",
  },
  {
    name: "Comfort Kaitane",
    role: "Head of Web App Development",
    bio: "Comfort's creative designs have helped numerous businesses establish strong online presences and brand identities.",
    image: "/images/Comfort-Kaitane.png",
    linkedin: "#",
  },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 mt-16">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 opacity-50" />
        <div className="border-beam absolute inset-0" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Meet the Team Behind MidasCreed
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">A touch of your future today</p>
        </div>
      </section>

      {/* Team Member Profiles */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-beam overflow-hidden transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    {/* Professional background with consistent gradient */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-900 to-gray-900"></div>

                    {/* Team member image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className={`object-cover object-top${member.name === "Takondwa Namalima" ? " !object-center scale-110" : ""}`}
                          sizes="160px"
                        />
                      </div>
                    </div>

                    {/* Border effect */}
                    <div className="absolute inset-0 rounded-full border-4 border-blue-400 dark:border-blue-600"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex justify-center">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Want to work with the MidasCreed team?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get in touch with us today and let's create something amazing together!
          </p>
          <Button asChild size="lg" className="button-glow blue-gradient">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
