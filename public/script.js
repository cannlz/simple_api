document.addEventListener('DOMContentLoaded', () => {
    usersTable('/api/data', 'users-tbody');
    ordersParser('/api/parser', 'merchants-tbody');

    const button = document.getElementById('button-search-username');
    button.addEventListener('click', searchUsers);
});

function usersTable(apiUrl, tableId){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById(tableId);
            tableBody.innerHTML = ''; // Чистим таблицу

            data.forEach(item => {
                console.log(item)
                const row = document.createElement('tr');

                const cellId = document.createElement('td');
                cellId.textContent = item.id;
                row.appendChild(cellId);

                const cellorderNo = document.createElement('td');
                cellorderNo.textContent = item.orderNo;
                row.appendChild(cellorderNo);

                const cellp2pConvert = document.createElement('td');
                cellp2pConvert.textContent = item.p2pConvert;
                row.appendChild(cellp2pConvert);

                const cellsideOreder = document.createElement('td');
                cellsideOreder.textContent = item.sideOreder;
                row.appendChild(cellsideOreder);

                const cellfiatAmount = document.createElement('td');
                cellfiatAmount.textContent = item.fiatAmount;
                row.appendChild(cellfiatAmount);

                const cellCurrency = document.createElement('td');
                cellCurrency.textContent = item.currency;
                row.appendChild(cellCurrency);

                const cellPrice = document.createElement('td');
                cellPrice.textContent = item.price;
                row.appendChild(cellPrice);

                const cellcurrencySec = document.createElement('td');
                cellcurrencySec.textContent = item.currencySec;
                row.appendChild(cellcurrencySec);

                const cellcoinAmount = document.createElement('td');
                cellcoinAmount.textContent = item.coinAmount;
                row.appendChild(cellcoinAmount);

                const cellCryptocurrency = document.createElement('td');
                cellCryptocurrency.textContent = item.cryptocurrency;
                row.appendChild(cellCryptocurrency);

                const cellTransactionFees = document.createElement('td');
                cellTransactionFees.textContent = item.transactionFees;
                row.appendChild(cellTransactionFees);

                const cellCryptocurrencySec = document.createElement('td');
                cellCryptocurrencySec.textContent = item.cryptocurrencySec;
                row.appendChild(cellCryptocurrencySec);

                const cellCounterparty = document.createElement('td');
                cellCounterparty.textContent = item.counterparty;
                row.appendChild(cellCounterparty);

                const cellStatus = document.createElement('td');
                cellStatus.textContent = item.status;
                row.appendChild(cellStatus);

                const cellTime = document.createElement('td');
                cellTime.textContent = item.time;
                row.appendChild(cellTime);

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

function searchUsers(){
    let searchInput = document.getElementById('input-search-username').value.trim();
    fetch(`/api/users?search=${encodeURIComponent(searchInput)}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("users-tbody");
            tableBody.innerHTML = ''; // Чистим таблицу

            data.forEach(item => {
                console.log(item)
                const row = document.createElement('tr');

                const cellId = document.createElement('td');
                cellId.textContent = item.id;
                row.appendChild(cellId);

                const cellorderNo = document.createElement('td');
                cellorderNo.textContent = item.orderNo;
                row.appendChild(cellorderNo);

                const cellp2pConvert = document.createElement('td');
                cellp2pConvert.textContent = item.p2pConvert;
                row.appendChild(cellp2pConvert);

                const cellsideOreder = document.createElement('td');
                cellsideOreder.textContent = item.sideOreder;
                row.appendChild(cellsideOreder);

                const cellfiatAmount = document.createElement('td');
                cellfiatAmount.textContent = item.fiatAmount;
                row.appendChild(cellfiatAmount);

                const cellCurrency = document.createElement('td');
                cellCurrency.textContent = item.currency;
                row.appendChild(cellCurrency);

                const cellPrice = document.createElement('td');
                cellPrice.textContent = item.price;
                row.appendChild(cellPrice);

                const cellcurrencySec = document.createElement('td');
                cellcurrencySec.textContent = item.currencySec;
                row.appendChild(cellcurrencySec);

                const cellcoinAmount = document.createElement('td');
                cellcoinAmount.textContent = item.coinAmount;
                row.appendChild(cellcoinAmount);

                const cellCryptocurrency = document.createElement('td');
                cellCryptocurrency.textContent = item.cryptocurrency;
                row.appendChild(cellCryptocurrency);

                const cellTransactionFees = document.createElement('td');
                cellTransactionFees.textContent = item.transactionFees;
                row.appendChild(cellTransactionFees);

                const cellCryptocurrencySec = document.createElement('td');
                cellCryptocurrencySec.textContent = item.cryptocurrencySec;
                row.appendChild(cellCryptocurrencySec);

                const cellCounterparty = document.createElement('td');
                cellCounterparty.textContent = item.counterparty;
                row.appendChild(cellCounterparty);

                const cellStatus = document.createElement('td');
                cellStatus.textContent = item.status;
                row.appendChild(cellStatus);

                const cellTime = document.createElement('td');
                cellTime.textContent = item.time;
                row.appendChild(cellTime);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Ошибка поиска:', error));
}