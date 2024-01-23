import { QrCodePix } from 'qrcode-pix';
import { v4 as uuidv4 } from 'uuid';


export default async function makeQrCode(props){

    const qrCodePix = QrCodePix({
        version: '01',
        key: props.key, //or any PIX key
        name: props.name,
        city: props.city,
        transactionId: uuidv4().replace(/-/g, '').substring(0, 25), //max 25 characters
        message: props.message ? props.message : '',
        cep: '99999999',
        value: props.value ? props.value : 0,
    });
    
    const qrCode = await qrCodePix.base64()
    
    return qrCode
}