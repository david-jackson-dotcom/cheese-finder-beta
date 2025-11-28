import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { Button } from './ui/button';
import { share, ShareData, canShare } from '../lib/sharing';
import { toast } from 'sonner';

interface ShareButtonProps {
  data: ShareData;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showLabel?: boolean;
}

export function ShareButton({ 
  data, 
  variant = 'outline', 
  size = 'sm',
  className = '',
  showLabel = false 
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const isNativeShareAvailable = canShare();

  const handleShare = async () => {
    const result = await share(data);
    
    if (result.success) {
      if (result.method === 'clipboard' || result.method === 'fallback') {
        setCopied(true);
        toast.success('Copied to clipboard!', {
          description: 'Share text copied and ready to paste',
        });
        setTimeout(() => setCopied(false), 2000);
      }
      // Native share doesn't need feedback as the OS handles it
    } else {
      // If all methods failed, show the text in a toast that users can select and copy
      if (result.shareText) {
        toast.info('Copy this text to share:', {
          description: result.shareText,
          duration: 10000,
        });
      } else {
        toast.error('Unable to share', {
          description: 'Please try again',
        });
      }
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleShare}
      className={`text-magenta hover:text-magenta/90 hover:bg-transparent ${className}`}
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Share2 className="h-4 w-4" />
      )}
      {showLabel && (
        <span className="ml-2">
          {copied ? 'Copied!' : isNativeShareAvailable ? 'Share' : 'Copy Link'}
        </span>
      )}
    </Button>
  );
}