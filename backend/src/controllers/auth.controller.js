import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, telegram } = req.body;

    if (!telegram)
      return res.status(400).json({ message: "Telegram required" });

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      telegram,
      password: hash
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch {
    res.status(400).json({ message: "Register error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};

export const me = async (req, res) => {
  res.json(req.user);
};
