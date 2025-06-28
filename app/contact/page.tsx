import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { StarsBackground } from "@/components/ui/stars-background"
import { ShootingStars } from "@/components/ui/shooting-stars"

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated backgrounds */}
      <StarsBackground className="z-0" />
      <ShootingStars className="z-0" />
      <div className="container py-12 mt-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="border-beam text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-muted-foreground">
              Get in touch with us to discuss how we can help transform your business with emerging technologies.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-secondary" />
                <p>Lilongwe, Malawi</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+265995228264" className="hover:text-primary">
                  +265 995 22 82 64
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@midascreed.com" className="hover:text-primary">
                  info@midascreed.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://x.com/MidasCreed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-effect rounded-full p-2 text-muted-foreground hover:text-primary"
                >
                  <XIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/MidasCreed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-effect rounded-full p-2 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <Card className="border-beam">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
