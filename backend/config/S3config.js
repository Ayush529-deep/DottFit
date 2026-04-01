const { S3Client } = require('@aws-sdk/client-s3');
require('dotenv').config();

// Initialize S3 Client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// S3 Constants
const BUCKET_NAME = 'visys-aiweb.ai4bazaar.com';
const BASE_PATH = 'ai4bazaar/INDIA/HYDERABAD/Dottfit';

const FOLDERS = {
  BLOG: "blogs", 
};

// URL Generator (forced HTTP)
const generateUrls = (key) => ({
  s3Url: `s3://${BUCKET_NAME}/${key}`,
  publicUrl: `http://${BUCKET_NAME}/${key}`, // forced http
});

module.exports = {
  s3Client,
  BUCKET_NAME,
  BASE_PATH,
  FOLDERS,
  generateUrls,
};
