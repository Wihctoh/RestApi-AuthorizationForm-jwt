const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  authUser,
} = require("../services/api.services");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getAllUsers());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).send(await getUserById(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/SignIn", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    res.status(200).send(await createUser(name, surname, email, password));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;

    res.status(200).send(await authUser(email, password));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, password } = req.body;

    res.status(200).send(await updateUser(id, name, surname, email, password));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).send(await deleteUser(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
