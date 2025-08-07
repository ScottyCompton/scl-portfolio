import { NextRequest, NextResponse } from 'next/server'
import { writeFile, appendFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
    try {
        const { content, filename = 'output.txt' } = await request.json()

        // Write to a file in the project directory
        const filePath = join(process.cwd(), 'data', filename)

        await writeFile(filePath, content, 'utf8')

        return NextResponse.json({
            success: true,
            message: 'File written successfully',
            path: filePath,
        })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to write file' },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { content, filename = 'output.txt' } = await request.json()

        // Append to a file
        const filePath = join(process.cwd(), 'data', filename)

        await appendFile(filePath, '\n' + content, 'utf8')

        return NextResponse.json({
            success: true,
            message: 'Content appended successfully',
        })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to append to file' },
            { status: 500 }
        )
    }
}
