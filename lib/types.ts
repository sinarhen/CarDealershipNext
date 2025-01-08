type VehicleResult = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};

type ApiResponse = {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: VehicleResult[];
};