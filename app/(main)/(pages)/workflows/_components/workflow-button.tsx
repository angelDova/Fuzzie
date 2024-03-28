"use client";

import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/billing-provider";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { open } = useModal();
  const { credits } = useBilling();

  return (
    <Button
      size={"icon"}
      {...(credits !== "0" ? { onClick: open } : { disabled: true })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
