import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface ClassInfoProps {
  title: string
  description: string
  icon: ReactNode
  schedule: string
}

export default function ClassInfo({ title, description, icon, schedule }: ClassInfoProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-neutral-100 p-3 rounded-full">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex items-center text-neutral-500 text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{schedule}</span>
        </div>
      </CardContent>
    </Card>
  )
}

