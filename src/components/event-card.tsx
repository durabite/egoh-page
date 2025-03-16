import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
  title: string
  date: string
  location: string
  image: string
  availableSpots: number
}

export default function EventCard({ title, date, location, image, availableSpots }: EventCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="space-y-2 text-sm text-neutral-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span>{availableSpots} lugares disponibles</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-neutral-50 p-6">
        <Link href="#registro" className="w-full">
          <Button className="w-full bg-neutral-800 hover:bg-neutral-700">Participar</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

