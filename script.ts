import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   Create a new user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Chris",
  //       email: "chrissiku5@gmail.com",
  //     },
  //   });
  //  Read all users
  //   const user = await prisma.user.findMany();
  // Create a new post
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Nabil",
  //       email: "nabil@gmail.com",
  //       posts: {
  //         create: { title: "Hello World" },
  //       },
  //     },
  //   });
  // Retrieve all posts with their authors
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  //   console.log(user);
  console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
