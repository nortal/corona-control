import allHospitals from '../data/hospitals.json';
import ResourceStatistics, { StakeHolderStatus } from '../api/model/Resources';
import { StockStatus } from '../api/model/ResourceStatusPayload';

const getAllHospitals = () => allHospitals.sort((a, b) => (a.name > b.name) ? 1 : -1);
const getHospitalById = (id: string) => allHospitals.find(hospital => hospital.id === id);


const toResourceStatistics = (hits: any): ResourceStatistics[] => {
    let stats: ResourceStatistics[] = [];

    stats.push(toResourceStatistic("masksStockStatus", "Mundschutz", hits));
    stats.push(toResourceStatistic("disinfectantStockStatus", "Desinfektionsmittel", hits));
    stats.push(toResourceStatistic("protectiveGearStockStatus", "Schutzkleidung", hits));
    stats.push(toResourceStatistic("antibioticsStockStatus", "Antibiotika", hits));
    stats.push(toResourceStatistic("antiPneumoniaDrugStockStatus", "Pneumonie-Medikament", hits));

    return stats;
}

const toResourceStatistic = (stock: string, label: string, hits: any): ResourceStatistics => {
    let stat: ResourceStatistics = { label: label, stakeholderStatuses: toStakeholderStatuses(stock, hits), nrOk: 0, nrLow: 0, nrCritical: 0, nrOutOfStock: 0 };

    stat.stakeholderStatuses.forEach(status => {
        switch (status.stockStatus) {
            case StockStatus.OK: {
                stat.nrOk++;
                break;
            }
            case StockStatus.LOW: {
                stat.nrLow++;
                break;
            }
            case StockStatus.CRITICAL: {
                stat.nrCritical++;
                break;
            }
            case StockStatus.OUT_OF_STOCK: {
                stat.nrOutOfStock++;
                break;
            }
        }
    }
    );

    stat.stakeholderStatuses.sort((a, b) => {
        if (getStatusWeight(a.stockStatus) < getStatusWeight(b.stockStatus)) return 1;
        if (getStatusWeight(a.stockStatus) > getStatusWeight(b.stockStatus)) return -1;
        return 0;
    })

    return stat;
}

const getStatusWeight = (status: StockStatus) => {
    switch (status) {
        case StockStatus.OK:
            return 1;
        case StockStatus.LOW:
            return 2;
        case StockStatus.CRITICAL:
            return 3;
        case StockStatus.OUT_OF_STOCK:
            return 4;
    }
}

const toStakeholderStatuses = (stock: string, hits: any): StakeHolderStatus[] => {
    return hits.map((hit: any) => toStakeHolderStatus(stock, hit['_source']));
}

const toStakeHolderStatus = (stock: string, source: any): StakeHolderStatus => {
    return {
        name: source['name'],
        contact: source['phone'] || source['address'],
        stockStatus: source[stock]
    }
}

export { getAllHospitals, getHospitalById, toResourceStatistics };
