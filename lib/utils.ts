import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format WhatsApp link with message
export function formatWhatsAppLink(message: string): string {
  // Use the provided WhatsApp number
  const phoneNumber = "6281563104864"

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message)

  // Return the WhatsApp link
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

