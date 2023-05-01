import { Vonage } from "@vonage/server-sdk";

const createSms = (req, res) => {
  const vonage = new Vonage({
    applicationId: 'e0eeb1e4-a9f9-4010-8303-c511973e35f7',
    privateKey: './private.key'
  })
  
  const textMessage = 'Está é uma mesagem de sms enviar por D, para véia Fati ;)';
  const from = '+5588992617223'
  const to = '+5588992617223';
  
  vonage.messages.send({
    text: textMessage,
    messageType: "text",
    to: to,
    from: from,
    channel: "sms"
  })
  .then((response) => {
    console.log(response.messageUUID)
    return res.status(201).json("SMS enviado")
  })
  .catch((err) => {
    console.log(err)
  })
}

export default {
  createSms
}