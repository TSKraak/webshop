const {
  user: User,
  order: Order,
  orderitem: OrderItem,
  product: Product,
  category: category,
} = require("./models");

const userById = async (id) => {
  try {
    const specificUser = await User.findByPk(id, {
      include: { model: Order },
    });
    return specificUser.get({ plain: true });
  } catch (e) {
    console.log(e);
  }
};

userById(1).then((user) => console.log(user));
