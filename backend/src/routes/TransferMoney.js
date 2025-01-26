import express from "express";
import prisma from "../db/index.js";
const router = express.Router();
router.post("/", async (req, res) => {
  const { receiverEmail, amount } = req.body;
  const senderId = req.userId; 

  console.log("Received receiverEmail:", receiverEmail);
  console.log("Received amount:", amount);
  console.log("Sender ID:", senderId);

  if (!receiverEmail || !amount) {
    return res.status(400).send({
      success: false,
      message: "Receiver email and amount are required",
    });
  }

  try {
    
    const result = await prisma.$transaction(async (prisma) => {
     
      const senderBalance = await prisma.balance.findFirst({
        where: { userId: senderId },
        lock: { mode: "forUpdate" },
      });

      if (!senderBalance) {
        throw new Error("Sender balance not found");
      }

      if (senderBalance.balance < amount) {
        throw new Error("Insufficient balance");
      }

      const receiver = await prisma.user.findUnique({
        where: {
          OR: [{ email: receiverEmail }, { UpiId: receiverEmail }],
        },
      });

      if (!receiver) {
        throw new Error("Receiver not found");
      }

      const receiverBalance = await prisma.balance.findFirst({
        where: { userId: receiver.id },
        lock: { mode: "forUpdate" }, // Lock the receiver's balance row
      });

      if (!receiverBalance) {
        throw new Error("Receiver balance not found");
      }

      // Perform the balance update in the transaction
      await prisma.balance.update({
        where: { userId: senderId },
        data: { balance: senderBalance.balance - amount },
      });

      await prisma.balance.update({
        where: { userId: receiver.id },
        data: { balance: receiverBalance.balance + amount },
      });

      // Log the transaction for both sender and receiver
      const transaction = await prisma.transaction.create({
        data: {
          senderId,
          receiverId: receiver.id,
          amount: amount,
        },
      });

      // Optional: Log a reverse transaction for the receiver (so that they have a record as well)
      await prisma.transaction.create({
        data: {
          senderId: receiver.id,
          receiverId: senderId,
          amount: amount,
        },
      });

      // Return success
      return {
        success: true,
        message: "Money transferred successfully",
      };
    });

    return res.send(result);
  } catch (error) {
    console.error("Error transferring money:", error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
