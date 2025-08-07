import { writeFile, readFile, appendFile, access } from 'fs/promises'
import { join } from 'path'

export interface FileOperationResult {
    success: boolean
    message: string
    path?: string
    data?: string
    error?: string
}

export class FileUtils {
    /**
     * Write content to a file
     */
    static async writeFile(
        filename: string,
        content: string,
        directory: string = 'data'
    ): Promise<FileOperationResult> {
        try {
            const filePath = join(process.cwd(), directory, filename)
            await writeFile(filePath, content, 'utf8')

            return {
                success: true,
                message: 'File written successfully',
                path: filePath,
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to write file',
                error: error instanceof Error ? error.message : 'Unknown error',
            }
        }
    }

    /**
     * Append content to a file
     */
    static async appendFile(
        filename: string,
        content: string,
        directory: string = 'data'
    ): Promise<FileOperationResult> {
        try {
            const filePath = join(process.cwd(), directory, filename)
            await appendFile(filePath, content, 'utf8')

            return {
                success: true,
                message: 'Content appended successfully',
                path: filePath,
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to append to file',
                error: error instanceof Error ? error.message : 'Unknown error',
            }
        }
    }

    /**
     * Read content from a file
     */
    static async readFile(
        filename: string,
        directory: string = 'data'
    ): Promise<FileOperationResult> {
        try {
            const filePath = join(process.cwd(), directory, filename)
            const data = await readFile(filePath, 'utf8')

            return {
                success: true,
                message: 'File read successfully',
                path: filePath,
                data,
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to read file',
                error: error instanceof Error ? error.message : 'Unknown error',
            }
        }
    }

    /**
     * Check if a file exists
     */
    static async fileExists(
        filename: string,
        directory: string = 'data'
    ): Promise<boolean> {
        try {
            const filePath = join(process.cwd(), directory, filename)
            await access(filePath)
            return true
        } catch {
            return false
        }
    }

    /**
     * Write JSON data to a file
     */
    static async writeJson(
        filename: string,
        data: any,
        directory: string = 'data'
    ): Promise<FileOperationResult> {
        const content = JSON.stringify(data, null, 2)
        return this.writeFile(filename, content, directory)
    }

    /**
     * Read JSON data from a file
     */
    static async readJson(
        filename: string,
        directory: string = 'data'
    ): Promise<FileOperationResult> {
        const result = await this.readFile(filename, directory)

        if (result.success && result.data) {
            try {
                const jsonData = JSON.parse(result.data)
                return {
                    ...result,
                    data: jsonData,
                }
            } catch (error) {
                return {
                    success: false,
                    message: 'Failed to parse JSON',
                    error:
                        error instanceof Error
                            ? error.message
                            : 'Unknown error',
                }
            }
        }

        return result
    }
}
