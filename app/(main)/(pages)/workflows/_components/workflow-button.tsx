"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { open } = useModal();

  return (
    <Button size={"icon"} onClick={open}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
