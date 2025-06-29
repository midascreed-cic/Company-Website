import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function AIIntegrationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated backgrounds */}
      <StarsBackground className="z-0" />
      <ShootingStars className="z-0" />
      
      <div className="flex flex-col min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">AI Infrastructure</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Building scalable, reliable, and efficient AI infrastructure to support real-time data processing, model
                  deployment, and advanced analytics—laying the foundation for transformative intelligence in your
                  business.
                </p>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ai-infrastructure.png"
                  alt="AI Infrastructure"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects We've Delivered</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-beam overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/images/anitta-ai-project.png"
                      alt="Anitta AI Project"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">Anitta AI</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    An empathic voice interface project featuring a warm, emotionally intelligent AI therapist for youth.
                    Anitta is designed to listen actively, respond with empathy, and support teenagers and young adults
                    (ages 13-24) who are experiencing emotional struggles, stress, or confusion.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://hume-evi-next-js-starter-ruddy.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-beam overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/images/projects/ai-predictive-maintenance.jpg"
                      alt="AI Predictive Maintenance"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">AI Predictive Maintenance</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    AI-Predictive-Maintenance-Hydro is a full-stack project that simulates sensor data for hydro station
                    maintenance, leveraging AI to detect faults early, optimize operations and reduce downtime.
                  </p>
                  <Button variant="outline" size="sm">
                    <a
                      href="https://github.com/midascreed-cic/AI-Predictive-Maintenance-Hydro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-beam overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=AI+Project+3"
                      alt="AI Project 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">AI Project 3</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    We implemented an AI-powered chatbot for a leading e-commerce platform, resulting in a 30% reduction
                    in customer service inquiries and improved user satisfaction.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Integrate AI into Your Business?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how our AI solutions can transform your operations and drive growth.
            </p>
            <Button asChild size="lg" className="button-glow">
              <Link href="/contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
