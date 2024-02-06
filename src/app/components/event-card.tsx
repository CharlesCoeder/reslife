import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { sampleEvents } from "@/lib/sampleEvents";

type EventCardProps = (typeof sampleEvents)[number];

export default function EventCard({
  name,
  date,
  description,
  imageUrl,
}: EventCardProps) {
  return (
    <Card className="m-4 w-96 bg-white shadow-lg">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={`Image for ${name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <CardHeader className="bg-blue-500 p-4 text-white">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{new Date(date).toDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
