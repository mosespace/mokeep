import { NextResponse } from "next/server";

export async function middleware(request) {
  // Your middleware stuff here
  const customHeaders = new Headers({ "x-url": request.url });

  // Modify the request headers
  request = {
    ...request,
    headers: customHeaders,
  };

  // Continue with the modified request
  const response = NextResponse.next(request);

  // Optionally, you can check if the response is JSON before trying to parse it
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    try {
      response.json = await response.json();
    } catch (error) {
      console.error("Error parsing JSON response", error);
    }
  }

  return response;
}
