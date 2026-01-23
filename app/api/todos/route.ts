import { NextRequest } from 'next/server'

import { handleApi } from '@/lib/handleApi'
import { TodoService } from '@/services/todo.service'

export async function GET () {
  return handleApi(() => TodoService.getAllTodos())
}

export function POST (req: NextRequest) {
  return handleApi(async () => {
    const { title } = await req.json()
    return TodoService.createTodo(title)
  })
}
