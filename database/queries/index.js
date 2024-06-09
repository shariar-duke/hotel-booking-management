import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllHotels() {
    const hotels = await hotelModel
    .find()
    .lean();

    return replaceMongoIdInArray(hotels);
}

// hotel model theke sob data tule anbe ei function and  object id gula k replace kore just id banabe 