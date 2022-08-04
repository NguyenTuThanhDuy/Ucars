from pydantic import BaseModel
from typing import Optional
class CarBrand(BaseModel):
    name : str
    national : str
    avatar_url : Optional[str] = None
    status : bool = True