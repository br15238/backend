import { NextRequest } from 'next/server'

import { handleApi } from '@/lib/handleApi'
import prisma from '@/lib/prisma'
import { ApiError } from '@/lib/error'

export async function PATCH (req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return handleApi(async () => {
    const { id } = await params
    const { title, completed } = await req.json()

    if (!id)
      throw new ApiError(400, 'id 必填')

    if (title !== undefined &&
            (typeof title !== 'string' || title.trim() === ''))
      throw new ApiError(400, 'title 必須為 string 且不能空白')

    if (completed !== undefined &&
            typeof completed !== 'boolean')
      throw new ApiError(400, 'completed 必須為 boolean')

    await prisma.todo.update({
      where: { id: id },
      data: {
        ...(title !== undefined && { title: title.trim() }),
        ...(completed !== undefined && { completed })
      }
    })
    return
  })
}

export function DELETE (_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return handleApi(async () => {
    const { id } = await params

    if (!id)
      throw new ApiError(400, 'id 必填')

    await prisma.todo.delete({
      where: { id: id }
    })
    return
  })
}

