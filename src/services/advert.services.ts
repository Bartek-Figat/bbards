import { Request, Response, NextFunction, RequestHandler } from 'express';
import Nominatim from 'nominatim-geocoder';
import { ObjectId } from 'mongodb';
import { Repository } from '../repositories/repositories';
import { StatusCode } from '../enum';

const geocoder = new Nominatim();
interface Advertisement {
  city: string;
  state: string;
  description: string;
  price: number;
  images: Array<string>;
  autor: {};
  date: Date;
  coordinates: Array<string>;
}

interface Coordinates {
  lat: string;
  lon: string;
}

export class AdvertService {
  constructor(private repository: Repository = new Repository()) {}

  async addAdvert(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { state, city, images, description, price } = req.body;

    const location: Coordinates = await geocoder.search({ city, state });

    const advert: Advertisement = {
      state,
      city,
      images,
      description,
      price,
      autor: new ObjectId('507f191e810c19729de860ea'),
      date: new Date(),
      coordinates: [location[0].lat, location[0].lon],
    };

    return res.status(StatusCode.SUCCESS).json(advert);
  }
}
