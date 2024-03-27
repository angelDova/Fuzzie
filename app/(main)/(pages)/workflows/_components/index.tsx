import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="m-2 flex flex-col">
        <Workflow
          description="Creating a test workflow"
          id="e2j3bjh23bhj2b3"
          name="Automation workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
