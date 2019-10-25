UPDATE homes
SET address = $2, city = $3, state = $4, zip = $5, image = $6
WHERE property_id = $1;