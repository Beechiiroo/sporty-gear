
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ChatHeaderProps {
  title: string;
  onClose: () => void;
}

const ChatHeader = ({ title, onClose }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg flex justify-between items-center">
      <h3 className="font-medium">{title}</h3>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="h-6 w-6 text-white hover:text-white hover:bg-white/20"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatHeader;
