const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const results = await connection("users");
    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const { name, email, password } = req.body;
      await connection("users").insert({
        name,
        email,
        password,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const { id } = req.params;

    const user = await connection("users").where("id", id).select("id").first();

    if (user.id != id) {
      return res
        .status(400)
        .json({ error: "Theres was an error during the action!" });
    }

    await connection("users").where("id", id).delete();

    return res.status(204).send();
  },

  async getUserByID(req, res, next) {
    try {
      const { id } = req.params;
      const user = await connection("users")
        .where("id", id)
        .select("*")
        .first();
      return res.json(user);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const { id } = req.params;

    await connection("users")
        .update({
          name,
          email,
          password,
        })
        .where({ id });

        return res.status(204).send()
    } catch (error) {
      next(error);
    }
  },
};
