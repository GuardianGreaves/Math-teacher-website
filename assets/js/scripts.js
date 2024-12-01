document.getElementById('Pamyatka_pdd').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = 'assets/files/Pamyatka_pdd.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Pamyatka_pdd.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});

document.getElementById('Pravila_etiketa').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = 'assets/files/Pravila_etiketa.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Pravila_etiketa.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});

document.getElementById('Pravila_povedeniya_na_vode').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = 'assets/files/Pravila_povedeniya_na_vode.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Pravila_povedeniya_na_vode.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});

document.getElementById('Pravila_pozharnoy_bezopasnosti').addEventListener('click', function() {
    // URL файла, который нужно скачать
    var fileUrl = 'assets/files/Pravila_pozharnoy_bezopasnosti.pdf';

    // Создаем временный элемент <a>
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Pravila_pozharnoy_bezopasnosti.pdf'; // Имя файла для скачивания

    // Добавляем элемент <a> в документ и имитируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временный элемент <a>
    document.body.removeChild(link);
});

