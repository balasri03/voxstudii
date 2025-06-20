import { adminLogin } from '../models/admin_login.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const authenticateAdminLogin = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body || {};
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }
        const user = await adminLogin.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid username' });
        }
        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        // Update lastLogin
        user.lastLogin = new Date();
        await user.save();
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error authenticating admin:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export { authenticateAdminLogin };