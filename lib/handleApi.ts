import { NextResponse } from 'next/server'

import { ApiError } from './error'

type ApiResponse<T> = NextResponse<{
    status?: number
    message?: string
    error?: string
    data?: T
}>

export const handleApi = <T>(fun: () => Promise<T>): Promise<ApiResponse<T>> => {
  return fun()
    .then(data => {
      return NextResponse.json(
        { status: 200, message: 'success', data })
    })
    .catch(error => {
      if (error instanceof ApiError) {
        return NextResponse.json(
          { error: error.message },
          { status: error.status }
        )
      }

      if (
        error?.message?.includes("Can't reach database server") ||
                error?.message?.includes('ECONNREFUSED') ||
                error?.code === 'P1001' ||
                error?.code === 'P1017'
      ) {
        return NextResponse.json(
          { error: '資料庫連線失敗，請稍後再試' },
          { status: 503 }
        )
      }

      if (error?.code?.startsWith('P')) {
        console.error('Prisma error:', error)
        return NextResponse.json({ error: '資料庫操作失敗' }, { status: 500 })
      }

      console.error('Unhandled error:', error)
      return NextResponse.json({ error: '系統錯誤' }, { status: 500 })
    })
}
