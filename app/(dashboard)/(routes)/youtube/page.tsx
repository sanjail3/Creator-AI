import React from "react";

import Image from "next/image";

import { BellRing, Check } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"


const tools = [
  {
    label: 'Youtube',
    
    href: '/youtube',
    color: "text-violet-500",
    bgColor: "bg-red",

    messages: [
      {
        title: "Create Youtube Video",
        description: "in short",
      },
      {
        title: "Generate Script",
        description: "let me write",
      },
      {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
      },
    ]
  },
  {
    label: 'Instagram',
   
    href: '/instagram',
    color: "text-emerald-500",
    bgColor: "bg-pink",
    messages: [
      {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
      },
      {
        title: "You have a new message!",
        description: "1 hour ago",
      },
      {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
      },
    ]
  },
  {
    label: 'LinkedIn',
    
    color: "text-pink-700",
    bgColor: "bg-blue",
    href: '/linkedin',
    messages: [
      {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
      },
      {
        title: "You have a new message!",
        description: "1 hour ago",
      },
      {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
      },
    ]
  },
  {
    label: 'X',
  
    color: "text-orange-700",
    bgColor: "bg-white",
    href: '/twitter',
    messages: [
      {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
      },
      {
        title: "You have a new message!",
        description: "1 hour ago",
      },
      {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
      },
    ]
  },
  
];



export default function App() {
  

  

  return (
    <div className=" pl-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      {tools.map((tool, index) => (
        <Card key={index}  className={cn("w-[380px]", tool.bgColor)} >
        <CardHeader>
          <CardTitle>{tool.label}</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {tool.messages.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" />Check Now
          </Button>
        </CardFooter>
      </Card>
      ))}
    </div>
  );
}
