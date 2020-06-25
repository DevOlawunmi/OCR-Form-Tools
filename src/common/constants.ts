// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { appInfo } from "./appInfo"

const appVersionArr = appInfo.version.split(".");
const appVersionMinor = appVersionArr[1] + "-preview";
appVersionArr[1] = appVersionMinor;
const appVersion = appVersionArr.join(".");

const apiVersion = "v2.1-preview.1";

/**
 * Constants used throughout application
 */
export const constants = {
    version: "pubpreview_1.0",
    appVersion,
    apiVersion,
    projectFormTempKey: "projectForm",
    projectFileExtensionOld: ".vott",
    projectFileExtension: ".fott",
    labelFileExtension: ".labels.json",
    ocrFileExtension: ".ocr.json",
    fieldsFileName: "fields.json",
    maxConcurrentServiceRequests: 3,
    statusCodeSucceeded: "succeeded",
    statusCodeFailed: "failed",
    apiKeyHeader: "Ocp-Apim-Subscription-Key",
    maxRetry: 8,
    initialRetryInterval: 500, // ms
    convertedImageFormat: "image/jpeg",
    convertedImageQuality: 0.7,
    convertedThumbnailQuality: 0.2,

    apiModelsPath: `/formrecognizer/${apiVersion}/custom/models`,

    pdfjsWorkerSrc(version: string) {
        return `//fotts.azureedge.net/npm/pdfjs-dist/${version}/pdf.worker.js`;
    },

    pdfjsCMapUrl(version: string) {
        return `//fotts.azureedge.net/npm/pdfjs-dist/${version}/cmaps/`;
    },
};
