import { type NextRequest, NextResponse } from "next/server";
import { adventureComments, comedyComments, dramaComments, romanceComments } from "../route";
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
      product = inArray(id, dramaComments);
      break;
    case "comedy":
      product = inArray(id, comedyComments);
      break;
    case "romance":
      product = inArray(id, romanceComments);
      break;
    case "adventure":
      product = inArray(id, adventureComments);
      break;
    default:
      product = inArray(id, comedyComments);
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