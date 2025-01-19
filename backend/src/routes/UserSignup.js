import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, WalletPin } = req.body;

  console.log(req.body);

 
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Password and confirm password do not match" });
  }

  if (!WalletPin || WalletPin.length !== 4) {
    return res.status(400).json({ error: "WalletPin must be a 4-digit PIN" });
  }

  try {
 
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    // Create the user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        WalletPin,
        UpiId: email + ".upi",
      },
    });

    const randomBalance = Math.floor(Math.random() * 200) + 1;

    // Convert the number to a string with 2 decimal places
    const randomBalanceString = randomBalance.toString(); // Convert the number to string

    // Create the balance entry for the user
    const balance = await prisma.balance.create({
      data: {
        balance: randomBalanceString, // Store as a string
        userId: user.id,
      },
    });

    res.json({
      message: "User created successfully",
      user,
      balance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while creating the user and balance",
      message: error.message,
    });
  }
});

export default router;
