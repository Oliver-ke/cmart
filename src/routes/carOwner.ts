import { Router } from 'express';
import prisma from '../prismaInit';

const router = Router();

// get car owners by pages
router.get('/carowner/page', async (req, res) => {
  const { start, stop } = req.query;
  try {
    const cars = await prisma.car_owners.findMany({
      orderBy: { first_name: 'asc' },
      first: +start, last: +stop,
    });
    return res.status(200).json({ data: cars });
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Could not run query' });
  }
})

// get items by query
router.get('/carowner/query', async (req, res) => {
  let { start_year, end_year, gender, countries, colors, start_page, end_page } = req.query;

  const countriesArray = countries.toString().split(",");
  const colorsArray = colors.toString().split(",");
  let genderArray;
  if (gender === '') {
    genderArray = ["Male", 'Female']
  } else {
    const genderStr = gender.toString();
    genderArray = [`${genderStr.charAt(0).toUpperCase()}${genderStr.slice(1)}`]
  }
  let dbQuery: any = {
    car_model_year: {
      gte: start_year.toString(),
      lte: end_year.toString(),
    },
    gender: {
      in: genderArray
    }
  }
  if (countriesArray[0] !== "") {
    dbQuery.country = {
      in: countriesArray
    }
  }

  if (colorsArray[0] !== "") {
    dbQuery.car_color = {
      in: colorsArray
    }
  }
  try {
    let count;
    if (start_page.toString() === "1") {
      count = await prisma.car_owners.count({
        where: dbQuery
      })
    }
    const cars = await prisma.car_owners.findMany({
      orderBy: { car_model_year: 'asc' },
      first: +start_page,
      last: +end_page,
      where: {
        car_model_year: {
          gte: start_year.toString(),
          lte: end_year.toString(),
        },
        car_color: {
          in: colorsArray
        },
        country: {
          in: countriesArray
        },
        gender: {
          in: genderArray
        }
      }
    });
    return res.status(200).json({ data: cars, count });
  } catch (error) {
    console.error(error)
  }
})

export default router;