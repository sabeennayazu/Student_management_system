"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: number;
  message: string;
  date: string;
  read: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message:
        "Your Robotics Fundamentals exam is scheduled for Sept 10, 2025 at 10:00 AM.",
      date: "2025-09-01",
      read: false,
    },
    {
      id: 2,
      message:
        "Group Robotics Project deadline is extended to Sept 15, 2025.",
      date: "2025-08-31",
      read: false,
    },
    {
      id: 3,
      message: "Your Electronics midterm result has been published.",
      date: "2025-08-28",
      read: true,
    },
    {
      id: 4,
      message:
        "School will remain closed on Sept 5, 2025 due to a public holiday.",
      date: "2025-08-27",
      read: false,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Notifications</h1>
          {notifications.length > 0 && (
            <Button
              onClick={clearAll}
              className="bg-red-500 hover:bg-red-600 text-white"
              size="sm"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Empty State */}
        {notifications.length === 0 ? (
          <p className="text-gray-600">No new notifications.</p>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => {
              const preview =
                notification.message.length > 80
                  ? notification.message.slice(0, 80) + "..."
                  : notification.message;

              return (
                <div
                  key={notification.id}
                  className={`block p-5 bg-white rounded-lg shadow-sm border-l-4 transition cursor-pointer hover:shadow-md ${
                    notification.read
                      ? "border-gray-400 opacity-75"
                      : "border-blue-500"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <p className="text-sm text-gray-800">{preview}</p>
                    {!notification.read && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-600 border-blue-300 hover:bg-blue-50 ml-4"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark as Read
                      </Button>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 mt-2 block">
                    {notification.date}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
