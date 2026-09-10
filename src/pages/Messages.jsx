import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import ChatWindow from "../components/ChatWindow";

 function Messages() {
  return (
    <DashboardLayout
      role="farmer"
      title="Messages"
      subtitle="Stay connected with everyone in your supply chain."
    >
      <ChatWindow />
    </DashboardLayout>
  );
}

export default Messages;