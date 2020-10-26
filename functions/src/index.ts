import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
    response.send({
        statusCode,
        body: JSON.stringify(body)
    });
};

export const addDataset = functions.https.onRequest(async (req: any, res: any) => {
    if (req.method !== 'POST') {
        sendResponse(res, 405, { error: "Invalid Request" })
    } else {
        const dataset = req.body;
        for (const key of Object.keys(dataset)) {
            const data = dataset[key];
            
            for (const _key of Object.keys(data)) {
                const _data = data[_key]
                await db.collection(key).doc(_key).set({..._data})
            }
        }
        sendResponse(res, 200, { message: 'Successfully added dataset! WooHoo!' });
    }
});