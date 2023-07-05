import jsonwebtoken from 'jsonwebtoken';

export const generateToken = (data) => jsonwebtoken.sign(data, process.env.TOKEN_SECRET, { expiresIn: '999y' });

export const verifyToken = (token) => token;
