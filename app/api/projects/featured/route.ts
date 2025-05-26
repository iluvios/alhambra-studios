import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    console.log("Fetching featured projects...")

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
        featured
      FROM projects 
      WHERE featured = true
      ORDER BY year DESC, created_at DESC
      LIMIT 6
    `

    console.log(`Found ${projects.length} featured projects`)

    return NextResponse.json({
      success: true,
      projects: projects || [],
    })
  } catch (error) {
    console.error("Error fetching featured projects:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch featured projects",
        projects: [],
      },
      { status: 500 },
    )
  }
}
