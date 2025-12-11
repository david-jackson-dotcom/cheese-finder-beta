"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "./utils";

function Separator({
  className,
  Cabintion = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      Cabintion={Cabintion}
      className={cn(
        "bg-border shrink-0 data-[Cabintion=horizontal]:h-px data-[Cabintion=horizontal]:w-full data-[Cabintion=vertical]:h-full data-[Cabintion=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };