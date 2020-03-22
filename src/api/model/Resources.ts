import { StockStatus } from "./ResourceStatusPayload";

export interface StakeHolderStatus {
    name: string,
    contact: string,
    stockStatus: StockStatus
}

export interface Stocks {
    nrOk: number,
    nrLow: number,
    nrCritical: number,
    nrOutOfStock: number
}

export default interface ResourceStatistics extends Stocks {
    label: string,
    stakeholderStatuses: StakeHolderStatus[]
}
