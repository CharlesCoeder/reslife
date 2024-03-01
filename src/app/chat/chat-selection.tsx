import React from "react";
import { Separator } from "@/components/ui/separator";
import { sampleGroups } from "@/lib/sampleChat";

export default function ChatSelection() {
  return (
    <div className="h-[80vh] flex-col p-6">
      <h2 className="font-bold text-2xl">Chats</h2>
      <Separator />
      <div>
        <ul>
          {sampleGroups.map((groupName) => (
            <li className="" key={groupName}>
              {groupName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
