def modelEntity(item) -> dict:
    return {
        "id" : str(item["_id"]),
        "car_brand_id" : item["car_brand_id"],
        "name" : item["name"],
        "model" : item["model"],
        "mfg_year" : item["mfg_year"],
        "status" : item["status"],
    }

def modelsEntity(entity) -> list:
    return [modelEntity(item) for item in entity]