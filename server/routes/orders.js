import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// @route   POST /api/orders
// @desc    Create new order
router.post('/', async (req, res) => {
  try {
    const { orderItems, totalPrice, paymentMethod, user } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ message: 'No order items' });
      return;
    } else {
      const order = new Order({
        orderItems,
        user,
        paymentMethod,
        totalPrice,
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
