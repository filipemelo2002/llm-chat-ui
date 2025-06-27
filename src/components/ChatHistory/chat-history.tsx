import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SquarePen } from "lucide-react";
import { ChatHistoryItem } from "./chat-history-item";

const ChatHistory = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuButton tooltip="Create new chat">
            <SquarePen />
            <span>Create new chat</span>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Chat History</SidebarGroupLabel>
          <ChatHistoryItem items={[{id: "id-1", label: "how to use this model..."}]}/>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default ChatHistory;
