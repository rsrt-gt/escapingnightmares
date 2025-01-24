import { Copy, Stethoscope } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ILevel, levels } from "@/lib/states/levels";
import { useState } from "react";
import { toast } from "sonner";

export function PinComponent({
  state,
  setState,
  level,
  setLevel,
}: {
  state: boolean;
  setState: (state: boolean) => void;
  level: ILevel;
  setLevel: (state: ILevel) => void;
}) {
  const [pin, setPin] = useState<string>();
  return (
    <Dialog open={state} onOpenChange={(open) => setState(open)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter Pin</DialogTitle>
        </DialogHeader>

        <InputOTP maxLength={4} onChange={(e) => setPin(e + "")}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="default"
            onClick={() => {
              console.log(pin);
              if (pin == level.pin) {
                setLevel(levels[level.level]);
                toast("Entry Permitted", { position: "top-center" });
                setState(false);
              } else {
                toast("Entry Denied", {
                  description: "The pin you've entered is wrong",
                  position: "top-center",
                });
              }
            }}
          >
            Enter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
