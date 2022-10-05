import { ServerRespond } from './DataStreamer';

export interface Row {
      price_abc: number,
      price_def: number,
      ratio: number,
      timestamp: date,
      upper_bound: number,
      lower_bound: number,
      trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow( serverRespond: Server Respond[]): Row {
const priceABC = (server respond[0].top ask.price + serverRespond [O].top_bid.price) / 2; 
const priceDEF = (serverRespond[1].top ask.price + serverRespond[1].top bid.price) / 2; 
const ratio = priceABC / priceDEF; 
const upperBound = 1 + 0.05; 
const lowerBound = 1 - 0.05; 
return { 
  price abc: priceABC, 
  price def: priceDEF, 
  ratio, timestamp: serverRespond[0].timestamp > serverRespond[1].timestamp ?
    serverRespond [O].timestamp: serverRespond[1].timestamp, 
    upper bound: upperBound, 
    lower bound: lowerBound, 
    trigger alert: (ratio > upperBound || ratio < lowerBound) ? ratio: undefined,
  };
}
    
