import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    console.log(`Fetching project with slug: ${params.slug}`)

    const projects = await sql`
      SELECT 
        id,
        slug,
        title,
        subtitle,
        category,
        year,
        status,
        hero_image,
        hero_video,
        content_html,
        gallery_images,
        featured,
        created_at
      FROM projects 
      WHERE slug = ${params.slug}
    `

    const project = projects[0]

    if (!project) {
      console.log(`Project not found: ${params.slug}`)
      return NextResponse.json(
        {
          success: false,
          error: "Project not found",
        },
        { status: 404 },
      )
    }

    console.log(`Found project: ${project.title}`)

    return NextResponse.json({
      success: true,
      project,
    })
  } catch (error) {
    console.error("Error fetching project:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch project",
      },
      { status: 500 },
    )
  }
}
