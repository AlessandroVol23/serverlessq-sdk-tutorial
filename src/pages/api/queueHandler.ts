import { QueueHandler } from "@serverlessq/nextjs";

export default QueueHandler("queueHandler", "/api/queueHandler", async () => {
  console.log("In queue handler");
});
