<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $st = $_POST['st'];
    $home = $_POST['home'];
    $corpus = $_POST['corpus'];
    $flatnumb = $_POST['flatnumb'];
    $flor = $_POST['flor'];
    $message = $_POST['message'];
    $pay = $_POST['check'];
    $dontcall = $_POST['dontcall'];
    $dontcall = isset($dontcall) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Phone: ' . $phone . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Комментарии к заказу: ' . $message . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
            </ul>
        </body>
    </html>    
    ';
    $headers = "From: Администратор сайта <doooomen@gmail.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('doomen@ya.ru', 'Заказ', $mail_message, $headers);