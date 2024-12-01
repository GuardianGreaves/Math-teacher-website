document.getElementById('oge').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = '../../assets/files/oge.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'oge.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});

document.getElementById('oge2019').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = '../../assets/files/oge2019.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'oge2019.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});


document.getElementById('oge2021').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = '../../assets/files/oge2021.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'oge2021.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});

