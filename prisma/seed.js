const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const main = async () => {
  const sasha = await prisma.users.create({
    data: {
      name: "Sasha"
    }
  })

  console.log(sasha)

  const johnny = await prisma.users.create({
    data: {
      name: "Johnny",
      todos: {
        create: [
          {
            text: "Do dishes"
          },
          {
            text: "Walk the dog"
          }
        ]
      }
    }
  })

  console.log(johnny)

  const run = await prisma.todos.create({
    data: {
      text: "Run a full marathon"
    }
  })

  console.log(run)

  const grocery = await prisma.todos.create({
    data: {
      text: "Buy groceries for the week",
      user: {
        create: {
          name: "Amelia"
        }
      }
    }
  })

  console.log(grocery)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect()
  })
