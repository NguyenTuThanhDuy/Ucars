from distutils.command.upload import upload
from fastapi import APIRouter, Body, File, UploadFile , Depends
import shutil
from models.car_brand import CarBrand
from config.db import conn
from schemas.car_brand import brandEntity,brandsEntity
from bson import ObjectId
from typing import Optional
import os
from routes.avatar import create_avatar
brand = APIRouter()

@brand.get('/brands')
async def find_all_car_brands():
    return brandsEntity(conn.ucars.car_brand.find({"status":True}))

@brand.get('/brands/{id}')
async def find_car_brand(id):
    return brandEntity(conn.ucars.car_brand.find_one({"_id":ObjectId(id)}))

@brand.post('/brand')
async def create_car_brand(brand : CarBrand = Depends() ,uploaded_file:Optional[UploadFile]=File(None)):
    destination = f"C:/Users/admin/FSProject/Ucars/client/angular-14/src/assets/images/{uploaded_file.filename}"
    file_location = f"assets/images/{uploaded_file.filename}"
    avatar = {
        "url": str(file_location),
        "name" : str(uploaded_file.filename)
    }
    #conn.ucars.avatar.insert_one(dict(avatar))
    brand = brand.dict()
    brand["avatar_url"] = str(file_location)
    name = brand["name"]
    conn.ucars.car_brand.insert_one(brand)
    with open(destination,"wb+") as file_object:
        shutil.copyfileobj(uploaded_file.file,file_object)
    return brandsEntity(conn.ucars.car_brand.find({"name":name}))

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
    file_location = conn.ucars.car_brand.find_one({"_id":ObjectId(id)})["avatar_url"]
    os.remove("C:/Users/admin/FSProject/Ucars/client/angular-14/src/"+file_location)
    return brandEntity(conn.ucars.car_brand.find_one_and_delete({"_id":ObjectId(id)}))