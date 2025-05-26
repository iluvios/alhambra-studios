import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    console.log("Fetching projects from database...")

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
      ORDER BY featured DESC, year DESC, created_at DESC
    `

    console.log(`Found ${projects.length} projects`)

    return NextResponse.json({
      success: true,
      projects: projects || [],
    })
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
        projects: [],
      },
      { status: 500 },
    )
  }
}
