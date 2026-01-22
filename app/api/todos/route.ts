import { NextRequest } from 'next/server'

import { handleApi } from '@/lib/handleApi'
import { TodoService } from '@/services/todo.service'

/**
 * Controller 職責：
 * 1. 接收 Request
 * 2. 呼叫 Service
 * 3. 透過 handleApi 回傳 Response
 */

export async function GET () {
  return handleApi(() => TodoService.getAllTodos())
}

export function POST (req: NextRequest) {
  return handleApi(async () => {
    const { title } = await req.json()
    return TodoService.createTodo(title)
  })
}
