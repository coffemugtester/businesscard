import { test, expect } from "@playwright/test";

test("GET / should return 'hello world!'", async ({ request }) => {
  const response = await request.get("http://localhost:8080/");
  expect(response.ok()).toBeTruthy();

  const body = await response.text();
  expect(body).toContain("hello world!");
});

