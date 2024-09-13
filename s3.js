console.clear();
const fs = require('fs');
const path = require('path');
require('dotenv').config();
// console.log(process.env)
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// s3.listBuckets((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

const listBuckets = async () => {
    try {
        const data = await s3.listBuckets().promise();
        console.log(data);
    } catch (error) {
        console.log(error, error.stack);
    }
}

const uploadFileToS3 = (filePath, bucketName) => {
    const file = fs.readFileSync(filePath);
    const params = {
        Bucket: bucketName,
        Key: path.basename(filePath),
        Body: file,
    };
    s3.upload(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
};

listBuckets();
uploadFileToS3('sample_files/example.txt', 'aws-sdk-node-app');
uploadFileToS3('sample_files/file_example_JPG_100kB.jpg', 'aws-sdk-node-app');