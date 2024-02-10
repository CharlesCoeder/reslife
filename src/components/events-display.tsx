import React from "react";
import EventCard from "./event-card";
import { sampleEvents } from "@/lib/sampleEvents";

export default function EventsDisplay() {
  return (
    <div className="flex flex-wrap justify-center items-stretch">
      {sampleEvents.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}
