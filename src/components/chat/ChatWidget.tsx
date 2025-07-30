"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Card className="w-[320px] h-[500px] rounded-2xl shadow-2xl flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <h3 className="font-semibold">Support Chat</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
                  <div className="flex gap-2">
                    <div className="bg-muted p-3 rounded-lg rounded-bl-none max-w-[80%]">
                      <p className="text-sm">Hello! How can I help you with your agricultural needs today?</p>
                    </div>
                  </div>
                   <div className="flex gap-2 justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-br-none max-w-[80%]">
                      <p className="text-sm">I have a question about fungicides.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <div className="flex w-full items-center gap-2">
                    <Input placeholder="Type a message..." className="rounded-full" />
                    <Button size="icon" className="rounded-full flex-shrink-0 bg-black text-white hover:bg-gray-800">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 left-5 z-40"
      >
        <Button
          className="rounded-full h-14 w-auto px-6 bg-black text-white shadow-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Chat
        </Button>
      </motion.div>
    </>
  );
}
