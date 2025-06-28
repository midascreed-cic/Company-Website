"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react"

const services = [
  {
    title: "AI Solutions",
    description: "Research, design, deploy AI Systems",
    href: "/services/ai",
  },
  {
    title: "AR Experience",
    description: "Immersive augmented reality solutions",
    href: "/services/ar",
  },
  {
    title: "Web3 Exploration",
    description: "Blockchain and decentralized applications",
    href: "/services/web3",
  },
  {
    title: "Business automation",
    description: "Functional systems that automate workflows",
    href: "/services/web-design",
  },
]

const company = [
  {
    title: "About Us",
    description: "Our story and mission",
    href: "/about",
  },
  {
    title: "Team",
    description: "Meet our experts",
    href: "/about/team",
  },
  {
    title: "Contact",
    description: "Get in touch",
    href: "/contact",
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      // Update scroll position
      setLastScrollY(currentScrollY)

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300 left-0 right-0",
        "nav-gradient", // Ensure this class is always applied
        isScrolled && "shadow-lg",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 mx-auto w-full max-w-[1200px]">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 animate-float-logo">
            <Image
              src="/images/midas-logo.png"
              alt="MidasCreed Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            />
          </div>
          <span className="text-xl font-semibold text-white hidden sm:inline">MidasCreed</span>
        </Link>
        <div className="flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="glow-effect">Our Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[250px] gap-1 p-4">
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="glow-effect">Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[250px] gap-1 p-4">
                    {company.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li className="w-full">
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href ?? "#"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
