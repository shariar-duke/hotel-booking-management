import mongoose, {Schema} from "mongoose";

const hotelSchema = new Schema({
    name: {
      required: true,
      type: String
    },
    address1: {
      required: true,
      type: String
    },
    airportCode: {
      required: true,
      type: String
    },
    city: {
      required: false,
      type: String
    },
    countryCode: {
      required: false,
      type: String
    },
    highRate: {
      required: false,
      type: Number
    },
    lowRate: {
      required: false,
      type: Number
    },
    propertyCategory: {
      required: false,
      type: Number
    },
    stateProvinceCode: {
      required: false,
      type: String
    },
    thumbNailUrl: {
      required: false,
      type: String
    },
    gallery: {
      required: false,
      type: Array
    },
    overview: {
      required: false,
      type: String
    },
    amenities: {
      required: false,
      type: Array
    }
  });

  export const hotelModel = mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema);
  // ei line a j check ta hoy seta holo mongoose er model er modhe hotels model ta add hoise naki. jode add hye thake tahke oi model ta export korbo jode na hoy tahole create kore return korbo 