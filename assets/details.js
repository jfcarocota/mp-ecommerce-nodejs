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
    payer: {
        name: 'Lalo',
        surname: 'Landa',
        email: 'test_user_81131286@testuser.com',
        phone: {
            area_code: '52',
            number: 5549737300
        },
        address: {
            street_name: 'Insurgentes Sur',
            street_number: 1602,
            zip_code: '03940'
        }
    },
    back_urls: {
        success: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/',
        failure: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/failure',
        pending: 'https://jfcarocota-mp-commerce-nodejs.herokuapp.com/pending'
    },
    auto_return: 'approved',
    payment_methods: {
        excluded_payment_methods: [
            {
                id: 'amex'
            }
        ],
        excluded_payment_types: [
            {
                id: 'atm'
            }
        ],
        installments: 6
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
        //window.open(payment.init_point);
        window.open(payment.init_point,'_self');
    });
}

//payment();

btnPayment.onclick = payment;