"use client";
import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import commands from "@/lib/commands";
import Commands from "@/lib/commands";
import promptActions from "@/lib/prompt-actions";
import { levels, useLevelStore } from "@/lib/states/levels";
import { CloudCog } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { PinComponent } from "./pin";
import { useItemStore } from "@/lib/states/inventory";
import { Inventory } from "@/components/ui/inventory";

export default function Home() {
  const [isInvOpen, setIsInvOpen] = useState<boolean>(false);
  const [pin, setPin] = useState<boolean>(false);
  const [returnPrompt, setReturnPrompt] = useState<string>("");
  const [prompt, setPrompt] = useState<any>("");
  const { level, setLevel } = useLevelStore((state) => state);
  const { items, setItem } = useItemStore((state) => state);
  useEffect(() => {
    if (items === null) {
      setItem([]);
    }
    localStorage.setItem("inventory", level + "");
  }, [items]);

  useEffect(() => {
    if (level === null) {
      setLevel(levels[0]);
    }
    localStorage.setItem("saved", level + "");
    setReturnPrompt("New level, new me. Lets get out of here.");
    console.log(level);
  }, [level]);

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <PinComponent
        level={level}
        setLevel={setLevel}
        setState={setPin}
        state={pin}
      />
      <Inventory isOpen={isInvOpen} setIsOpen={setIsInvOpen} />
      <Card className="p-10 w-1/3 rounded-md">
        <CardHeader>
          <CardTitle>Escaping Endless Nightmares</CardTitle>
          <p>A game inspired by many many horror games</p>
        </CardHeader>
        <CardContent>
          <Card className="my-2">
            <CardHeader>
              <CardTitle>
                Level: {level?.level}. {level?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>{returnPrompt}</CardContent>
          </Card>
          <div className="grid grid-cols-7 gap-3 w-full ">
            <div className="col-span-5">
              <AutoComplete
                onValueChange={setPrompt}
                emptyMessage="Enter a Command..."
                options={commands}
              />
            </div>
            <div className="py-1 col-span-2 h-full">
              <Button
                className=""
                onClick={() =>
                  promptActions(
                    prompt,
                    level,
                    setLevel,
                    setReturnPrompt,
                    setPin,
                    isInvOpen,
                    setIsInvOpen,
                    setItem,
                    items
                  )
                }
              >
                Enter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
