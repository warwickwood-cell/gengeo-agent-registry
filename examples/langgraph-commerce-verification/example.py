"""
LangGraph / LangChain example:
Use GenGEO's remote MCP server to verify a merchant before an AI commerce decision.

Requires:
  pip install langchain langgraph langchain-mcp-adapters
"""

import asyncio
from langchain_mcp_adapters.client import MultiServerMCPClient


GEN_GEO_MCP_URL = "https://mcp.gengeo.co/mcp"


async def main():
    client = MultiServerMCPClient(
        {
            "gengeo": {
                "url": GEN_GEO_MCP_URL,
                "transport": "streamable_http",
            }
        }
    )

    tools = await client.get_tools()

    verify_store = next(
        tool for tool in tools if tool.name == "verify_store"
    )

    result = await verify_store.ainvoke({"domain": "nike.com"})

    print("GenGEO verification result:")
    print(result)

    # Example decision logic.
    # In a real shopping agent, this result would be one signal among many.
    if "verified" in str(result).lower():
        print("Agent may continue evaluating this merchant.")
    else:
        print("Agent should treat verification as unavailable or incomplete.")


if __name__ == "__main__":
    asyncio.run(main())