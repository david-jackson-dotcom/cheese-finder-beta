import { useState, forwardRef } from 'react';
import { Share2, Mail } from 'lucide-react';
import { toast } from 'sonner';

// --- Start Inline UI Definitions (Required for single-file component) ---

/**
 * Placeholder for Button, using forwardRef for compatibility with existing props.
 * Uses Tailwind classes for styling based on shadcn/ui defaults.
 */
const Button = forwardRef(({ className, children, onClick, size, ...props }: any, ref) => (
  <button
    ref={ref}
    className={`
      inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
      ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
      disabled:opacity-50 
      ${size === 'lg' ? 'h-10 px-8 py-2' : 'h-9 px-4 py-2'}
      ${className}
    `}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
));

/**
 * Simple Dialog (Modal) Implementation using state for open/close management.
 * Provides backdrop clicking to close functionality.
 */
const Dialog = ({ open, onOpenChange, children }: any) => {
  if (!open) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => onOpenChange(false)} // Close when clicking backdrop
    >
      <div 
        className="fixed z-50 max-w-lg w-full transform transition-all p-6 rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking dialog content
      >
        {children}
      </div>
    </div>
  );
};

// DialogContent (wraps children, applies basic styling)
const DialogContent = ({ className, children }: any) => (
    <div className={`
      relative bg-white p-6 rounded-lg 
      ${className}
    `}>
      {children}
    </div>
);

// DialogHeader (flex container for title/description)
const DialogHeader = ({ className, children }: any) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}>
    {children}
  </div>
);

// DialogTitle (H2 styling)
const DialogTitle = ({ className, children }: any) => (
  <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h2>
);

// DialogDescription (P styling for accessibility/screen readers)
const DialogDescription = ({ className, children }: any) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);

// --- End Inline UI Definitions ---


interface WelcomeScreenProps {
  onSelectMode: (mode: 'name' | 'taste' | 'region' | 'animal') => void;
}

export function WelcomeScreen({ onSelectMode }: WelcomeScreenProps) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    // ROOT DIV START - Full screen container
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gold relative">
      <div className="max-w-md w-full space-y-8 text-center">
        
{/* --- Title Block (Logo unrotated, Text rotated) --- */}
        <div className="relative inline-block w-full flex flex-col items-center justify-center">
          
          {/* Background Logo (Watermark - NOT ROTATED) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <img 
              src="./icon-512.png" 
              alt="Cheese Finder Logo Watermark" 
              className="opacity-25"
              style={{ width: '250px', height: 'auto' }}
              aria-hidden="true"
            />
          </div>
          {/* Rotated Text (Foreground - ROTATED) */}
          <div className="relative z-20 mb-10" style={{ transform: 'rotate(-15deg)' }}>
            <h1 className="text-7xl sm:text-8xl text-accent" style={{ fontFamily: 'Leckerli One, cursive', fontWeight: 700 }}>
              Cheese
            </h1>
            <h1 className="text-7xl sm:text-8xl text-accent" style={{ fontFamily: 'Leckerli One, cursive', fontWeight: 700 }}>
              Finder
            </h1>
          </div>
        </div>
        {/* --- End Title Block --- */}

      

      <p className="text-base text-dark-orange" style={{ fontFamily: 'Montserrat, serif', fontWeight: 500 }}>
       — DISCOVER YOUR BLISS —
      </p>
	 
      {/* Question */}
      <div className="pt-1">
        <p className="text-brown" style={{ fontFamily: 'Cabin, sans-serif' }}>
          What matters most in your cheese?
        </p>
      </div>

      {/* Main Buttons */}
      <div className="space-y-4">
        <Button
          size="lg"
          className="w-full h-16 text-3xl rounded-2xl bg-accent hover:bg-accent/90 active:bg-accent/80 transition-all text-white touch-manipulation border-3 border-accent font-semibold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => onSelectMode('name')}
        >
          NAME
        </Button>
        <Button
          size="lg"
          className="w-full h-16 text-3xl rounded-2xl bg-primary hover:bg-primary/90 active:bg-primary/80 transition-all text-white touch-manipulation border-3 border-accent font-semibold"
		 style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => onSelectMode('taste')}
        >
          TASTE
        </Button>
        <Button
          size="lg"
          className="w-full h-16 text-3xl rounded-2xl bg-orange hover:bg-orange/90 active:bg-orange/90 transition-all text-accent touch-manipulation border-3 border-primary font-semibold"
		 style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => onSelectMode('region')}
        >
          PLACE
        </Button>
        <Button
          size="lg"
          className="w-full h-16 text-3xl rounded-2xl bg-butter hover:bg-butter/90 active:bg-butter/80 transition-all text-primary touch-manipulation border-3 border-orange font-semibold"
		 style={{ fontFamily: 'Montserrat, sans-serif' }}          onClick={() => onSelectMode('animal')}
        >
          BEAST
        </Button>
      </div>

      {/* About Button - Cheese Icon */}
      <button
        onClick={() => setShowAbout(true)}
className="mt-12 mx-auto w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation"
        aria-label="About"
      >
        <img src="./cheese-icon.svg" alt="" className="w-12 h-12" />
      </button>
</div>
      {/* About Dialog */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="sm:max-w-md bg-butter border-2 border-primary">
          <DialogHeader className="mt-[30px] mr-[0px] mb-[0px] ml-[0px]">
            <DialogTitle 
  className="text-center text-accent text-6xl sm:text-7xl" 
  style={{ fontFamily: 'Leckerli One'}}
>
  Cheese Finder
</DialogTitle>
            <DialogDescription className="sr-only">
              About Cheese Finder application
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <p className="text-center text-orange" style={{ fontFamily: 'Cabin' }}>
              v0.9.0.beta
            </p>
            <p className="text-center text-brown" style={{ fontFamily: 'Cabin' }}>
              © David Jackson 2025
            </p>
            
            <div className="flex justify-center gap-3">
              <Button
                className="w-auto gap-2 bg-orange text-white hover:bg-orange/90 active:scale-95 transition-transform"
                onClick={() => {
                  const subject = 'Cheese Finder Feedback';
                  const body = `Hi David,

I wanted to reach out about Cheese Finder.

Thanks!`;
                  
                  toast.success('Opening email client...', {
                    duration: 2000,
                  });
                  
                  const mailtoLink = `mailto:apewalk@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <Mail className="w-4 h-4" />
                Write
              </Button>
              <Button
                className="w-auto gap-2 bg-orange text-white hover:bg-orange/90 active:scale-95 transition-transform"
                onClick={() => {
                  const subject = 'Check out this cheese app';
                  const body = `Hey, Friendo.

I've been using this cheese discovery tool and thought you might like it too. Check out Cheese Finder.

It has hundreds of cheeses from around the world and all kinds of cows. 

You can filter by:
• Form (soft, firm, spreadable, etc.)
• Meltability (from crumbly to super stretchy)
• Funkiness (mild to stinky!)
• Cuisine pairings

Plus it has a smart substitution finder if you need to swap out a cheese in a recipe.

Check it out: https://david-jackson-dotcom.github.io/cheese-finder-beta/

Let me know what you think.`;
                  
                  toast.success('Opening email client...', {
                    duration: 2000,
                  });
                  
                  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    // ROOT DIV END
  );
}