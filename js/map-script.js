ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.648447, 37.540186],
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.648, 37.540186], {
            hintContent: 'ул. Бутлерова, д. 17 Б',
            balloonContentHeader: 'Квадроком-персонал',
            balloonContentBody: 'Москва, ул. Бутлерова, д. 17 Б, офис 60.'
        }, {
            preset: "islands#redStretchyIcon",
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/placeholder.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-10, -80]
        });

    //myMap.controls.add('zoomControl');

    myMap.geoObjects.add(myPlacemarkWithContent),


    myMap.behaviors.disable('scrollZoom');
});
