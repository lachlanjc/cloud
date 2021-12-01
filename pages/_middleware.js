import { NextResponse } from 'next/server'

export function middleware(req) {
  const [, deployment, file] = req.nextUrl.pathname.split('/')
  if (!deployment && !file) {
    return new NextResponse('Use /deploy/file-name URL pattern')
  }
  return NextResponse.rewrite(
    `https://cloud-${deployment}-lachlanjc.vercel.app/${file ?? ''}`
  )
}
