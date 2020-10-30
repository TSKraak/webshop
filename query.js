const {
  user: User,
  order: Order,
  category: Category,
  product: Product,
  orderItem: OrderItem,
} = require("./models");

const createUserList = async () => {
  try {
    const allUsers = await User.findAll();
    console.log(allUsers.map((user) => user.get({ plain: true })));
  } catch (e) {
    console.error(e);
  }
};
// createUserList();

const newUser = async (
  firstName,
  lastName,
  email,
  password,
  phone,
  street,
  number,
  zipCode,
  country
) => {
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phone,
      street,
      number,
      zipCode,
      country,
    });
    console.log(user.get({ plain: true }));
  } catch (error) {
    console.error(error);
  }
};
// newUser(
//   "Henk",
//   "Tromp",
//   "henk@tromp.com",
//   "test5",
//   "+31-6232853",
//   "Willem Schoutenstraat",
//   53,
//   "1857HF",
//   "Netherlands"
// );

const userById = async (id) => {
  try {
    const specificUser = await User.findByPk(id, { include: { model: Order } });
    return specificUser.get({ plain: true });
  } catch (e) {
    console.log(e);
  }
};
// userById(1).then((user) => console.log(user));
