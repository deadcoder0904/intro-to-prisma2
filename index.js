const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.users.findMany()

  console.log(users)

  const usersWithTodos = await prisma.users.findMany({
    include: {
      todos: true
    }
  })

  console.log(JSON.stringify(usersWithTodos, null, 2))

  const todos = await prisma.todos.findMany()

  console.log(todos)

  const todosWithUsers = await prisma.todos.findMany({
    include: {
      user: true
    }
  })

  console.log(JSON.stringify(todosWithUsers, null, 2))
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect()
  })
