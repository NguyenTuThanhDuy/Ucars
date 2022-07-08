from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.car import car
from routes.car_model import model
from routes.car_brand import brand
app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(car)
app.include_router(model)
app.include_router(brand)
@app.get("/")
def root():
    return {"message":"Welcome to Summoner's Rift"}