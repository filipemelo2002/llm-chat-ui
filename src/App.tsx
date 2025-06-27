import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import ChatHistory from "./components/ChatHistory/chat-history";

function App() {
  return (
    <SidebarProvider>
      <ChatHistory />
      <SidebarInset>
        <SidebarTrigger />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
