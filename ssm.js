require('dotenv').config();
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'}); // N. Virginia region code: us-east-1
const ssm = new AWS.SSM();

const secret = {
    Name: "/App1/ParamFromCode",
    Value: "P@sSwW)rd",
    Type: "String"
}

ssm.putParameter(secret, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});

const param = {
    Name: "/App1/Param1",
}

ssm.getParameter(param, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});
