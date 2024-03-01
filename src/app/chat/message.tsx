import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type MessageProps = {
  content: string;
  sender_name: string;
  avatar: string;
};

export default function Message({
  content,
  sender_name,
  avatar,
}: MessageProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center">
        <Avatar>
          <AvatarImage src={avatar} alt="Avatar" />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
        <div>{sender_name}</div>
      </div>
      <div className="bg-gray-200 rounded-full pt-2 pb-2 pl-3 pr-3">
        {content}
      </div>
    </div>
  );
}
