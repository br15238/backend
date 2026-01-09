import { NextResponse } from "next/server"
import { ApiError } from "../../lib/error"

export const handleApi = <T>(fun: () => Promise<T>): Promise<NextResponse<T | { error: string }>> => {
    return fun()
        .then(data => {
            return NextResponse.json(data, { status: 200 })
        })
        .catch(error => {
            if (error instanceof ApiError) {
                return NextResponse.json(
                    { error: error.message },
                    { status: error.status }
                )
            }

            console.error(error)
            return NextResponse.json(
                { error: "系統錯誤，請稍後再試" },
                { status: 500 }
            )
        })
}