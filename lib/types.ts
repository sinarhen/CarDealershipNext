type VehicleSummary = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};


interface BaseApiResponse {
    Count: number;
    Message: string;
    SearchCriteria: string;
}

type VehicleDetails = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};


export interface VehicleListResponse extends BaseApiResponse {
    Results: VehicleSummary[];
}

export interface VehicleDetailsResponse extends BaseApiResponse {
    Results: VehicleDetails[];
}