import {Get, Post} from "./ApiBase";

const host = "http://localhost:8005/loansys_api";
// const host = "http://181.215.246.126:8004/loansys_api";

export const apiAdminLogin = (params: any) => {
    return Post(`${host}/admin/loginAdmin`, params);
};

export const apiLoadStatisticLoan = (params: any) => {
    return Post(`${host}/admin/loadStatisticLoan`, params);
};

export const apiListLoanApplication = (params: any) => {
    return Post(`${host}/admin/listLoanApplication`, params);
};

export const apiLoadExportData1 = (params: any) => {
    return Post(`${host}/admin/loadExportData1`, params);
};
