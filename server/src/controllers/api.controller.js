const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  authUser,
} = require("../services/api.services");
const createToken = require("../helper/jwt");

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

router.post("/sign_up", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    res.status(200).send(await createUser(name, surname, email, password));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/sign_in", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await authUser(email, password);
    const token = createToken(userData);

    res.cookie("access_token", token, {
      httpOnly: false,
      secure: true,
    });

    res.status(200).send(userData);
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
