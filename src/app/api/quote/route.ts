import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Please fix the highlighted fields.",
        issues: parsed.error.issues.map((i) => ({ path: i.path, message: i.message })),
      },
      { status: 400 },
    );
  }

  // In production this payload would be persisted / forwarded to the intake system.
  console.log("[quote] received", JSON.stringify(parsed.data));

  return NextResponse.json(
    {
      success: true,
      receivedAt: new Date().toISOString(),
      caseId: `NH-${Date.now().toString(36).toUpperCase()}`,
    },
    { status: 200 },
  );
}
