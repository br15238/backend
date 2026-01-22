import { ApiError } from '@/lib/error'
import prisma from '@/lib/prisma'

export const TodoService = {
  async getAllTodos () {
    return prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },

  async createTodo (title: string) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new ApiError(400, 'title 必填且不能空白')
    }

    return prisma.todo.create({
      data: {
        title: title.trim(),
        completed: false,
      },
    })
  },

  async deleteTodo (id: string) {
    return prisma.todo.delete({
      where: { id },
    })
  },
}
