import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Prisma Client queries here
  //   Create a new user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Chris",
  //       email: "chrissiku5@gmail.com",
  //     },
  //   });

  //  Read all users
  const user = await prisma.user.findMany();
  console.log(user);
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
