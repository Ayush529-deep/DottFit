// const { BUCKET_NAME, BASE_PATH, generateUrls } = require('../config/S3config');
// const sharp = require('sharp');
// const {
//   PutObjectCommand,
//   ListObjectsV2Command,
//   DeleteObjectCommand
// } = require('@aws-sdk/client-s3');
// const { s3Client } = require('../config/S3config');

// class S3Service {

//   static get supportedFolder() {
//     return 'blogs';
//   }

//   static generateShortId() {
//     return Math.random().toString(36).substring(2, 12);
//   }

//   static async uploadFile(file, entityId) {
//     if (!file?.buffer) {
//       throw new Error('Invalid file buffer');
//     }

//     const fileName = `${this.generateShortId()}.webp`;
//     const key = `${BASE_PATH}/${this.supportedFolder}/${entityId}/${fileName}`;

//     const webpBuffer = await sharp(file.buffer)
//       .webp({ quality: 80 })
//       .toBuffer();

//     const command = new PutObjectCommand({
//       Bucket: BUCKET_NAME,
//       Key: key,
//       Body: webpBuffer,
//       ContentType: 'image/webp',
//     });

//     await s3Client.send(command);

//     return {
//       key,
//       ...generateUrls(key),
//     };
//   }

//   static async deleteFile(key) {
//     const command = new DeleteObjectCommand({
//       Bucket: BUCKET_NAME,
//       Key: key,
//     });

//     await s3Client.send(command);
//   }

//   static async listFiles(entityId) {
//     const command = new ListObjectsV2Command({
//       Bucket: BUCKET_NAME,
//       Prefix: `${BASE_PATH}/${this.supportedFolder}/${entityId}/`,
//     });

//     const data = await s3Client.send(command);

//     return (data.Contents || []).map(file => ({
//       key: file.Key,
//       ...generateUrls(file.Key),
//     }));
//   }
// }

// module.exports = S3Service;


const sharp = require('sharp');
const {
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
} = require('@aws-sdk/client-s3');
const { s3Client, BUCKET_NAME, BASE_PATH, generateUrls } = require('../config/S3config');

class S3Services {
  static get supportedFolder() {
    return 'testimonials'; // folder name in S3
  }

  static generateShortId() {
    return Math.random().toString(36).substring(2, 12);
  }

  static async uploadFile(file, entityId) {
    if (!file?.buffer) {
      throw new Error('Invalid file buffer');
    }

    const isImage = file.mimetype.startsWith('image/');
    const isVideo = file.mimetype.startsWith('video/');
    const isAudio = file.mimetype.startsWith('audio/');

    const ext = file.originalname.split('.').pop(); // keep original extension
    const fileName = isImage
      ? `${this.generateShortId()}.webp`   // images -> webp
      : `${this.generateShortId()}.${ext}`; // video/audio -> keep original extension

    const key = `${BASE_PATH}/${this.supportedFolder}/${entityId}/${fileName}`;

    let uploadBuffer = file.buffer;
    let contentType = file.mimetype;

    // Only process images
    if (isImage) {
      uploadBuffer = await sharp(file.buffer)
        .webp({ quality: 80 })
        .toBuffer();
      contentType = 'image/webp';
    }

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: uploadBuffer,
      ContentType: contentType,
    });

    await s3Client.send(command);

    return {
      key,
      ...generateUrls(key),
    };
  }

  static async deleteFile(key) {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    await s3Client.send(command);
  }

  static async listFiles(entityId) {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `${BASE_PATH}/${this.supportedFolder}/${entityId}/`,
    });

    const data = await s3Client.send(command);

    return (data.Contents || []).map(file => ({
      key: file.Key,
      ...generateUrls(file.Key),
    }));
  }
}

module.exports = S3Services;
