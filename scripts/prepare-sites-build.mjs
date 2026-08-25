import { copyFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const projectRoot = resolve(import.meta.dirname, '..')
const serverDirectory = resolve(projectRoot, 'dist', 'server')
const hostingDirectory = resolve(projectRoot, 'dist', '.openai')

const workerSource = `export default {
  async fetch(request, env) {
    if (!env.ASSETS || typeof env.ASSETS.fetch !== 'function') {
      return new Response('Static assets binding is unavailable.', { status: 500 })
    }

    const response = await env.ASSETS.fetch(request)
    const acceptsHtml = request.headers.get('accept')?.includes('text/html')

    if (response.status !== 404 || request.method !== 'GET' || !acceptsHtml) {
      return response
    }

    const fallbackUrl = new URL('/index.html', request.url)
    const fallback = await env.ASSETS.fetch(new Request(fallbackUrl, request))
    return new Response(fallback.body, {
      status: 200,
      headers: fallback.headers,
    })
  },
}
`

await mkdir(serverDirectory, { recursive: true })
await mkdir(hostingDirectory, { recursive: true })
await writeFile(resolve(serverDirectory, 'index.js'), workerSource, 'utf8')
await copyFile(resolve(projectRoot, '.openai', 'hosting.json'), resolve(hostingDirectory, 'hosting.json'))
