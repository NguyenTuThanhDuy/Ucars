from pydantic import BaseModel , HttpUrl
class CarModel(BaseModel):
    car_brand_id : str
    name : str
    model : str
    mfg_year : int
    status : bool = True