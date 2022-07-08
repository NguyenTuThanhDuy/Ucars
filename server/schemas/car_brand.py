def brandEntity(item) -> dict:
    return {
        "id" : str(item["_id"]),
        "name" : item["name"],
        "national" : item["national"],
        "logo" : item["logo"],
        "status" : item["status"],
    }

def brandsEntity(entity) -> list:
    return [brandEntity(item) for item in entity]