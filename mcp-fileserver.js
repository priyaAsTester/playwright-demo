import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import fs from "fs";
import path from "path";

const server = new Server(
  { name: "filesystem-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.tool(
  "listFiles",
  {
    description: "List files in the project directory",
    parameters: {
      type: "object",
      properties: {
        directory: { type: "string" }
      },
      required: []
    }
  },
  async ({ directory = "." }) => {
    const fullPath = path.resolve(directory);
    const files = fs.readdirSync(fullPath);

    return {
      content: [
        {
          type: "text",
          text: files.join("\n")
        }
      ]
    };
  }
);

server.listen();