const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const path = require('path')
const {fetchOrders} = require('../parser')
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

// Supabase
const supabase = createClient(process.env.SUPBASE_URL, process.env.SUPABASE_KEY);


// API на таблицу с пользователями
app.get('/api/data', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) {
            throw error;
        };

        res.json(data);
    } catch (error) {
        console.error('Ошибка получения данных с Supabase:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// API на Bybit
app.get('/api/parser', async (req, res) => {
    try {
        let result = await fetchOrders()

        if (!result) throw error;
        res.json(result);
    } catch (error) {
        console.error('Ошибка получения данных с Bybit:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    };
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});