"use client"

import { useActionState, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact"
import { VanishInput } from "@/components/ui/vanish-input"

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [shouldVanishInputs, setShouldVanishInputs] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const hasSubmittedSuccessfully = state && state.success;
  const hasSubmissionError = state && state.success === false;

  useEffect(() => {
    if (isPending) {
      setShouldVanishInputs(true);
    } else {
      setShouldVanishInputs(false); // Reset vanish when no longer pending
      if (state && state.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    }
  }, [isPending, state]); // Depend on isPending and state object itself

  return (
    <div>
      <form action={action} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <VanishInput
            id="first-name"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            shouldVanish={shouldVanishInputs}
          />
          <VanishInput
            id="last-name"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            shouldVanish={shouldVanishInputs}
          />
        </div>
        <VanishInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          shouldVanish={shouldVanishInputs}
        />
        <VanishInput
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          shouldVanish={shouldVanishInputs}
        />
        <VanishInput
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          isTextarea
          className="min-h-[150px]"
          shouldVanish={shouldVanishInputs}
        />
        <Button type="submit" className="border-beam-hover w-full" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {state && (
        <div
          className={`mt-4 p-4 rounded-md ${
            state.success
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {state.message}
        </div>
      )}
    </div>
  )
}
