import { Component, Vue } from "vue-property-decorator";

import { IReview } from "@/mixins/reviews/index";

@Component
export default class ReviewsMixin extends Vue {
    reviews: IReview[] = [
        {
            "id": "5909796d-5030-4e36-adec-68b8f9ec2d96",
            "userName": "Antony",
            "text": "Not bad",
            "rating": 5
        },
        {
            "id": "429dea85-11dd-4054-a31e-c60c92e17255",
            "userName": "Sam",
            "text": "No burgers",
            "rating": 3
        },
        {
            "id": "53b642d7-5e86-4717-a466-0640a1dee076",
            "userName": "Diana",
            "text": "Perfect Margarita",
            "rating": 5
        },
        {
            "id": "c27ab88e-375c-4e98-aa94-8a180150a797",
            "userName": "Sam",
            "text": "No burgers again. But Chef Pizza is the best one",
            "rating": 4
        },
        {
            "id": "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
            "userName": "Lolly",
            "text": "Good for lunch",
            "rating": 5
        },
        {
            "id": "13b642d7-5e86-4717-a466-0640a1dee076",
            "userName": "Agata",
            "text": "Best bakery",
            "rating": 5
        },
        {
            "id": "5db6247b-ab1c-49db-be1f-8dd27fd38b81",
            "userName": "Sam",
            "text": "Finally! This place is amazing place for breakfast, lunch, dinner and supper",
            "rating": 5
        },
        {
            "id": "381b0c31-6360-43ff-80d1-581a116159d8",
            "userName": "Rebeca",
            "text": "Meat here is extremely delicious",
            "rating": 5
        }                              
    ]    
}


