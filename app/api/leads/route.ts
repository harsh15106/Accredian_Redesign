import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Extraction & Trimming
    const name = body.name?.toString().trim();
    const email = body.email?.toString().trim().toLowerCase();
    const phone = body.phone?.toString().trim();
    const company = body.company?.toString().trim();
    const domain = body.domain?.toString().trim();
    const candidates = body.candidates?.toString().trim();
    const mode = body.mode?.toString().trim();
    const location = body.location?.toString().trim();

    // 2. Required Fields Validation
    if (!name || !email || !phone || !company || !domain || !candidates || !mode || !location) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields" },
        { status: 400 }
      );
    }

    // 3. Name & Location Validation (Alphabets and spaces only)
    const alphaRegex = /^[a-zA-Z\s]+$/;
    if (!alphaRegex.test(name)) {
      return NextResponse.json(
        { success: false, message: "Name must only contain alphabets" },
        { status: 400 }
      );
    }
    if (!alphaRegex.test(location)) {
      return NextResponse.json(
        { success: false, message: "Location must only contain alphabets" },
        { status: 400 }
      );
    }

    // 4. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid email" },
        { status: 400 }
      );
    }

    // 5. Phone Validation (Exactly 10 digits)
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, message: "Enter a valid 10-digit phone number" },
        { status: 400 }
      );
    }

    // 6. Candidates Validation (Numeric and > 0)
    const numCandidates = Number(candidates);
    if (isNaN(numCandidates) || numCandidates <= 0) {
      return NextResponse.json(
        { success: false, message: "Number of candidates must be a positive number" },
        { status: 400 }
      );
    }

    // 7. Domain & Mode Validation (Already checked for empty)

    // 8. Success - Structured Object
    const leadData = {
      name,
      email,
      phone: cleanPhone, // Store only digits
      company,
      domain,
      candidates: numCandidates,
      mode,
      location,
      createdAt: new Date().toISOString(),
    };

    // Mock storage log
    console.log("Production Lead Captured:", leadData);

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
