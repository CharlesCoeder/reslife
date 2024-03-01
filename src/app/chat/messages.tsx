import React from "react";
import Message from "./message";
import { sampleMessages } from "@/lib/sampleChat";

export default function Messages() {
  return (
    <div className="flex flex-col gap-4">
      {sampleMessages.map((message) => {
        const { content } = message;
        return (
          <Message
            content={content}
            sender_name="Charlie Roeder"
            avatar="https://github.com/shadcn.png"
          />
        );
      })}
    </div>
  );
}
