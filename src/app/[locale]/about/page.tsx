import { redirect } from "next/navigation"
import { useLocale } from "next-intl"

export default function Page() {
  redirect("/" + useLocale())
}
