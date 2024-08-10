/// <reference lib="webworker" />

import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

interface WorkerData {
  userCode: string;
  problem: Problem;
}

self.onmessage = (e: MessageEvent<WorkerData>) => {
  const { userCode, problem } = e.data;
  try {
    // Isolate the user's code and create a function
    const cb = new Function(`return ${userCode}`)();

    // Run the handler function for the problem
    const handler = problems[problem.id].handlerFunction;
    if (typeof handler === "function") {
      const success = handler(cb);
      self.postMessage({ success });
    }
  } catch (error: any) {
    self.postMessage({ error: error.message });
  }
};
