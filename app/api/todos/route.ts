import { NextRequest } from "next/server"
import prisma from "@/app/lib/prisma"
import { handleApi } from "@/app/lib/handleApi"
import { ApiError } from "@/lib/error"

export async function GET() {
    return handleApi(() =>
        prisma.todo.findMany({
            orderBy: { createdAt: "desc" },
        })
    )
}

export function POST(req: NextRequest) {
    return handleApi(async () => {
        const { title } = await req.json()

        if (!title || typeof title !== "string" || title.trim() === "")
            throw new ApiError(400, "title 必填且不能空白")

        return prisma.todo.create({
            data: { title: title.trim() },
        })
    })

}
