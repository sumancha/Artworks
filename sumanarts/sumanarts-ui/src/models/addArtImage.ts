
 

export interface AddArtImage   {
     imageFile?:File
      title: string ;
    artDetails: string ;
    
    // artImageFile: file ;
    sold: boolean ;
    price: number ;
    createdDate: Date | null ;
    soldDate: Date | null ;
    mediumId: number;

    
    }
