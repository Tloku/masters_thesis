import random

def write_to_file(the_file, vehicles_images_url, offer_ids, is_main):
    the_file.write(f"insert into Vehicle_Image (path_to_image, is_main_image, offer_id) values ('{vehicles_images_url}', {is_main}, {offer_ids}); \n")


with open("D:\\Studia\\Magisterka\\Dodatki\\VehicleImages.txt") as file:
    vehicle_images_url = file.readlines()
    vehicle_images_url = [line.rstrip() for line in vehicle_images_url]

with open("D:\\Studia\\Magisterka\\Dodatki\\offerId.csv") as file:
    offer_ids = file.readlines()
    offer_ids = [line.rstrip() for line in offer_ids]


with open('D:\\Studia\\Magisterka\\Aplikacja\\Deployment\\Database\\SQL Scripts\\V13__VehicleImages.sql', 'a') as vehicleImagesFile:
    for offer_id in offer_ids:
        for i in range(1, 10):
            write_to_file(vehicleImagesFile, vehicle_images_url[random.randint(1, 3422)], offer_id, i % 10 == 1)


