def brandEntity(item) -> dict:
    return {
        "id" : str(item["_id"]),
        "name" : item["name"],
        "national" : item["national"],
        "avatar_url" : item["avatar_url"],
        "status" : item["status"],
    }

def brandsEntity(entity) -> list:
    return [brandEntity(item) for item in entity]