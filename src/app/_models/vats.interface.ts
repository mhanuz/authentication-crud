export interface Vats{
    message: string;
    count: number;
    data: VatsData;
}

interface VatsData{
    id: number;
    name: string;
    vatRate: number;
    description: string;
    qbId: number;
    qbName: string;
    isSynced: boolean;
    syncedTime: string;
    syncedBy: number;
    idDefault: boolean;
}