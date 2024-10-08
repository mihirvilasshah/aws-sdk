exports.handler = async(event) => {
    var response = {    
        statusCode: 404,    
        body: JSON.stringify({
            Error: 'No routes'
        }),
    };

    if (event.path === '/api/getproduct') {
        response = {    
            statusCode: 200,    
            body: JSON.stringify({
                ProductName: 'Product 1',
                Price: '₹100'
            }),
        };
    }
    if (event.path === '/api/getuser') {
        response = {    
            statusCode: 200,    
            body: JSON.stringify({
                UserName: 'Ram',
                Email: 'ram@mail.com'
            }),
        };
    }

    return response;
}