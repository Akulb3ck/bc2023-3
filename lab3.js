const fs = require('fs');

try {
    const data = fs.readFileSync('newdata.json', 'utf8'); // Зчитування файлу синхронно

    const jsonData = JSON.parse(data);
    const output = [];

    jsonData.forEach(item => {
        if (item.ku === '13' && item.value > 5) {
            output.push(item.value);
        }
    });

    fs.writeFileSync('output.txt', output.join('\n'), 'utf8'); // Запис даних синхронно

    console.log("Дані були успішно записані в файл output.txt");
} catch (error) {
    console.error("Помилка при роботі з файлами:", error);
}

