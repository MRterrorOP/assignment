import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  email: z.string().email("Invalid email format").optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  floor: z.string().min(1).optional(),
  streetName: z.string().min(3).optional(),
  postalCode: z
    .string()
    .regex(/^\d{5,6}$/, "Invalid postal code")
    .optional(),
  city: z.string().min(2).optional(),
  state: z.string().min(2).optional(),
  country: z.string().min(2).optional(),
  notification: z.boolean().optional(),
  newsLetter: z.boolean().optional(),
  emailSubcription: z.boolean().optional(),
});

const formData = {
  username: "",
  email: "",
  gender: "",
  floor: "",
  streetName: "",
  postalCode: "",
  city: "",
  state: "",
  country: "",
  notification: "",
  newsLetter: "",
  emailSubcription: "",
};

export async function POST(request: Request) {
  const res = await request.json();

  const result = formSchema.safeParse(res);

  if (!result.success) {
    return new Response("Invalid form data", {
      status: 400,
    });
  }
  Object.keys(res).forEach((key) => {
    if (key in formData) {
      formData[key as keyof typeof formData] = res[key];
    }
  });

  return new Response("Success", {
    status: 200,
  });
}

export async function GET() {
  if (Object.values(formData).some((value) => value !== "")) {
    return new Response(JSON.stringify(formData), {
      status: 200,
    });
  }
  return new Response("No data found", {
    status: 404,
  });
}
