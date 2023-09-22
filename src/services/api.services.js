const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getAllUsersDB,
  getUserByIdDB,
  getUserByEmailDB,
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

async function getUserByEmail(email) {
  return await getUserByEmailDB(email);
}

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUserByEmail(email);

  if (foundUser.length) throw new Error("user already exist!");

  const hashPwd = await bcrypt.hash(pwd, 10);
  const data = await createUserDB(name, surname, email, hashPwd);

  if (!data.length) throw new Error("user not created!");

  return data;
}

async function authUser(email, password) {
  const foundUser = await getUserByEmail(email);

  if (!foundUser.length) throw new Error("user not found!");

  const pwdCheck = await bcrypt.compare(password, foundUser[0].password);

  if (pwdCheck) {
    const token = jwt.sign(
      {
        email: email,
        password: foundUser[0].password,
      },
      process.env.PUBLIC_KEY,
      { expiresIn: "1h" }
    );

    return `Bearer ${token}`;
  } else return "incorrect email or password!";
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

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser, authUser };
