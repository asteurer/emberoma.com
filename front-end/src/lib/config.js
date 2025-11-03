import * as Minio from 'minio';

let minioClient = null;
let bucketName = null;

function checkEnv() {
    let missingEnvs = [];
    if (!process.env.S3_ENDPOINT) {
        missingEnvs.push("S3_ENDPOINT");
    }

    if (!process.env.S3_ENDPOINT_PORT) {
        missingEnvs.push("S3_ENDPOINT_PORT");
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

    if (!process.env.USE_SSL) {
        missingEnvs.push("USE_SSL");
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
            endPoint: process.env.S3_ENDPOINT, // The URL without protocol and without port (e.g. `minio` instead of `https://minio:9000`)
            port: process.env.S3_ENDPOINT_PORT,
            useSSL: process.env.USE_SSL === 'true', // Minio in docker DOES NOT use SSL; however minio-tenant in Kubernetes DOES
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
