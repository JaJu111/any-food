export interface IRestaurant {
    id: string;
    name: string;
    averageRating: number;
    location: {
        lat: number;
        lng: number;
    }
    headerImage: string;
    logo: string;
    menu: string[];
    reviews: string[];
    cuisines: string[];
}