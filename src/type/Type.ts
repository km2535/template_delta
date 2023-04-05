export default interface ItemsTypes {  
    ID: string,
    BRAND: string,
    TITLE: string,
    CATEGORY1: string,
    CATEGORY2: string,
    CATEGORY3: string,
    PRICE: string,
    EVENT_PRICE: string,
    DELIVERY_PRICE: string,
    NONE_TAX: string,
    DELIVERY_DATE: string,
    OPTIONS: string,
    INFO: string,
    MORE_INFO: string,
    IMG_URL: string,
    THUMB: string,
    LIKE: string,
    DATE: string
}

export interface optionsType {
  ID : string,
  ARRANGE : string,
  LIST_COUNT: string,
  TITLE: string
}

export interface textOption {
  "font-size" ?: string, 
  "font-weight" ?: string, 
  "font-style" ?: string, 
  "text-align" ?: string, 
  "text"?: string,
  "IMG"?: boolean,
  "IMG_URL"?:string
}

export interface navbar {
  id?: string,
  listName?:string
}
export interface navbarMenu {
  navbarMenu : navbar[]
}

export interface user{
  id : string,
  email: string,
  name: string,
  picture: string,
  IsAdmin: boolean,
}