import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WebDesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="border-beam absolute inset-0" />
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Business Automation</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Streamline your operations with intelligent automation solutions that reduce manual tasks, minimize
                errors, and allow your team to focus on high-value activities that drive growth.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/web-design.jpeg"
                alt="Business Automation"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects We've Delivered</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-beam overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image
                    src="/images/projects/lauryn-booking-system.png"
                    alt="Lauryn Luxe Beauty Studio Booking System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Lauryn Luxe Beauty Studio</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  A smart booking and payment automation system for Lauryn Luxe Beauty Studio, streamlining client
                  appointments and transactions.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://laurynluxebeautystudio.com/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            {[2, 3].map((project) => (
              <Card key={project} className="border-beam overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Automation+Project+${project}`}
                      alt={`Automation Project ${project}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">Automation Project {project}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    We implemented an automated workflow system for a logistics company, resulting in a 50% reduction in
                    processing time and improved operational efficiency.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business Processes?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's create intelligent automation solutions that transform your operations and boost productivity.
          </p>
          <Button asChild size="lg" className="button-glow">
            <Link href="/contact">Contact Us for More Information</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
