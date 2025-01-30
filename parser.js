const axios = require('axios');

async function fetchOrdersWithRetry(maxRetries = 3, attempt = 1) {
    const data = {
        userId: 73331587,
        tokenId: "USDT",
        currencyId: "RUB",
        payment: ["581", "582"],
        side: "1",
        size: "20",
        page: "1",
        amount: "",
        vaMaker: false,
        bulkMaker: false,
        canTrade: false,
        verificationFilter: 0,
        sortType: "TRADE_PRICE",
        paymentPeriod: [],
        itemRegion: 1
    };

    try {
        // Выполняем запрос к API Bybit
        const response = await axios.post('https://api2.bybit.com/fiat/otc/item/online', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200 && response.data.result && response.data.result.items) {
            return response.data.result.items.map(user => ({
                name: user.nickName,
                recentOrderNum: user.recentOrderNum,
                lastQuantity: user.lastQuantity,
                price: user.price,
                remark: user.remark,
            }));
        } else {
            throw new Error(`Ошибка HTTP запроса, код ответа: ${response.status}`);
        }
    } catch (error) {
        if (error.response && error.response.status === 504 && attempt < maxRetries) {
            console.warn(`Попытка №${attempt} не удалась с ошибкой 504. Повторная попытка...`);
            return fetchOrdersWithRetry(maxRetries, attempt + 1);
        } else {
            console.error('Ошибка при выполнении запросов:', error);
            return [];
        }
    }
}

module.exports = {
    fetchOrders: fetchOrdersWithRetry
};