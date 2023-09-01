let amountId = 0;

const users = []

const user = {
  id: 0,
  name: "joão",
  age: 23
}

function generateId() {
  return amountId += 1
}

exports.createUser = function createUser(params) {
  let newUser = { ...user, id: generateId(), name: params.name, age: params.age }

  users.push(newUser)

  console.log(users)

  return newUser
}

exports.getUser = function getUser(id) {
  const user = users.find(element => {
    if (element.id ==  id) {
      return element
    }
  });

  if (!user) {
    return "usuário não encontrado"
  }

  return user
}
