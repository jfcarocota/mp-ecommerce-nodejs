const btnPayment = document.getElementById('checkout');

let preference = {
    items: [
      {
        id: 1234,
        title: document.getElementById('title').innerHTML,
        description: 'Dispositivo móvil de Tienda e-commerce',
        picture_url: document.getElementById('image').src,
        quantity: parseInt(document.getElementById('unit').innerHTML),
        currency_id: 'MXN',
        unit_price: parseFloat(document.getElementById('price').innerHTML),
      }
    ],
    back_urls: {
        success: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/',
        failure: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/',
        pending: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/'
    },
    auto_return: 'approved',
    payment_methods: {
        excluded_payment_methods: [
            {
                id: 'american'
            }
        ],
        installments: 12
    },
    notification_url: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/notifications',
    external_reference: 'jfcarocota@gmail.com'
}

const payment = ()=>{
    //console.log(preference);
    fetch('https://jfcarocota-mp-commerce-nodejs.herokuapp.com/checkout', {
        method: 'post',
        body: JSON.stringify(preference),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(payment => {
        console.log(payment);
        window.open(payment.init_point);
    });
}

btnPayment.onclick = payment;