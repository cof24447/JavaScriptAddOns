// import { BlobServiceClient } from '@azure/storage-blob';

// const uploadFile = async (blobName,storageAccountName,sasToken)=>{
//     try {
//     // Create the BlobServiceClient using the SAS token
//     // const blobServiceClient = new azureStorageBlob.BlobServiceClient(
//     //     `https://${storageAccountName}.blob.core.windows.net?${sasToken}`
//     // );
//     console.log(window)
   
//     setTimeout(()=>{
//         console.log(window.azureStorageBlob)
//     },1000)

//     const blobServiceClient = new BlobServiceClient(
//         `https://${storageAccountName}.blob.core.windows.net?${sasToken}`
//     )

//     // Get a container client
//     const containerClient = blobServiceClient.getContainerClient(containerName);

//     // Get a block blob client
//     const blockBlobClient = containerClient.getBlockBlobClient("myUpload.jpg");

//     // Upload the file to the blob
//     const uploadBlobResponse = await blockBlobClient.upload(blobName);
//     console.log(`Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`);
//     } catch (error) {
//         console.error("Error uploading blob:", error);
//         console.log(`Error uploading blob: ${error.message}`);
//     }
// }

