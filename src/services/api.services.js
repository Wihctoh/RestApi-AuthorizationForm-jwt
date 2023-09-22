const {
  getAllUsersDB,
  getUserByIdDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
} = require("../repository/api.repository");

async function getAllUsers() {
  const data = await getAllUsersDB();

  if (!data.length) throw new Error("users not found!");

  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);

  if (!data.length) throw new Error("user not found!");

  return data;
}

async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);

  if (!data.length) throw new Error("user not created!");

  return data;
}

async function updateUser(id, name, surname, email, password) {
  const data = await updateUserDB(id, name, surname, email, password);

  if (!data.length) throw new Error("user not updated!");

  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDB(id);

  if (!data.length) throw new Error("user can't deleted!");

  return data;
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
