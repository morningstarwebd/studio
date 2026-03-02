
"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi Dogs Paradise! I'm interested in learning more about your puppies and breeds.";
    window.open(`https://wa.me/919060602037?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-20 md:bottom-8 right-6 z-[60]"
        >
          <Button
            onClick={handleWhatsApp}
            size="icon"
            className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba5c] shadow-xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white dark:border-gray-900"
          >
            <MessageCircle className="w-8 h-8 text-white fill-current" />
            <span className="sr-only">WhatsApp Support</span>
          </Button>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs font-semibold whitespace-nowrap hidden md:block"
          >
            Chat with Experts!
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
