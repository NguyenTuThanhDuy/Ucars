from pydantic import BaseModel , HttpUrl
from typing import Optional
class Logo(BaseModel):
    url : Optional[HttpUrl] = None
    name : str

class CarBrand(BaseModel):
    name : str
    national : str
    logo : Optional[Logo] = None
    status : bool = True