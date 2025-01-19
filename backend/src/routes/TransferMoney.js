import express from 'express';
import prisma from '../db/index.js';

const router = express.Router();

router.post('/:from_id/:to_Id', async (req, res) => {

    const { from_id, to_Id } = req.params;
    const { amount } = req.body;
    
    try {
        const sender = await prisma.user.findUnique({
        where: {
            id: parseInt(from_id),
        },
        });
    
        const receiver = await prisma.user.findUnique({
        where: {
            id: parseInt(to_Id),
        },
        });
    
        if (!sender || !receiver) {
        return res.status(404).json({
            error: 'Sender or receiver not found',
        });
        }
    
        if (sender.balance < amount) {
        return res.status(400).json({
            error: 'Insufficient balance',
        });
        }
    
        const updatedSender = await prisma.user.update({
        where: {
            id: parseInt(from_id),
        },
        data: {
            balance: sender.balance - amount,
        },
        });
    
        const updatedReceiver = await prisma.user.update({
        where: {
            id: parseInt(to_Id),
        },
        data: {
            balance: receiver.balance + amount,
        },
        });
    
        res.json({
        message: 'Transfer successful',
        sender: updatedSender,
        receiver: updatedReceiver,
        });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({
        error: 'An error occurred while transferring money',
        message: error.message,
        });
    }





});

export default router;