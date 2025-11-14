import { ArtImage } from "src/models/artImage";
export interface CartState{
    items: ArtImage[];
     totalPrice: number;
} 
export const initialState:CartState = {
    items: [
// {
//         id: 1,
//         title: 'Starry Night',
//         artDetails: 'A famous painting by Vincent van Gogh',
//         price: 100,
//         // imageUrl: 'https://example.com/starry-night.jpg',
//         sold: false,
// medium:{
//     id: 1,
//     mediumType: 'Oil on Canvas'
// },
// createdDate: new Date('1889-06-01'),
// soldDate: null,
// fileName: 'https://example.com/starry-night.jpg',
// // artImageFile: null,


// }

    ],
    totalPrice: 0
};