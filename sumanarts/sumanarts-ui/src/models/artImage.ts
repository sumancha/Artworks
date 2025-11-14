// import { FormFile } from "./formFile";
 

export interface ArtImage {
    id: number;
      title: string | null;
    artDetails: string | null;
    fileName: string | null;
    // artImageFile: FormFile | null;
    sold: boolean | null;
    price: number | null;
    createdDate: Date | null;
    soldDate: Date | null;
    // mediumId: number;
    medium: Medium;
}

export interface Medium {
    id: number;
    mediumType: string;
}