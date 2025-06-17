import * as Minio from 'minio';

let minioClient = null;
let bucketName = null;

function checkEnv() {
    let missingEnvs = [];
    if (!process.env.BASE_URL) {
        missingEnvs.push("BASE_URL");
    }

    if (!process.env.ACCESS_KEY) {
        missingEnvs.push("ACCESS_KEY");
    }

    if (!process.env.SECRET_KEY) {
        missingEnvs.push("SECRET_KEY");
    }

    if (!process.env.BUCKET_NAME) {
        missingEnvs.push("BUCKET_NAME");
    }

    if (missingEnvs.length > 0) {
        console.error(`ERROR the following environment variables are required but not set: ${missingEnvs.join(", ")}`);
        process.exit(1);
    }
}

function getMinioClient() {
    if (!minioClient) {
        checkEnv();
        minioClient = new Minio.Client({
            endPoint: process.env.BASE_URL,
            port: 9000,
            useSSL: true,
            accessKey: process.env.ACCESS_KEY,
            secretKey: process.env.SECRET_KEY
        });
    }

    return minioClient;
}

function getBucketName() {
    if (!bucketName) {
        checkEnv();
        bucketName = process.env.BUCKET_NAME;
    }

    return bucketName;
}

export { getMinioClient, getBucketName };