import { Component, Vue } from "vue-property-decorator";

import { IRestaurant } from "@/mixins/restaurants/index";

@Component
export default class RestaurantsMixin extends Vue {
    restaurants: IRestaurant[] = [
        {
            "id": "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
            "name": "Dishoom",
            "averageRating": 4,
            "location": {
                "lat": 51.5130793381364,
                "lng": -0.139689445495605
            },
            "headerImage": "https://course-react.javascript.ru/assets/header/sushi_5.jpg",
            "logo": "https://course-react.javascript.ru/assets/thumb/sushi_5.jpg",
            "menu": [
                "d75f762a-eadd-49be-8918-ed0daa8dd024",
                "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
                "bd129641-c0eb-432b-84b6-8b81d2930358"
            ],
            "reviews": [
                "5909796d-5030-4e36-adec-68b8f9ec2d96",
                "429dea85-11dd-4054-a31e-c60c92e17255"
            ],
            "cuisines": [
                "pizza",
                "sushi",
                "vegan"
            ]
        },
        {
            "id": "bb8afbec-2fec-491f-93e9-7f13950dd80b",
            "name": "Homeslice",
            "averageRating": 4.6,
            "location": {
                "lat": 51.5184768470811,
                "lng": -0.139996065347018
            },
            "headerImage": "https://course-react.javascript.ru/assets/header/ribs_5.jpg",
            "logo": "https://course-react.javascript.ru/assets/thumb/ribs_5.jpg",
            "menu": [
                "25402233-0095-49ea-9939-1e67ed89ffb9",
                "90902233-0095-49ea-9939-1e67ed89ffb9"
            ],
            "reviews": [
                "53b642d7-5e86-4717-a466-0640a1dee076",
                "c27ab88e-375c-4e98-aa94-8a180150a797",
                "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a"
            ],
            "cuisines": [
                "steak"
            ]
        },
        {
            "id": "982bfbce-c5e0-41a0-9f99-d5c20ecee49d",
            "name": "Fabrique",
            "averageRating": 5,
            "location": {
                "lat": 51.5136144563425,
                "lng": -0.128496135992707
            },
            "headerImage": "https://course-react.javascript.ru/assets/header/sushi_2.jpg",
            "logo": "https://course-react.javascript.ru/assets/thumb/sushi_2.jpg",
            "menu": [
                "08c9ffa0-d003-4310-9e15-20978743296e",
                "64a4967c-2080-4a99-9074-4655a4569a95",
                "4bc8528e-26d1-46c3-a522-8e18d10c8c84"
            ],
            "reviews": [
                "13b642d7-5e86-4717-a466-0640a1dee076"
            ],
            "cuisines": [
                "asian",
                "sushi",
                "seafood"
            ]
        },
        {
            "id": "d9241927-09e1-44f3-8986-a76346869037",
            "name": "Flat Iron",
            "averageRating": 5,
            "location": {
                "lat": 51.5108414674603,
                "lng": -0.124092702110708
            },
            "headerImage": "https://course-react.javascript.ru/assets/header/pizza_4.jpg",
            "logo": "https://course-react.javascript.ru/assets/thumb/pizza_4.jpg",
            "menu": [
                "6c02c2ce-b868-4191-b4a7-8686429f4bac",
                "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d"
            ],
            "reviews": [
                "5db6247b-ab1c-49db-be1f-8dd27fd38b81",
                "381b0c31-6360-43ff-80d1-581a116159d8"
            ],
            "cuisines": [
                "pasta",
                "pizza"
            ]
        }                                         
    ]    
}


