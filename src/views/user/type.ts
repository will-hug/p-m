export interface tableDataItem {
  id?: number|null;
  name: string|null;
  superior: string|null;
  post: string|null;
  organize: string|null;
  phone: number|null;
  power: [];
  enable: boolean;
  company: string|null;
}
 
export interface tableColumns {
  id: string;
  label: string;
  width: string;
  sortable: boolean | string;
}