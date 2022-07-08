from fastapi import APIRouter, Body

from models.car import Car
from config.db import conn
from schemas.car import carEntity,carsEntity
from schemas.car_brand import brandEntity , brandsEntity
from bson import ObjectId
car = APIRouter()

@car.get('/cars')
async def find_all_cars():
    return carsEntity(conn.ucars.car.find())

@car.get('/cars/{brand}')
async def find_all_cars_by_brand(brand):
    res = brandEntity(conn.ucars.car_brand.find_one({"name":brand}))
    brand_id = res["id"]
    return carsEntity(conn.ucars.car.find({"car_brand_id":brand_id})) 

@car.get('/cars/{keyword}')
async def find_all_cars_by_keyword(keyword):
    return carsEntity(conn.ucars.car.find({"name":{"$regex":'^keyword$'}}))

@car.post('/car')
async def create_car(car : Car):
    conn.ucars.car.insert_one(dict(car))
    return carsEntity(conn.ucars.car.find()) 

@car.put('/car/{id}')
async def update_car(id,car:Car):
    conn.ucars.car.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(car)
    })
    return carEntity(conn.ucars.car.find_one({"_id":ObjectId(id)}))

@car.delete('/car/{id}')
async def delete_car(id):
    return carEntity(conn.ucars.car.find_one_and_delete({"_id":ObjectId(id)}))