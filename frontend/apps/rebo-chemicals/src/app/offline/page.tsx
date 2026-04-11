import { WifiOff } from "lucide-react"
import { Button, EmptyState } from "@grafiesto/ui"

export const metadata = { title: "Offline" }

export default function OfflinePage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <EmptyState
        icon={<WifiOff className="h-6 w-6" />}
        title="You are offline"
        description="Check your connection and try again. Some cached pages may still be available."
        action={
          <Button onClick={() => (typeof window !== "undefined" ? window.location.reload() : null)}>
            Retry
          </Button>
        }
      />
    </div>
  )
}
