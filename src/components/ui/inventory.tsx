import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useItemStore } from "@/lib/states/inventory";

export function Inventory({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) {
  const { items, setItem } = useItemStore((state) => state);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inventory</DialogTitle>
          <DialogDescription>
            Make changes to your Inventory here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Pills:{" "}
              {items?.filter((item) => item.label == "Pills").length + ""}
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Foods: {items?.filter((item) => item.label == "Food").length + ""}
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Scaffolding:{" "}
              {items?.filter((item) => item.label == "Scaffolding").length + ""}
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
