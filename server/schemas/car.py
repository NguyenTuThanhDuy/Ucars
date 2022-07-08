def carEntity(item) -> dict:
    return {
        "id" : str(item["_id"]),
        "car_brand_id" : item["car_brand_id"],
        "car_model_id" : item["car_model_id"],
        "name" : item["name"],
        "price" : item["price"],
        "status" : item["status"],
        "description" : item["description"]
    }

def carsEntity(entity) -> list:
    return [carEntity(item) for item in entity]