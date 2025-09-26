import { type NextRequest, NextResponse } from "next/server";
import { adventureTodos, comedyTodos, dramaTodos, romanceTodos } from "../route";
import { inArray } from "@/helpers";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { searchParams } = new URL(request.url);
  const style = searchParams.get("style");

  let product = null;
  switch (style) {
    case "drama":
      product = inArray(id, dramaTodos);
      break;
    case "comedy":
      product = inArray(id, comedyTodos);
      break;
    case "romance":
      product = inArray(id, romanceTodos);
      break;
    case "adventure":
      product = inArray(id, adventureTodos);
      break;
    default:
      product = inArray(id, comedyTodos);
  }
    let status = 200

    const response = new NextResponse(JSON.stringify(product), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });

  return response;

}


export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}