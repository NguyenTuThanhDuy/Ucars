from pydantic import BaseModel , HttpUrl
from typing import Optional , List

class Car(BaseModel):
    car_brand_id : str
    car_model_id : str
    name : str
    price:float
    status:bool = True
    description:Optional[str] = None