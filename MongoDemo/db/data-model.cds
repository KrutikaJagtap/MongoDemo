using { temporal, Currency} from '@sap/cds/common';
namespace krutika;
entity customer {
    key name: String(256);
    type: String(2);
    emailId: String(105);
    contactNo: String(32);
    address: String(256);
    companyName: String(128);
}