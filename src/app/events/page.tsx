import React from "react";
import EventsDisplay from "@/components/events-display";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <div>
      <PageHeader>Upcoming Events</PageHeader>
      <EventsDisplay />
    </div>
  );
}
