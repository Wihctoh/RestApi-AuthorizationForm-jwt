const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/api.services");

router.get("/", async (req, res) => {
  try {
    const data = await getAllUsers();

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/SignIn", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const data = await createUser(name, surname, email, password);

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, password } = req.body;
    const data = await updateUser(id, name, surname, email, password);

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
