import User from "../models/User.js";

export const getFeed = async (req, res) => {
  const users = await User.find({
    _id: { $ne: req.user._id }
  });

  res.json(users);
};

export const likeUser = async (req, res) => {
  const target = await User.findById(req.params.id);

  if (target.likes.includes(req.user._id)) {
    return res.json({ already: true });
  }

  target.likes.push(req.user._id);
  await target.save();

  if (req.user.likes.includes(target._id)) {
    req.user.matches.push(target._id);
    target.matches.push(req.user._id);

    await req.user.save();
    await target.save();

    return res.json({ match: true, user: target });
  }

  res.json({ match: false });
};

export const skipUser = async (req, res) => {
  req.user.dislikes.push(req.params.id);
  await req.user.save();
  res.json({ ok: true });
};

export const getMatches = async (req, res) => {
  const user = await User.findById(req.user._id).populate("matches");
  res.json(user.matches);
};

export const updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    req.body,
    { new: true }
  );
  res.json(user);
};

export const uploadPhoto = async (req, res) => {
  req.user.photo = req.body.photo;
  await req.user.save();
  res.json(req.user);
};
