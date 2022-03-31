using { krutika } from '../db/data-model';

service CatalogService @(path:'/CatalogService'){
    entity customer as projection on krutika.customer;
}