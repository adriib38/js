"use strict";

/**
 * 
 * Notificaciones en el navegador, para que el usuario sepa que hay algo nuevo en la página 
 * 
 */

if(!('Notification' in window)) {
    console.log('This browser does not support notifications.');
}else{
    console.log('This browser supports notifications.');
}

Notification.requestPermission(()=> {
    console.log('Permiso concedido');

    // Programar la notificación para que se envíe a una hora determinada
    let notification = new Notification('Hello world', {
        tag: 'message1',
        icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        body: 'This is an example of a notification',
        requireInteraction: true,
        data: {
            url: 'https://www.youtube.com'
        },
    });

    new Notification('Hello world!');
});

