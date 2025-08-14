import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "codeAgent",
      system:
        "You are an expert nextjs developer. You write readable, maintainable code. You write simple nextjs & react snippets.",
      model: gemini({ model: "gemini-2.0-flash" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );
    console.log(output);

    return { output };
  }
);
