import { jwtVerify } from "jose"

export const verifyToken = async (token:string) => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET))
    return payload
  } catch (error) {
    return null;
  }
}