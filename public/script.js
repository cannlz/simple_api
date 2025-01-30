document.addEventListener('DOMContentLoaded', () => {
    usersTable('/api/data', 'users-tbody');
    ordersParser('/api/parser', 'merchants-tbody');
    
});

function usersTable(apiUrl, tableId){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById(tableId);
            tableBody.innerHTML = ''; // Чистим таблицу

            data.forEach(item => {
                const row = document.createElement('tr');

                const cellId = document.createElement('td');
                cellId.textContent = item.id;
                row.appendChild(cellId);

                const cellName = document.createElement('td');
                cellName.textContent = item.userName;
                row.appendChild(cellName);

                const cellEmail = document.createElement('td');
                cellEmail.textContent = item.ordersCount;
                row.appendChild(cellEmail);

                const cellProfit = document.createElement('td');
                cellProfit.textContent = item.profit + "$";
                row.appendChild(cellProfit);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Ошибка получения данных:', error));
}

function ordersParser(apiUrl, tableId){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById(tableId);
        tableBody.innerHTML = ''; // Чистим таблицу

        data.forEach(item => {
            const row = document.createElement('tr');

            const cellNameMerchant = document.createElement('td');
            cellNameMerchant.textContent = item.name;
            row.appendChild(cellNameMerchant);

            const cellCountOrders = document.createElement('td');
            cellCountOrders.textContent = item.recentOrderNum;
            row.appendChild(cellCountOrders);

            const cellBalanceUSDT = document.createElement('td');
            cellBalanceUSDT.textContent = item.lastQuantity;
            row.appendChild(cellBalanceUSDT);

            const cellPriceUSDT = document.createElement('td');
            cellPriceUSDT.textContent = item.price + "$";
            row.appendChild(cellPriceUSDT);

            const cellDescription = document.createElement('td');
            cellDescription.textContent = item.remark;
            row.appendChild(cellDescription);

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Ошибка получения данных:', error));
}