enum StockStatus {
    OK = "BUSINESSES",
    LOW = "CONTENT",
    CRITICAL = "CRITICAL",
    OUT_OF_STOCK = "OUT_OF_STOCK"
}

interface ResourceStatusPayload {
    nrOfVirusPatients: number;
    nrOfVirusPatientsInICU: number;
    nrOfVirusPatientsInICULvl3: number;
    nrOfFreeBeds: number;
    nrOfFreeVentilators: number;
    nrOfNursesNeeded: number;
    nrOfPhysiciansNeeded: number;
    masksStockStatus: StockStatus;
    disinfectantStockStatus: StockStatus;
    protectiveGearStockStatus: StockStatus;
    antibioticsStockStatus: StockStatus;
    antiPneumoniaDrugStockStatus: StockStatus;
}

export default ResourceStatusPayload;