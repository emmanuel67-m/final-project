import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import ChatWindow from "../components/ChatWindow";

 function Messages() {
  const session = JSON.parse(localStorage.getItem("easyeasy_session") || "null");
  const role = session?.role || "farmer";

  return (
    <DashboardLayout
      role={role}
      title="Messages"
      subtitle="Stay connected with everyone in your supply chain."
    >
      <ChatWindow role={role} />
    </DashboardLayout>
  );
}

export default Messages;