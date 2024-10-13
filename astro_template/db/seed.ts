import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    { author: "Marcel-TO", body: 'Hope you like Astro DB!', createdAt: new Date()},
    { author: "Bob", body: 'Enjoy!', createdAt: new Date()},
  ])
}