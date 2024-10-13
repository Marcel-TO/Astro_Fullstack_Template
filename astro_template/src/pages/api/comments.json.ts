import { db, Comment } from "astro:db"

// Outputs: /builtwith.json
export async function GET({params, request}) {
    const allComments = await db.select().from(Comment)
    return new Response(
      JSON.stringify(allComments),
    )
  }