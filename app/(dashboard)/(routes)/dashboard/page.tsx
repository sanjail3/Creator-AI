
"use client";

import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card,CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";



const tools = [
  {
    label: 'Youtube',
    icon: VideoIcon,
    href: '/youtube',
    color: "text-indigo-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Instagram',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/instagram',
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'LinkedIn',
    icon: MessageSquare,
    color: "text-orange-700",
    href: '/linkedin',
    bgColor: "bg-pink-700/10",
    
  },
  {
    label: 'X(Twitter)',
    icon: Music,
    color: "text-emerald-500",
    href: '/x',
    bgColor: "bg-orange-700/10",
   
  },
  {
    label: 'Analyse AI',
    icon: Code,
    color: "text-green-700",
    href: '/analyse-ai',
    bgColor: "bg-green-700/10",
    
  },
 
];






export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />

            

          </Card>
        ))}
      </div>
    </div>
  );
}