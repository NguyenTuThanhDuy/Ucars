from distutils.command.upload import upload
from fastapi import APIRouter, Body, File, UploadFile
import shutil
from models.car_brand import CarBrand
from config.db import conn
from schemas.car_brand import brandEntity,brandsEntity
from bson import ObjectId
brand = APIRouter()

@brand.get('/brands')
async def find_all_car_brands():
    return brandsEntity(conn.ucars.car_brand.find({"status":True}))

@brand.get('/brands/{id}')
async def find_car_brand(id):
    return brandEntity(conn.ucars.car_brand.find_one({"_id":ObjectId(id)}))

@brand.post('/brand')
async def create_car_brand(brand : CarBrand):
    conn.ucars.car_brand.insert_one(dict(brand))
    return brandsEntity(conn.ucars.car_brand.find())

@brand.put('/brand/{id}')
async def update_car_brand(id,brand:CarBrand):
    conn.ucars.car_brand.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(brand)
    })
    return brandEntity(conn.ucars.car_brand.find_one({"_id":ObjectId(id)}))

@brand.delete('/brand/{id}')
async def delete_car_brand(id):
    conn.ucars.car.delete_many({"car_brand_id" : str(ObjectId(id))})
    conn.ucars.car_model.delete_many({"car_brand_id" : str(ObjectId(id))})
    return brandEntity(conn.ucars.car_brand.find_one_and_delete({"_id":ObjectId(id)}))