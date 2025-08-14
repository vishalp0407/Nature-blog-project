import bcrypt from "bcryptjs";
export default [
  {
    name: "admin_master",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
    isBlocked: false,
  },
  {
    name: "nature_lover",
    email: "naturelover@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user",
    isBlocked: false,
  },
  {
    name: "ocean_explorer",
    email: "oceanexplorer@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user",
    isBlocked: false,
  },
  {
    name: "mountain_guide",
    email: "mountainguide@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user",
    isBlocked: false,
  },
  {
    name: "desert_wanderer",
    email: "desertwanderer@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user",
    isBlocked: false,
  },
];
