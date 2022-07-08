from asyncio.windows_events import NULL
from fastapi import APIRouter, Body

from models.car_model import CarModel
from config.db import conn
from schemas.car_model import modelEntity,modelsEntity
from bson import ObjectId

model = APIRouter()

@model.get('/models')
async def find_all_car_models():
    return modelsEntity(conn.ucars.car_model.find())

@model.post('/model')
async def create_car_model(car_model : CarModel):
    conn.ucars.car_model.insert_one(dict(car_model))
    return modelsEntity(conn.ucars.car_model.find())

@model.put('/model/{id}')
async def update_car_model(id,car_model:CarModel):
    conn.ucars.car_brand.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(car_model)
    })
    return modelEntity(conn.ucars.car_brand.find_one({"_id":ObjectId(id)}))

@model.delete('/model/{id}')
async def delete_car_model(id):
    conn.ucars.car.update_many({"car_model_id" : str(ObjectId(id))},{
        "$set":{"car_model_id":NULL}})
    return modelEntity(conn.ucars.car_model.find_one_and_delete({"_id":ObjectId(id)}))