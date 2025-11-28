import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Mail, Share2 } from "lucide-react";
import { toast } from "sonner";

interface WelcomeScreenProps {
  onSelectMode: (
    mode: "name" | "taste" | "place" | "animal",
  ) => void;
}

export function WelcomeScreen({
  onSelectMode,
}: WelcomeScreenProps) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gold relative">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo/Title Section */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div
              className="inline-block"
              style={{ transform: "rotate(-15deg)" }}
            >
              <h1
                className="text-8xl sm:text-9xl text-accent mb-2"
                style={{
                  fontFamily: "Leckerli One, cursive",
                  fontWeight: 700,
                }}
              >
                Cheese
              </h1>
              <h1
                className="text-8xl sm:text-9xl text-accent"
                style={{
                  fontFamily: "Leckerli One, cursive",
                  fontWeight: 700,
                }}
              >
                Finder
              </h1>
            </div>
          </div>
          <p
            className="text-lg text-orange mt-12 whitespace-nowrap"
            style={{ fontFamily: "Orienta, sans-serif" }}
          >
            — Discover Cheese for Any Preference —
          </p>
        </div>

        {/* Question */}
        <div className="pt-6">
          <p
            className="text-xl text-brown"
            style={{ fontFamily: "Orienta, sans-serif" }}
          >
            What matters most in your cheese?
          </p>
        </div>

        {/* Main Buttons */}
        <div className="space-y-4 pt-4">
          <Button
            size="lg"
            className="w-full h-16 text-2xl rounded-2xl bg-accent hover:bg-accent/90 active:bg-accent/80 transition-all text-white touch-manipulation border-4 border-accent"
            onClick={() => onSelectMode("name")}
          >
            Name
          </Button>
          <Button
            size="lg"
            className="w-full h-16 text-2xl rounded-2xl bg-primary hover:bg-primary/90 active:bg-primary/80 transition-all text-white touch-manipulation border-4 border-accent"
            onClick={() => onSelectMode("taste")}
          >
            Taste
          </Button>
          <Button
            size="lg"
            className="w-full h-16 text-2xl rounded-2xl bg-orange hover:bg-orange/90 active:bg-orange/80 transition-all text-white touch-manipulation border-4 border-orange-dark"
            onClick={() => onSelectMode("place")}
          >
            Place
          </Button>
          <Button
            size="lg"
            className="w-full h-16 text-2xl rounded-2xl bg-butter hover:bg-butter/90 active:bg-butter/80 transition-all text-orange touch-manipulation border-4 border-orange"
            onClick={() => onSelectMode("animal")}
          >
            Beast
          </Button>
        </div>
      </div>

      {/* About Button - Cheese Icon */}
      <button
        onClick={() => setShowAbout(true)}
        className="mt-12 w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation"
        aria-label="About"
      >
        <div className="relative w-11 h-11 text-5xl">
          🧀
        </div>
      </button>

      {/* About Dialog */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="sm:max-w-md bg-gold border-2 border-primary">
          <DialogHeader className="mt-[30px] mr-[0px] mb-[0px] ml-[0px]">
            <DialogTitle
              className="text-center text-accent text-4xl"
              style={{ fontFamily: "Leckerli One" }}
            >
              Cheese Finder
            </DialogTitle>
            <DialogDescription className="sr-only">
              About Cheese Finder application
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <p
              className="text-center text-brown"
              style={{ fontFamily: "Orienta" }}
            >
              © David Jackson {new Date().getFullYear()}
            </p>
            <p
              className="text-center text-brown/60 text-sm"
              style={{ fontFamily: "Orienta" }}
            >
              v0.9.0
            </p>

            <div className="flex justify-center gap-3">
              <Button
                className="w-auto gap-2 bg-orange text-white hover:bg-orange/90 active:scale-95 transition-transform"
                onClick={() => {
                  const subject = "Cheese Finder Feedback";
                  const body = `Hi David,

I wanted to reach out about Cheese Finder.

Thanks!`;

                  toast.success("Opening email client...", {
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
                  const subject = "Check out this cheese app";
                  const body = `Hey, Friendo.

I've been using this cheese discovery tool and thought you might like it too. Check out Cheese Finder.

It has hundreds of cheeses from around the world and all kinds of cows. 

You can filter by:
• Form (soft, firm, spreadable, etc.)
• Meltability (from crumbly to super stretchy)
• Funkiness (mild to stinky!)
• Cuisine pairings

Plus it has a smart substitution finder if you need to swap out a cheese in a recipe.

Check it out: ${window.location.origin}

Let me know what you think.`;

                  toast.success("Opening email client...", {
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
  );
}