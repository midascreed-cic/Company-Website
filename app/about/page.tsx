import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12 mt-16">
      <div className="mx-auto max-w-[800px] space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About MidasCreed</h1>
          <p className="text-xl text-muted-foreground">A Touch of Your Future Today</p>

          {/* Floating Crown Image */}
          <div className="flex justify-center py-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
              <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
              <Image
                src="/images/midas-logo.png"
                alt="MidasCreed Digital Crown"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(0,98,255,0.2)]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            MidasCreed was founded with a vision to transform businesses across Malawi and Africa through emerging
            technologies. What sets us apart is our deep understanding of both global tech trends and local challenges. We don't just build digital products — we research, innovate, and tailor technology to solve real-world problems within African communities and businesses..
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            To empower businesses and communities through innovative technological solutions, making cutting-edge
            technology accessible and beneficial for all.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Why Choose MidasCreed</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold">Local Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of the local market and its unique challenges
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold">Innovation First</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge solutions using the latest technologies</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated to delivering value and exceeding expectations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold">Sustainable Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to creating lasting positive change in our communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Leaders</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Joshua Phiri"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                  <h3 className="mt-4 font-semibold">Joshua Phiri</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Mallick Mnela"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                  <h3 className="mt-4 font-semibold">Mallick Mnela</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="To Be Announced"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full opacity-50"
                  />
                  <h3 className="mt-4 font-semibold text-gray-500">TBA</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
