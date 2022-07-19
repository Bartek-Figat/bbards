import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { ObjectId } from 'mongodb';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Repository } from '../repositories/repositories';
import { StatusCode, ErrorMessage } from '../enum';

interface Advertisement {
  city: string;
  state: string;
  description: string;
  price: number;
  images: string[];
  autor: {};
  date: Date;
  coordinates: [string, string];
}

interface Coordinates {
  lat: string;
  lon: string;
}

export class AdvertService {
  constructor(private repository: Repository = new Repository()) {}

  async getAdvert(req: Request, res: Response, next: NextFunction) {
    const { token } = req.user as {
      token: {
        token: string;
      };
    };
    const advert = await this.repository.find({ _id: new ObjectId(token.token) }, { _id: 0 });
    if (!advert) {
      return res.status(StatusCode.NOT_FOUND).json({
        error: ErrorMessage.NOT_FOUND,
      });
    }
    return res.status(StatusCode.SUCCESS).json(advert);
  }

  async addAdvert(req: Request, res: Response, next: NextFunction) {
    const { token } = req.user as {
      token: {
        token: string;
      };
    };
    const { state, city, images, description, price } = req.body;
    const location = await (
      await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&state=${state}&format=json`)
    ).json();

    const { lat, lon } = location as Coordinates;
    const advert: Advertisement = {
      state,
      city,
      images,
      description,
      price,
      autor: new ObjectId(token.token),
      date: new Date(),
      coordinates: [lat, lon],
    };
    const advertToAdd = await this.repository.insertOne(advert);
    if (!advertToAdd) {
      return res.status(StatusCode.NOT_FOUND).json({
        error: ErrorMessage.NOT_FOUND,
      });
    }
    const newAdvert = await this.repository.insertOne(advert);
    return res.status(StatusCode.SUCCESS).json(newAdvert);
  }

  updateAdvert(req: Request, res: Response, next: NextFunction) {
    const { token } = req.user as {
      token: {
        token: string;
      };
    };
    const { advert } = req.body;
    const advertToUpdate = this.repository.findOne({ _id: new ObjectId(token.token) }, { _id: 0 });
    if (!advertToUpdate) {
      return res.status(StatusCode.NOT_FOUND).json({
        error: ErrorMessage.NOT_FOUND,
      });
    }
    const updatedAdvert = this.repository.updateOne(
      { _id: new ObjectId(token.token) },
      {
        $set: {
          advert,
        },
      },
      {}
    );
    return res.status(StatusCode.SUCCESS).json(updatedAdvert);
  }
}
