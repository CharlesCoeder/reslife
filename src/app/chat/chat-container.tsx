import React from "react";
import ChatSelection from "./chat-selection";
import Messages from "./messages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ChatContainer() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg max-w-6xl border mr-8 ml-8 mb-4"
    >
      <ResizablePanel defaultSize={25}>
        <ChatSelection />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full items-center justify-center p-6">
              <Messages />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={20}>
            <div className="flex h-full items-center justify-center p-6">
              Message Input
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
