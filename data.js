let dataFile = {
    "from": 1,
    "to": 20,
    "count": 10000,
    "_links": {},
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_651e0f396b1c206803eadab0896d9e4b",
                "label": "Lavender Mascarpone Mini Cheesecakes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7a9/7a9e33042808782e94e6bb0d767ab6c9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=002831ed78f9c02e0812c33567ba32d276dca43910defbe1997883906d3022f6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a9/7a9e33042808782e94e6bb0d767ab6c9-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c7aa052d8dc08f541981a317d56e6c36ca137bace7170479d6b9907612e1c20",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a9/7a9e33042808782e94e6bb0d767ab6c9-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f53926bc793933a07273dc39a5869c286dc7c7664497c1b3fcf443fa310cf4f5",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a9/7a9e33042808782e94e6bb0d767ab6c9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=002831ed78f9c02e0812c33567ba32d276dca43910defbe1997883906d3022f6",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "tastykitchen.com",
                "url": "https://tastykitchen.com/recipes/desserts/lavender-mascarpone-mini-cheesecakes/",
                "shareAs": "http://www.edamam.com/recipe/lavender-mascarpone-mini-cheesecakes-651e0f396b1c206803eadab0896d9e4b/cheesecake",
                "yield": 12,
                "dietLabels": [],
                "healthLabels": [
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "FOR THE CRUST:",
                    "12 whole Ginger Snap Cookies",
                    "2 Tablespoons Dark Brown Sugar",
                    "¼ teaspoons Cinnamon",
                    "¼ teaspoons Nutmeg",
                    "2 Tablespoons Butter, Melted",
                    "FOR THE CHEESECAKE:",
                    "½ pounds Cream Cheese, At Room Temperature",
                    "¼ cups Mascarpone Cheese",
                    "⅓ cups Granulated Sugar",
                    "1 Tablespoon Lavender Vanilla Bean Sugar (found In Spice Shops)",
                    "1 teaspoon Lavender Extract",
                    "½ teaspoons Ground Lavender",
                    "¼ teaspoons Salt",
                    "¼ teaspoons Cinnamon",
                    "¼ teaspoons Nutmeg",
                    "1 whole Egg",
                    "1 Egg Yolk",
                    "1 Tablespoon Flour"
                ],
                "ingredients": [
                    {
                        "text": "12 whole Ginger Snap Cookies",
                        "quantity": 12,
                        "measure": "cookie",
                        "food": "Ginger Snap",
                        "weight": 684,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_bcow2zabw2cwtrayq1l0zazgrx8l",
                        "image": "https://www.edamam.com/food-img/516/516dd781ece78144f6560fc7b874fe8a.jpg"
                    },
                    {
                        "text": "2 Tablespoons Dark Brown Sugar",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "Dark Brown Sugar",
                        "weight": 18.12499999969356,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "¼ teaspoons Cinnamon",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "Cinnamon",
                        "weight": 0.65,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "¼ teaspoons Nutmeg",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "Nutmeg",
                        "weight": 0.55,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                        "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                    },
                    {
                        "text": "2 Tablespoons Butter, Melted",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "Butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "½ pounds Cream Cheese, At Room Temperature",
                        "quantity": 0.5,
                        "measure": "pound",
                        "food": "Cream Cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "¼ cups Mascarpone Cheese",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "Mascarpone Cheese",
                        "weight": 57,
                        "foodCategory": "Cheese",
                        "foodId": "food_arv7ztobcl6vffbe7gz3uapm8ptx",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "⅓ cups Granulated Sugar",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "Granulated Sugar",
                        "weight": 66.66666666666666,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 Tablespoon Lavender Vanilla Bean Sugar (found In Spice Shops)",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "Sugar",
                        "weight": 12.4999999997887,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 teaspoon Lavender Extract",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "Lavender",
                        "weight": 1.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a0mmczzafwhi1dao3qg7aamaqdmw",
                        "image": "https://www.edamam.com/food-img/a36/a36eea912c621522f8cd795316c883a5.jpg"
                    },
                    {
                        "text": "½ teaspoons Ground Lavender",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "Lavender",
                        "weight": 0.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a0mmczzafwhi1dao3qg7aamaqdmw",
                        "image": "https://www.edamam.com/food-img/a36/a36eea912c621522f8cd795316c883a5.jpg"
                    },
                    {
                        "text": "¼ teaspoons Salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "Salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "¼ teaspoons Cinnamon",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "Cinnamon",
                        "weight": 0.65,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "¼ teaspoons Nutmeg",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "Nutmeg",
                        "weight": 0.55,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                        "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                    },
                    {
                        "text": "1 whole Egg",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "Egg",
                        "weight": 43,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 Egg Yolk",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "Egg Yolk",
                        "weight": 13.466666666666667,
                        "foodCategory": "Eggs",
                        "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                        "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
                    },
                    {
                        "text": "1 Tablespoon Flour",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "Flour",
                        "weight": 7.8124999998679145,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    }
                ],
                "calories": 4620.558814164203,
                "totalCO2Emissions": 9129.2765094654,
                "co2EmissionsClass": "E",
                "totalWeight": 1161.9670183326837,
                "totalTime": 45,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4620.558814164203,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 205.0058368066654,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 92.51895041166645,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 25.9771553645,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 59.66803495849988,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.807043162999452,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 643.3357719113874,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 633.914934411391,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 9.420837499996432,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 355.88606697215806,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 96.58958333282521,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 58.22725287748602,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 659.93414685,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3746.036937566577,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 802.7015911163902,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 42.0459899832767,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2629.6975891994475,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 88.54887288682951,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.482595924998962,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 461.7354179498451,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1195.6182498,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.184,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.319113455883175,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.461831892166573,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 20.035248278348018,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.3260139469331496,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 74.91748998329594,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 594.757489983296,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.3179316070000002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.5872000000000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.9333146909999215,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.60002405166627,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 230.95376580998015,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 231.02794070821014,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 315.3935950871775,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 462.59475205833223,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 214.4452573037958,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 37.68334999998573,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 116.45450575497205,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 219.97804895000004,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 156.0848723986074,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 80.27015911163902,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 10.01094999601826,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 55.95101253615846,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 491.93818270460844,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 22.56905386362693,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 65.96220256426358,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 132.8464722,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.3155555555555554,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 193.25945465693124,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 189.37168401281332,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 125.22030173967511,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 25.077995917934583,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 18.729372495823984,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 54.91381695833334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 10.581333333333335,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 26.222097939999475,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.166686709721892,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 205.0058368066654,
                        "hasRDI": true,
                        "daily": 315.3935950871775,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 92.51895041166645,
                                "hasRDI": true,
                                "daily": 462.59475205833223,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 25.9771553645,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 59.66803495849988,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.807043162999452,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 643.3357719113874,
                        "hasRDI": true,
                        "daily": 214.4452573037958,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 633.914934411391,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 9.420837499996432,
                                "hasRDI": true,
                                "daily": 37.68334999998573,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 355.88606697215806,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 96.58958333282521,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 58.22725287748602,
                        "hasRDI": true,
                        "daily": 116.45450575497205,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 659.93414685,
                        "hasRDI": true,
                        "daily": 219.97804895000004,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3746.036937566577,
                        "hasRDI": true,
                        "daily": 156.0848723986074,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 802.7015911163902,
                        "hasRDI": true,
                        "daily": 80.27015911163902,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 42.0459899832767,
                        "hasRDI": true,
                        "daily": 10.01094999601826,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2629.6975891994475,
                        "hasRDI": true,
                        "daily": 55.95101253615846,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 88.54887288682951,
                        "hasRDI": true,
                        "daily": 491.93818270460844,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.482595924998962,
                        "hasRDI": true,
                        "daily": 22.56905386362693,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 461.7354179498451,
                        "hasRDI": true,
                        "daily": 65.96220256426358,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1195.6182498,
                        "hasRDI": true,
                        "daily": 132.8464722,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.184,
                        "hasRDI": true,
                        "daily": 1.3155555555555554,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.319113455883175,
                        "hasRDI": true,
                        "daily": 193.25945465693124,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.461831892166573,
                        "hasRDI": true,
                        "daily": 189.37168401281332,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 20.035248278348018,
                        "hasRDI": true,
                        "daily": 125.22030173967511,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.3260139469331496,
                        "hasRDI": true,
                        "daily": 25.077995917934583,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 74.91748998329594,
                        "hasRDI": true,
                        "daily": 18.729372495823984,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 594.757489983296,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.3179316070000002,
                        "hasRDI": true,
                        "daily": 54.91381695833334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.5872000000000002,
                        "hasRDI": true,
                        "daily": 10.581333333333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.9333146909999215,
                        "hasRDI": true,
                        "daily": 26.222097939999475,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 8.60002405166627,
                        "hasRDI": true,
                        "daily": 7.166686709721892,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 230.95376580998015,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Desserts",
                    "Cakes"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/651e0f396b1c206803eadab0896d9e4b?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2bb8be7f22ed45b1b542a19bb753e12d",
                "label": "Frozen Raspberry Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1c2/1c2bd189cc0180647c3e21a4a97385b5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=05c6a9a381d04dfef12679841d975c8d07d0186178e0eda34d319323972b3527",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1c2/1c2bd189cc0180647c3e21a4a97385b5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d8b3874db2a62ff13a342fb983e3dc989b7332db260f7b43f13c683d4763ce3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1c2/1c2bd189cc0180647c3e21a4a97385b5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f814c44c6731d7400972c0136849cbf156e4b64e81eb720d1a0a8047a046832c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1c2/1c2bd189cc0180647c3e21a4a97385b5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=05c6a9a381d04dfef12679841d975c8d07d0186178e0eda34d319323972b3527",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1c2/1c2bd189cc0180647c3e21a4a97385b5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6318bf7b0b0c9976712dbf61d4b666a0d6701efddfb06563e1e863b8f1e647c4",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "hiddenponies.com",
                "url": "http://hiddenponies.com/2011/06/frozen-raspberry-cheesecake/",
                "shareAs": "http://www.edamam.com/recipe/frozen-raspberry-cheesecake-2bb8be7f22ed45b1b542a19bb753e12d/cheesecake",
                "yield": 12,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "* 1 cup chocolate cookie crumb (such a oreo)",
                    "* 2 tbsp butter, melted",
                    "* filling:",
                    "* 1 (250g) package cream cheese, softened",
                    "* 1 can raspberry juice concentrate, thawed",
                    "* 2 tbsp icing sugar",
                    "* 1 l cool whip, thawed"
                ],
                "ingredients": [
                    {
                        "text": "* 1 cup chocolate cookie crumb (such a oreo)",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "cookie crumb",
                        "weight": 226,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_a9rbl2bb3f5sj6afu5qksbsvqvhy",
                        "image": null
                    },
                    {
                        "text": "* 2 tbsp butter, melted",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "* 1 (250g) package cream cheese, softened",
                        "quantity": 250,
                        "measure": "gram",
                        "food": "cream cheese",
                        "weight": 250,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "* 1 can raspberry juice concentrate, thawed",
                        "quantity": 1,
                        "measure": "can",
                        "food": "raspberry",
                        "weight": 480.00000000000006,
                        "foodCategory": "canned fruit",
                        "foodId": "food_b4k13ywbojrjfxbupbnc2bj28sma",
                        "image": "https://www.edamam.com/food-img/082/0829f6266f6ebefc7ec54a093039e55b.jpg"
                    },
                    {
                        "text": "* 2 tbsp icing sugar",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "icing sugar",
                        "weight": 16,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "* 1 l cool whip, thawed",
                        "quantity": 1,
                        "measure": "liter",
                        "food": "cool whip",
                        "weight": 253.6051702638225,
                        "foodCategory": "Dairy",
                        "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                        "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
                    }
                ],
                "calories": 3305.193287578024,
                "totalCO2Emissions": 13844.703465900082,
                "co2EmissionsClass": "E",
                "totalWeight": 1254.0051702638225,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3305.193287578024,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 214.49874779856862,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 109.21991349640751,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.925,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 52.4190519309374,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 8.826682654676535,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 332.4576862829779,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 309.3856862829779,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 23.072000000000003,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 223.19345362110582,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 112.12800000000001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 38.518565448442324,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 506.2999294005051,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2016.412413621106,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 612.6572219664608,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 217.0445687290205,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1599.5756002878193,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.507082585131911,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.763299129976144,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 776.0046015348021,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1452.6677200959862,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 41.760000000000005,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.5244739129976144,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2742393606714848,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 6.701751619184677,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.5187501198081672,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 83.76015510791468,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 151.5601551079147,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.3789349937650852,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.01442068105529,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.263953089688464,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 37.016498235012634,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 656.5857693717232,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 165.2596643789012,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 329.9980735362594,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 546.0995674820376,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 110.81922876099263,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 92.28800000000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 77.03713089688465,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 168.7666431335017,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 84.01718390087942,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 61.26572219664609,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 51.677278268814405,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 34.03352341037914,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 75.03934769517728,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 52.39362845432857,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 110.85780021925744,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 161.40752445510958,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 46.40000000000001,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 43.70615941646786,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 98.01841235934498,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 41.88594761990423,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 39.903855369859016,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 20.94003877697867,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 57.45562474021188,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.762804540368601,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 48.42635393125643,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 30.847081862510528,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 214.49874779856862,
                        "hasRDI": true,
                        "daily": 329.9980735362594,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 109.21991349640751,
                                "hasRDI": true,
                                "daily": 546.0995674820376,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.925,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 52.4190519309374,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 8.826682654676535,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 332.4576862829779,
                        "hasRDI": true,
                        "daily": 110.81922876099263,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 309.3856862829779,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 23.072000000000003,
                                "hasRDI": true,
                                "daily": 92.28800000000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 223.19345362110582,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 112.12800000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 38.518565448442324,
                        "hasRDI": true,
                        "daily": 77.03713089688465,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 506.2999294005051,
                        "hasRDI": true,
                        "daily": 168.7666431335017,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2016.412413621106,
                        "hasRDI": true,
                        "daily": 84.01718390087942,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 612.6572219664608,
                        "hasRDI": true,
                        "daily": 61.26572219664609,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 217.0445687290205,
                        "hasRDI": true,
                        "daily": 51.677278268814405,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1599.5756002878193,
                        "hasRDI": true,
                        "daily": 34.03352341037914,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.507082585131911,
                        "hasRDI": true,
                        "daily": 75.03934769517728,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.763299129976144,
                        "hasRDI": true,
                        "daily": 52.39362845432857,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 776.0046015348021,
                        "hasRDI": true,
                        "daily": 110.85780021925744,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1452.6677200959862,
                        "hasRDI": true,
                        "daily": 161.40752445510958,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 41.760000000000005,
                        "hasRDI": true,
                        "daily": 46.40000000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.5244739129976144,
                        "hasRDI": true,
                        "daily": 43.70615941646786,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2742393606714848,
                        "hasRDI": true,
                        "daily": 98.01841235934498,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 6.701751619184677,
                        "hasRDI": true,
                        "daily": 41.88594761990423,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.5187501198081672,
                        "hasRDI": true,
                        "daily": 39.903855369859016,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 83.76015510791468,
                        "hasRDI": true,
                        "daily": 20.94003877697867,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 151.5601551079147,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.3789349937650852,
                        "hasRDI": true,
                        "daily": 57.45562474021188,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.01442068105529,
                        "hasRDI": true,
                        "daily": 6.762804540368601,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.263953089688464,
                        "hasRDI": true,
                        "daily": 48.42635393125643,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 37.016498235012634,
                        "hasRDI": true,
                        "daily": 30.847081862510528,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 656.5857693717232,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/2bb8be7f22ed45b1b542a19bb753e12d?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2b814aa1db6314ad4827625e20884d70",
                "label": "Lemon Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0c7/0c74ec2f72e23cd95f1f6480e0f3e1bb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=514563bfa4f50fc800b3fad521301e262784a398f676b3cc021f65aa596515da",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0c7/0c74ec2f72e23cd95f1f6480e0f3e1bb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=627c62ab0ddc258c3c7cf36284457e1927d16f0798bf06de261c6b1df5feca57",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0c7/0c74ec2f72e23cd95f1f6480e0f3e1bb-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e0db2ca302b4f91e065fadbf8bd73a37dd0ee71d7f913c57f4f7dfdd5646e9e0",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0c7/0c74ec2f72e23cd95f1f6480e0f3e1bb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=514563bfa4f50fc800b3fad521301e262784a398f676b3cc021f65aa596515da",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Foodista",
                "url": "http://www.foodista.com/recipe/ZJMCPQF3/lemon-cheesecake",
                "shareAs": "http://www.edamam.com/recipe/lemon-cheesecake-2b814aa1db6314ad4827625e20884d70/cheesecake",
                "yield": 2,
                "dietLabels": [],
                "healthLabels": [
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 graham cracker, crushed or 2 tbsp. gra",
                    "1 pkg. lemon sugar free Jello",
                    "2/3 cup boiling water",
                    "1 cup low fat cottage cheese",
                    "8 ounces light cream cheese",
                    "2 cups Cool Whip Lite, thawed",
                    "1 cup reduced calorie cherry pie filling"
                ],
                "ingredients": [
                    {
                        "text": "1 graham cracker, crushed or 2 tbsp. gra",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "graham cracker",
                        "weight": 14,
                        "foodCategory": "pastries",
                        "foodId": "food_aipm8mobslonobbbkxmhbb8a4iox",
                        "image": "https://www.edamam.com/food-img/448/448b5544a8ac969e88525f6bc44f5c12.jpg"
                    },
                    {
                        "text": "1 pkg. lemon sugar free Jello",
                        "quantity": 1,
                        "measure": "package",
                        "food": "sugar free Jello",
                        "weight": 10,
                        "foodCategory": "candy",
                        "foodId": "food_a69lm73asdgnakbpu9ecxap80biz",
                        "image": "https://www.edamam.com/food-img/753/7534bb5ee3385bfcbc625724ff269342.jpg"
                    },
                    {
                        "text": "2/3 cup boiling water",
                        "quantity": 0.6666666666666666,
                        "measure": "cup",
                        "food": "water",
                        "weight": 157.72549099999998,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1 cup low fat cottage cheese",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "low fat cottage cheese",
                        "weight": 226,
                        "foodCategory": "Cheese",
                        "foodId": "food_byiit84bnnfz2vauomp7ca3yh4f9",
                        "image": "https://www.edamam.com/food-img/046/046c46348bde2b7af7da40196a1c942e.jpg"
                    },
                    {
                        "text": "8 ounces light cream cheese",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "2 cups Cool Whip Lite, thawed",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "Cool Whip",
                        "weight": 120,
                        "foodCategory": "Dairy",
                        "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                        "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
                    },
                    {
                        "text": "1 cup reduced calorie cherry pie filling",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "cherry pie filling",
                        "weight": 240,
                        "foodCategory": "canned fruit",
                        "foodId": "food_bevqosxb8gvvp9agklya9afmzrmg",
                        "image": "https://www.edamam.com/food-img/a71/a71ee691f1c712f2e20e9cd2e0d1cd88.JPG"
                    }
                ],
                "calories": 1641.2466475,
                "totalCO2Emissions": 15062.352897800001,
                "co2EmissionsClass": "G",
                "totalWeight": 994.521676,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1641.2466475,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 111.44008764000002,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 65.44662937,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.8126353645,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 29.479500083500003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.339163538,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 124.374749412,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 122.448749412,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.926,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 30.639536556000003,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 44.68656537750001,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 347.38414685000004,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1625.76904054,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 634.76406418,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 78.12891156,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1035.4709642000003,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 1.7144758035,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.0007534741000006,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 879.3719179500001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1101.8122498,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.64,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.23886312255,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2496712255000002,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.4807645283500004,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.4156658636,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 71.57165665000001,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 54.35165665000001,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 10.080000000000002,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.909151607,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.48,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.110647191,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 9.044719885000001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 705.482158819,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 82.062332375,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 171.4462886769231,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 327.23314685,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 41.458249804,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 7.704,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 89.37313075500002,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 115.79471561666668,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 67.74037668916667,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 63.476406417999996,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 18.602121800000003,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 22.031297110638306,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 9.524865575,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 27.279577037272734,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 125.62455970714286,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 122.42358331111112,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 9.6,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 19.9052602125,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 96.12855580769232,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.254778302187502,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 31.974297200000002,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 17.892914162500002,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 79.547983625,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.2,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 20.73764794,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.537266570833334,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 111.44008764000002,
                        "hasRDI": true,
                        "daily": 171.4462886769231,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 65.44662937,
                                "hasRDI": true,
                                "daily": 327.23314685,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.8126353645,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 29.479500083500003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.339163538,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 124.374749412,
                        "hasRDI": true,
                        "daily": 41.458249804,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 122.448749412,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.926,
                                "hasRDI": true,
                                "daily": 7.704,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 30.639536556000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 44.68656537750001,
                        "hasRDI": true,
                        "daily": 89.37313075500002,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 347.38414685000004,
                        "hasRDI": true,
                        "daily": 115.79471561666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1625.76904054,
                        "hasRDI": true,
                        "daily": 67.74037668916667,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 634.76406418,
                        "hasRDI": true,
                        "daily": 63.476406417999996,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 78.12891156,
                        "hasRDI": true,
                        "daily": 18.602121800000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1035.4709642000003,
                        "hasRDI": true,
                        "daily": 22.031297110638306,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 1.7144758035,
                        "hasRDI": true,
                        "daily": 9.524865575,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.0007534741000006,
                        "hasRDI": true,
                        "daily": 27.279577037272734,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 879.3719179500001,
                        "hasRDI": true,
                        "daily": 125.62455970714286,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1101.8122498,
                        "hasRDI": true,
                        "daily": 122.42358331111112,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 8.64,
                        "hasRDI": true,
                        "daily": 9.6,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.23886312255,
                        "hasRDI": true,
                        "daily": 19.9052602125,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2496712255000002,
                        "hasRDI": true,
                        "daily": 96.12855580769232,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.4807645283500004,
                        "hasRDI": true,
                        "daily": 9.254778302187502,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.4156658636,
                        "hasRDI": true,
                        "daily": 31.974297200000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 71.57165665000001,
                        "hasRDI": true,
                        "daily": 17.892914162500002,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 54.35165665000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 10.080000000000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.909151607,
                        "hasRDI": true,
                        "daily": 79.547983625,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.48,
                        "hasRDI": true,
                        "daily": 3.2,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.110647191,
                        "hasRDI": true,
                        "daily": 20.73764794,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 9.044719885000001,
                        "hasRDI": true,
                        "daily": 7.537266570833334,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 705.482158819,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/2b814aa1db6314ad4827625e20884d70?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8276a3c12384e3d401c24f06ae52e64d",
                "label": "Wafers and Lemon Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/51a/51a2520ea6c5e9507e0bfd2c41f023a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2d7aac54bb860b10de558a1ecffd4f52ffc5fdaeed5a2b3c5f10859ef4bc0491",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/51a/51a2520ea6c5e9507e0bfd2c41f023a0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9a7bd99a07ac26b4ecef6df43f1ffa818788d891b1bf1983066609418918e9f9",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/51a/51a2520ea6c5e9507e0bfd2c41f023a0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=41211174c85e0660de42bc4355a2367e92ab542dbcf2e1badb662aaeb7346d78",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/51a/51a2520ea6c5e9507e0bfd2c41f023a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2d7aac54bb860b10de558a1ecffd4f52ffc5fdaeed5a2b3c5f10859ef4bc0491",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "tastykitchen.com",
                "url": "https://tastykitchen.com/recipes/desserts/wafers-and-lemon-cheesecake/",
                "shareAs": "http://www.edamam.com/recipe/wafers-and-lemon-cheesecake-8276a3c12384e3d401c24f06ae52e64d/cheesecake",
                "yield": 10,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "15 Vanilla Wafers",
                    "100 grams Powdered Sugar",
                    "2 Eggs",
                    "1 pinch Salt",
                    "1 Tablespoon Lemon Zest",
                    "2 Tablespoons Lemon Juice",
                    "250 grams Mascarpone",
                    "250 grams Ricotta"
                ],
                "ingredients": [
                    {
                        "text": "15 Vanilla Wafers",
                        "quantity": 15,
                        "measure": "<unit>",
                        "food": "Vanilla Wafers",
                        "weight": 56.25,
                        "foodCategory": "pastries",
                        "foodId": "food_a9iq0wvablke97bkqgi7wbtp3hh5",
                        "image": "https://www.edamam.com/food-img/092/092817fd7affe3784e53bb6aded2efed.jpg"
                    },
                    {
                        "text": "100 grams Powdered Sugar",
                        "quantity": 100,
                        "measure": "gram",
                        "food": "Powdered Sugar",
                        "weight": 100,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "2 Eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "Eggs",
                        "weight": 86,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 pinch Salt",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "Salt",
                        "weight": 0.380208333815447,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 Tablespoon Lemon Zest",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "Lemon Zest",
                        "weight": 6,
                        "foodCategory": "fruit",
                        "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
                        "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
                    },
                    {
                        "text": "2 Tablespoons Lemon Juice",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "Lemon Juice",
                        "weight": 30.4999999994844,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    },
                    {
                        "text": "250 grams Mascarpone",
                        "quantity": 250,
                        "measure": "gram",
                        "food": "Mascarpone",
                        "weight": 250,
                        "foodCategory": "Cheese",
                        "foodId": "food_arv7ztobcl6vffbe7gz3uapm8ptx",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "250 grams Ricotta",
                        "quantity": 250,
                        "measure": "gram",
                        "food": "Ricotta",
                        "weight": 250,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    }
                ],
                "calories": 2027.4474999998865,
                "totalCO2Emissions": 12764.369010416722,
                "co2EmissionsClass": "F",
                "totalWeight": 779.1302083332998,
                "totalTime": 50,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2027.4474999998865,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 128.99479999999875,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 71.6413399999998,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 4.12768,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 34.578214999999965,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 10.25809499999989,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 176.29619999996441,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 174.66869999996595,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.6274999999984532,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 128.95574999998703,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 97.8,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 48.0139999999982,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 699.9825000000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1515.1183335203882,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 836.8712500000847,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 92.30380208330722,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1094.9129166661742,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 3.808029687501179,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.9275302083335575,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 875.4399999999588,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1207.78,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 19.543499999800463,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.29788249999987626,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9191449999999226,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 2.5481299999995306,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.5839874999997627,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 140.5499999998969,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 106.79999999989688,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 19.6875,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.4404000000000003,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.2199999999999998,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.665624999999228,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 24.570499999999996,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 417.3615104161917,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 101.37237499999432,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 198.4535384615365,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 358.206699999999,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 58.765399999988134,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.509999999993813,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 96.0279999999964,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 233.3275,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 63.129930563349504,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 83.68712500000846,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 21.977095734120766,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 23.29601950353562,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 21.15572048611766,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 35.70482007575961,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 125.06285714285126,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 134.1977777777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 21.714999999778293,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 24.823541666656357,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 147.6265384615325,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 15.925812499997066,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 44.922115384597134,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 35.137499999974224,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 143.35000000000002,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 14.799999999999999,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 31.104166666661516,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 20.475416666666664,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 128.99479999999875,
                        "hasRDI": true,
                        "daily": 198.4535384615365,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 71.6413399999998,
                                "hasRDI": true,
                                "daily": 358.206699999999,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 4.12768,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 34.578214999999965,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 10.25809499999989,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 176.29619999996441,
                        "hasRDI": true,
                        "daily": 58.765399999988134,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 174.66869999996595,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.6274999999984532,
                                "hasRDI": true,
                                "daily": 6.509999999993813,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 128.95574999998703,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 97.8,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 48.0139999999982,
                        "hasRDI": true,
                        "daily": 96.0279999999964,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 699.9825000000001,
                        "hasRDI": true,
                        "daily": 233.3275,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1515.1183335203882,
                        "hasRDI": true,
                        "daily": 63.129930563349504,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 836.8712500000847,
                        "hasRDI": true,
                        "daily": 83.68712500000846,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 92.30380208330722,
                        "hasRDI": true,
                        "daily": 21.977095734120766,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1094.9129166661742,
                        "hasRDI": true,
                        "daily": 23.29601950353562,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.808029687501179,
                        "hasRDI": true,
                        "daily": 21.15572048611766,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.9275302083335575,
                        "hasRDI": true,
                        "daily": 35.70482007575961,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 875.4399999999588,
                        "hasRDI": true,
                        "daily": 125.06285714285126,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1207.78,
                        "hasRDI": true,
                        "daily": 134.1977777777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 19.543499999800463,
                        "hasRDI": true,
                        "daily": 21.714999999778293,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.29788249999987626,
                        "hasRDI": true,
                        "daily": 24.823541666656357,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9191449999999226,
                        "hasRDI": true,
                        "daily": 147.6265384615325,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 2.5481299999995306,
                        "hasRDI": true,
                        "daily": 15.925812499997066,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.5839874999997627,
                        "hasRDI": true,
                        "daily": 44.922115384597134,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 140.5499999998969,
                        "hasRDI": true,
                        "daily": 35.137499999974224,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 106.79999999989688,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 19.6875,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.4404000000000003,
                        "hasRDI": true,
                        "daily": 143.35000000000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.2199999999999998,
                        "hasRDI": true,
                        "daily": 14.799999999999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.665624999999228,
                        "hasRDI": true,
                        "daily": 31.104166666661516,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 24.570499999999996,
                        "hasRDI": true,
                        "daily": 20.475416666666664,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 417.3615104161917,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Desserts",
                    "Cakes"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/8276a3c12384e3d401c24f06ae52e64d?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_096dce83ae1f053a71384b174dbed50f",
                "label": "Aloha Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/831/8311494126161127b8278495569687ea.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3706660038924ede764974796d409e73fd4d50d0421d31edd1ddb27653330d1a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/831/8311494126161127b8278495569687ea-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=355bc556e103141de0a9ad6e0135c0e38cb28b2a47b2eb275a4b816fc806421f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/831/8311494126161127b8278495569687ea-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f0d183589a9f5a60c627b3bd4fafc247dc126e5d12574111753d6e0fb003fb55",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/831/8311494126161127b8278495569687ea.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3706660038924ede764974796d409e73fd4d50d0421d31edd1ddb27653330d1a",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/831/8311494126161127b8278495569687ea-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e07f210b4df2d1f755ef50758289a6d3a04bb4153911ed2f2863463edc530fc",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "recipezaar.com",
                "url": "http://www.recipezaar.com/Aloha-Cheesecake-6787",
                "shareAs": "http://www.edamam.com/recipe/aloha-cheesecake-096dce83ae1f053a71384b174dbed50f/cheesecake",
                "yield": 10,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Soy",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "8 1/2 ounces pineapple , crushed, drained",
                    "2 large eggs",
                    "1/4 cup margarine , melted",
                    "1/3 cup sugar",
                    "1/2 cup macadamia nuts, toasted",
                    "2 tablespoons milk",
                    "1 medium kiwi , peeled, sliced",
                    "16 ounces cream cheese , softened",
                    "1 cup vanilla wafer crumbs"
                ],
                "ingredients": [
                    {
                        "text": "8 1/2 ounces pineapple , crushed, drained",
                        "quantity": 8.5,
                        "measure": "ounce",
                        "food": "pineapple",
                        "weight": 240.97094656250002,
                        "foodCategory": "fruit",
                        "foodId": "food_b5maw38amr54vpat8d5vhbgmqfxn",
                        "image": "https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1/4 cup margarine , melted",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "margarine",
                        "weight": 56.00000000094679,
                        "foodCategory": "Oils",
                        "foodId": "food_bpy417na9x14isbywkw04a21r148",
                        "image": "https://www.edamam.com/food-img/33e/33ef6c4bf7db16d574a3f68fa31c4b09.jpg"
                    },
                    {
                        "text": "1/3 cup sugar",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 66.66666666666666,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/2 cup macadamia nuts, toasted",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "macadamia nuts",
                        "weight": 67,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bfvpqcga16yhe5a01rpnnbainhno",
                        "image": "https://www.edamam.com/food-img/7bc/7bc36d19e1e81c206f309a3ca16f295b.jpg"
                    },
                    {
                        "text": "2 tablespoons milk",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "milk",
                        "weight": 30,
                        "foodCategory": "Milk",
                        "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                        "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                    },
                    {
                        "text": "1 medium kiwi , peeled, sliced",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "kiwi",
                        "weight": 69,
                        "foodCategory": "fruit",
                        "foodId": "food_bqj114aab4xnl6b6j3dt0bi4sznd",
                        "image": "https://www.edamam.com/food-img/dba/dbabbf58b6a43c9b65014f4c789d4409.jpg"
                    },
                    {
                        "text": "16 ounces cream cheese , softened",
                        "quantity": 16,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1 cup vanilla wafer crumbs",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "vanilla wafer",
                        "weight": 50,
                        "foodCategory": "pastries",
                        "foodId": "food_a9iq0wvablke97bkqgi7wbtp3hh5",
                        "image": "https://www.edamam.com/food-img/092/092817fd7affe3784e53bb6aded2efed.jpg"
                    }
                ],
                "calories": 3279.5287682880385,
                "totalCO2Emissions": 12417.205335440392,
                "co2EmissionsClass": "F",
                "totalWeight": 1133.2299832301135,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3279.528768288038,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 271.3467404166391,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 114.09435612533454,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 13.989030729141074,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 107.85443639042143,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 26.95908545485507,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 181.51315949036075,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 169.50756623848574,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.005593251875002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 136.02404468173958,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 66.53333333333333,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 51.36807386643902,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 837.6282937000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2116.416417938484,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 661.9674886198202,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 190.12982688750947,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1561.7535934866291,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.13850068536572,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.173993652542709,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 924.0415116250474,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1580.8536279968753,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 179.95111245687502,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.3223432928844887,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9245298205666668,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 5.266193789512529,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.95991918735,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 211.8780836812595,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 181.8780836812595,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 17.5,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.0229032140000003,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.39,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 10.45308857136202,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 95.9092363966476,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 618.4481339972397,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 163.9764384144019,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 417.4565237179063,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 570.4717806266727,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 60.504386496786914,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 48.02237300750001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 102.73614773287804,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 279.20943123333336,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 88.1840174141035,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 66.19674886198202,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 45.26900640178797,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 33.22879986141764,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 39.65833714092067,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 47.03630593220645,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 132.00593023214964,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 175.6504031107639,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 199.9456805076389,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 110.19527440704073,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 148.04075542820513,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 32.913711184453305,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 73.83993748846153,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 52.96952092031488,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 84.28763391666669,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 15.933333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 69.68725714241347,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 79.924363663873,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 271.3467404166391,
                        "hasRDI": true,
                        "daily": 417.4565237179063,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 114.09435612533454,
                                "hasRDI": true,
                                "daily": 570.4717806266727,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 13.989030729141074,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 107.85443639042143,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 26.95908545485507,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 181.51315949036075,
                        "hasRDI": true,
                        "daily": 60.504386496786914,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 169.50756623848574,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 12.005593251875002,
                                "hasRDI": true,
                                "daily": 48.02237300750001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 136.02404468173958,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 66.53333333333333,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 51.36807386643902,
                        "hasRDI": true,
                        "daily": 102.73614773287804,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 837.6282937000001,
                        "hasRDI": true,
                        "daily": 279.20943123333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2116.416417938484,
                        "hasRDI": true,
                        "daily": 88.1840174141035,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 661.9674886198202,
                        "hasRDI": true,
                        "daily": 66.19674886198202,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 190.12982688750947,
                        "hasRDI": true,
                        "daily": 45.26900640178797,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1561.7535934866291,
                        "hasRDI": true,
                        "daily": 33.22879986141764,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.13850068536572,
                        "hasRDI": true,
                        "daily": 39.65833714092067,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.173993652542709,
                        "hasRDI": true,
                        "daily": 47.03630593220645,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 924.0415116250474,
                        "hasRDI": true,
                        "daily": 132.00593023214964,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1580.8536279968753,
                        "hasRDI": true,
                        "daily": 175.6504031107639,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 179.95111245687502,
                        "hasRDI": true,
                        "daily": 199.9456805076389,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.3223432928844887,
                        "hasRDI": true,
                        "daily": 110.19527440704073,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9245298205666668,
                        "hasRDI": true,
                        "daily": 148.04075542820513,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 5.266193789512529,
                        "hasRDI": true,
                        "daily": 32.913711184453305,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.95991918735,
                        "hasRDI": true,
                        "daily": 73.83993748846153,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 211.8780836812595,
                        "hasRDI": true,
                        "daily": 52.96952092031488,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 181.8780836812595,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 17.5,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.0229032140000003,
                        "hasRDI": true,
                        "daily": 84.28763391666669,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.39,
                        "hasRDI": true,
                        "daily": 15.933333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 10.45308857136202,
                        "hasRDI": true,
                        "daily": 69.68725714241347,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 95.9092363966476,
                        "hasRDI": true,
                        "daily": 79.924363663873,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 618.4481339972397,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/096dce83ae1f053a71384b174dbed50f?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_53eda1806bfe4491a5bd088bedb8a822",
                "label": "Another Cake Story: Lemon Curd Cheesecakes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c74/c747ddd475e64ae41486c1aff62ccbb9.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9697e50b39a15e9a892427d6f794a194587a6a8260670860501834fec5ddb1e7",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c74/c747ddd475e64ae41486c1aff62ccbb9-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad4eca0704bcf46af2d21b50cf4564f18448e8cdf869be466710373cb7c2e810",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c74/c747ddd475e64ae41486c1aff62ccbb9-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=74156ee8abc39f526eb52512ccf213f13effa40d839bc3fcac9c50492f330cff",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c74/c747ddd475e64ae41486c1aff62ccbb9.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9697e50b39a15e9a892427d6f794a194587a6a8260670860501834fec5ddb1e7",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "melscreativecorner.blogspot.com",
                "url": "http://melscreativecorner.blogspot.com/2012/03/another-cake-story-lemon-curd.html",
                "shareAs": "http://www.edamam.com/recipe/another-cake-story-lemon-curd-cheesecakes-53eda1806bfe4491a5bd088bedb8a822/cheesecake",
                "yield": 6,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/3 cup lemon juice",
                    "3 large eggs (at room temp)",
                    "3/4 cup sugar",
                    "4 tbsp butter (at room temp)"
                ],
                "ingredients": [
                    {
                        "text": "1/3 cup lemon juice",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "lemon juice",
                        "weight": 81.33333333333333,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    },
                    {
                        "text": "3 large eggs (at room temp)",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 150,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "3/4 cup sugar",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 150,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "4 tbsp butter (at room temp)",
                        "quantity": 4,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 56.8,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 1220.1493333333333,
                "totalCO2Emissions": 2568.604,
                "co2EmissionsClass": "D",
                "totalWeight": 438.1333333333333,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1220.1493333333333,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 60.52499999999999,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 33.41153333333333,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.056999999999999995,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 18.78608,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 4.591759999999999,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 156.72608,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 156.48208,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.244,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 152.33867999999998,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 149.7,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 19.667466666666666,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 680.12,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 221.56133333333332,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 104.012,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 24.016,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 307.4053333333333,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 2.7764266666666666,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.0417866666666664,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 317.13866666666667,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 628.512,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 31.476000000000003,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.08235999999999999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.745512,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.2103693333333333,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.29411733333333334,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 88.47066666666666,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 88.47066666666666,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.43156,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.01476,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.425999999999999,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 198.6022666666667,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 61.007466666666666,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 93.1153846153846,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 167.05766666666665,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 52.24202666666667,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.976,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 39.33493333333333,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 226.70666666666668,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 9.23172222222222,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 10.401200000000001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 5.718095238095238,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 6.540539007092199,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.424592592592594,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 18.561696969696968,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 45.305523809523805,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 69.83466666666666,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 34.973333333333336,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 6.863333333333332,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 57.34707692307692,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.3148083333333331,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 22.624410256410258,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 22.117666666666665,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 59.64833333333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 20,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 20.0984,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.6883333333333326,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 60.52499999999999,
                        "hasRDI": true,
                        "daily": 93.1153846153846,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 33.41153333333333,
                                "hasRDI": true,
                                "daily": 167.05766666666665,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.056999999999999995,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 18.78608,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 4.591759999999999,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 156.72608,
                        "hasRDI": true,
                        "daily": 52.24202666666667,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 156.48208,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.244,
                                "hasRDI": true,
                                "daily": 0.976,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 152.33867999999998,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 149.7,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 19.667466666666666,
                        "hasRDI": true,
                        "daily": 39.33493333333333,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 680.12,
                        "hasRDI": true,
                        "daily": 226.70666666666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 221.56133333333332,
                        "hasRDI": true,
                        "daily": 9.23172222222222,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 104.012,
                        "hasRDI": true,
                        "daily": 10.401200000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 24.016,
                        "hasRDI": true,
                        "daily": 5.718095238095238,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 307.4053333333333,
                        "hasRDI": true,
                        "daily": 6.540539007092199,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.7764266666666666,
                        "hasRDI": true,
                        "daily": 15.424592592592594,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.0417866666666664,
                        "hasRDI": true,
                        "daily": 18.561696969696968,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 317.13866666666667,
                        "hasRDI": true,
                        "daily": 45.305523809523805,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 628.512,
                        "hasRDI": true,
                        "daily": 69.83466666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 31.476000000000003,
                        "hasRDI": true,
                        "daily": 34.973333333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.08235999999999999,
                        "hasRDI": true,
                        "daily": 6.863333333333332,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.745512,
                        "hasRDI": true,
                        "daily": 57.34707692307692,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.2103693333333333,
                        "hasRDI": true,
                        "daily": 1.3148083333333331,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.29411733333333334,
                        "hasRDI": true,
                        "daily": 22.624410256410258,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 88.47066666666666,
                        "hasRDI": true,
                        "daily": 22.117666666666665,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 88.47066666666666,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.43156,
                        "hasRDI": true,
                        "daily": 59.64833333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3,
                        "hasRDI": true,
                        "daily": 20,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.01476,
                        "hasRDI": true,
                        "daily": 20.0984,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 4.425999999999999,
                        "hasRDI": true,
                        "daily": 3.6883333333333326,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 198.6022666666667,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/53eda1806bfe4491a5bd088bedb8a822?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_25d05ec2800e2ab8b7016c049e22c81c",
                "label": "Blueberry Cheesecake Cookies",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a71/a71440fd008042fe852260e728395bc1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1a4f3af3f466e493ed154f94b10803b57e424ab6ec087d9b78aa281753420df",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a71/a71440fd008042fe852260e728395bc1-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4318166df5c308660164e68ab6ca0f0693bb4be387603cf678ff5175849cbfb",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a71/a71440fd008042fe852260e728395bc1-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d21217ca19759a6b6781bbfba79f8a1025e7faf3beffb30e2cc2cef94d28ff99",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a71/a71440fd008042fe852260e728395bc1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1a4f3af3f466e493ed154f94b10803b57e424ab6ec087d9b78aa281753420df",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a71/a71440fd008042fe852260e728395bc1-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=288f085f5df3756237ea100a1c4655c3c92f402c53378c98c1e2f83f4750d15d",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "zagleft.com",
                "url": "http://zagleft.com/recipe/blueberry-cheesecake-cookies/",
                "shareAs": "http://www.edamam.com/recipe/blueberry-cheesecake-cookies-25d05ec2800e2ab8b7016c049e22c81c/cheesecake",
                "yield": 18,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "* 1 cup butter, softened",
                    "* 3/4 cup granulated sugar",
                    "* 3/4 cup brown sugar",
                    "* 8 ounce cream cheese, softened",
                    "* 1 teaspoon vanilla extract",
                    "* 1 egg",
                    "* 2 1/4 cup all purpose flour",
                    "* 1 teaspoon baking soda",
                    "* 1 teaspoon salt",
                    "* 1 1/2 cup craisin blueberry infused dried cranberry"
                ],
                "ingredients": [
                    {
                        "text": "* 1 cup butter, softened",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "butter",
                        "weight": 227,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "* 3/4 cup granulated sugar",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "granulated sugar",
                        "weight": 150,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "* 3/4 cup brown sugar",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "brown sugar",
                        "weight": 108.75,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "* 8 ounce cream cheese, softened",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "* 1 teaspoon vanilla extract",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "* 1 egg",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "* 2 1/4 cup all purpose flour",
                        "quantity": 2.25,
                        "measure": "cup",
                        "food": "all purpose flour",
                        "weight": 281.25,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "* 1 teaspoon baking soda",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "baking soda",
                        "weight": 4.6,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
                        "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
                    },
                    {
                        "text": "* 1 teaspoon salt",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "* 1 1/2 cup craisin blueberry infused dried cranberry",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "dried cranberry",
                        "weight": 240,
                        "foodCategory": "sugar jam",
                        "foodId": "food_atvsjvja2h9xyfblcy3pzaienr8a",
                        "image": "https://www.edamam.com/food-img/8aa/8aa3935a527394e1568079a489759221.jpg"
                    }
                ],
                "calories": 5251.6626475,
                "totalCO2Emissions": 13533.3573978,
                "co2EmissionsClass": "E",
                "totalWeight": 1287.8670746788498,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "teatime"
                ],
                "dishType": [
                    "biscuits and cookies"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5251.6626475,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 271.57895764,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 162.44128687,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.6770553645,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 75.85964758350002,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 12.609114038000001,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 683.491649412,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 663.177899412,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 20.31375,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 439.538911556,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 255.1875,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 50.80523537750001,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 877.07414685,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2989.6282162938,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 455.10931297292404,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 111.9008655467885,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 985.7636353743081,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.893034739440207,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.15624681467885,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 709.8439179500001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2324.8122498000002,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.48,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.32018762255,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.2843862255,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 18.380399528349997,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.46754536360000004,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 866.95665665,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 130.08165665,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 433.125,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.2675516070000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.8600000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.355222191,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 39.865469885,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 263.9337350893577,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 262.583132375,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 417.8137809846154,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 812.20643435,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 227.830549804,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 81.255,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 101.61047075500002,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 292.35804895,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 124.567842345575,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 45.5109312972924,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 26.643063225425834,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 20.97369436966613,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 88.29463744133449,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 37.78406195162591,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 101.40627399285715,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 258.31247220000006,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.5333333333333333,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 193.34896854583334,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 175.72201734615382,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 114.87749705218748,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 35.96502796923077,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 216.73916416250003,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 52.81465029166667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.733333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 89.03481460666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 33.22122490416667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 271.57895764,
                        "hasRDI": true,
                        "daily": 417.8137809846154,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 162.44128687,
                                "hasRDI": true,
                                "daily": 812.20643435,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.6770553645,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 75.85964758350002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 12.609114038000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 683.491649412,
                        "hasRDI": true,
                        "daily": 227.830549804,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 663.177899412,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 20.31375,
                                "hasRDI": true,
                                "daily": 81.255,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 439.538911556,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 255.1875,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 50.80523537750001,
                        "hasRDI": true,
                        "daily": 101.61047075500002,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 877.07414685,
                        "hasRDI": true,
                        "daily": 292.35804895,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2989.6282162938,
                        "hasRDI": true,
                        "daily": 124.567842345575,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 455.10931297292404,
                        "hasRDI": true,
                        "daily": 45.5109312972924,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 111.9008655467885,
                        "hasRDI": true,
                        "daily": 26.643063225425834,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 985.7636353743081,
                        "hasRDI": true,
                        "daily": 20.97369436966613,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.893034739440207,
                        "hasRDI": true,
                        "daily": 88.29463744133449,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.15624681467885,
                        "hasRDI": true,
                        "daily": 37.78406195162591,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 709.8439179500001,
                        "hasRDI": true,
                        "daily": 101.40627399285715,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2324.8122498000002,
                        "hasRDI": true,
                        "daily": 258.31247220000006,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.48,
                        "hasRDI": true,
                        "daily": 0.5333333333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.32018762255,
                        "hasRDI": true,
                        "daily": 193.34896854583334,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.2843862255,
                        "hasRDI": true,
                        "daily": 175.72201734615382,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 18.380399528349997,
                        "hasRDI": true,
                        "daily": 114.87749705218748,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.46754536360000004,
                        "hasRDI": true,
                        "daily": 35.96502796923077,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 866.95665665,
                        "hasRDI": true,
                        "daily": 216.73916416250003,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 130.08165665,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 433.125,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.2675516070000001,
                        "hasRDI": true,
                        "daily": 52.81465029166667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.8600000000000001,
                        "hasRDI": true,
                        "daily": 5.733333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.355222191,
                        "hasRDI": true,
                        "daily": 89.03481460666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 39.865469885,
                        "hasRDI": true,
                        "daily": 33.22122490416667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 263.9337350893577,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/25d05ec2800e2ab8b7016c049e22c81c?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0b19108d30d57b611c4819697201bba1",
                "label": "Creamy Greek Yogurt Key Lime Cheesecake recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/22a/22a6063da42b7c6893da2442b10ee800?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=45e7297a8088f775ace8609303c19bd76588cb683303f94c791ce311bc26d3aa",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/22a/22a6063da42b7c6893da2442b10ee800-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c6e5f2d93c076d7a77b16f740a5c23a2d82f58d3a70f92dd6f18ebf2c98ceefe",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/22a/22a6063da42b7c6893da2442b10ee800-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0303b51b6856febff4e70f84b1d68cf654314fb4557283d671a72cb8caa94976",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/22a/22a6063da42b7c6893da2442b10ee800?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=45e7297a8088f775ace8609303c19bd76588cb683303f94c791ce311bc26d3aa",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "bakerbynature.com",
                "url": "http://bakerbynature.com/creamy-greek-yogurt-key-lime-cheesecake/",
                "shareAs": "http://www.edamam.com/recipe/creamy-greek-yogurt-key-lime-cheesecake-recipes-0b19108d30d57b611c4819697201bba1/cheesecake",
                "yield": 4,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 cups graham crackers, pulsed into crumbs",
                    "1/3 cup sugar",
                    "1/4 teaspoon salt",
                    "7 tablespoons butter, melted",
                    "3 (8 ounce) packages cream cheese, very soft",
                    "1 cup Full-Fat Greek yogurt",
                    "1 1/4 cups granulated sugar",
                    "2 teaspoons pure vanilla extract",
                    "3 large eggs + 2 egg yolks, at room temperature",
                    "3 tablespoons all-purpose flour",
                    "3/4 cup key lime juice"
                ],
                "ingredients": [
                    {
                        "text": "2 cups graham crackers, pulsed into crumbs",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "graham crackers",
                        "weight": 168,
                        "foodCategory": "pastries",
                        "foodId": "food_aipm8mobslonobbbkxmhbb8a4iox",
                        "image": "https://www.edamam.com/food-img/448/448b5544a8ac969e88525f6bc44f5c12.jpg"
                    },
                    {
                        "text": "1/3 cup sugar",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 66.66666666666666,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/4 teaspoon salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "7 tablespoons butter, melted",
                        "quantity": 7,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 99.39999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3 (8 ounce) packages cream cheese, very soft",
                        "quantity": 24,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 680.388555,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1 cup Full-Fat Greek yogurt",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "Full-Fat Greek yogurt",
                        "weight": 288,
                        "foodCategory": "yogurt",
                        "foodId": "food_bllzl82a5fkj4yanmzoztapdyryz",
                        "image": "https://www.edamam.com/food-img/689/6891387401f579242e7303ce8ec00e18.jpg"
                    },
                    {
                        "text": "1 1/4 cups granulated sugar",
                        "quantity": 1.25,
                        "measure": "cup",
                        "food": "granulated sugar",
                        "weight": 250,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "2 teaspoons pure vanilla extract",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 8.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "3 large eggs + 2 egg yolks, at room temperature",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 150,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "3 tablespoons all-purpose flour",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "all-purpose flour",
                        "weight": 23.43749999960373,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "3/4 cup key lime juice",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "key lime juice",
                        "weight": 181.5,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    }
                ],
                "calories": 5661.897442498558,
                "totalCO2Emissions": 27976.62090173271,
                "co2EmissionsClass": "G",
                "totalWeight": 1917.2927216662704,
                "totalTime": 105,
                "cuisineType": [
                    "american",
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5661.897442498558,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 362.36584041999606,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 204.62457623499938,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 8.1099460935,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 93.62477087549965,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 25.120768488998362,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 529.6272674023643,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 522.556454902375,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 7.070812499989301,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 397.5876142513322,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 316.0333333333333,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 97.03339863245917,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1497.20644055,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3951.6650793666586,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1122.5787900166074,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 169.12221994991287,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1670.8873509329092,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.167920743814944,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.390871941663894,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1410.898253849572,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3134.2939494,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 54.449999999999996,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8969427426468892,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.0279025931647094,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.90884408502662,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.9825460907998256,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 459.6300949488469,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 191.5838449498851,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 157.05374999938974,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.0008348209999998,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.722427822999089,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 46.879472154998815,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 666.0581757632862,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 283.0948721249279,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 557.4859083384555,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1023.1228811749968,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 176.54242246745477,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 28.283249999957203,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 194.06679726491836,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 499.0688135166667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 164.65271164027743,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 112.25787900166074,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 40.26719522616973,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 35.550794700700195,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 62.04400413230524,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 67.18974492421722,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 201.5568934070817,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 348.2548832666667,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 60.5,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 74.74522855390744,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 232.91558408959304,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 61.93027553141638,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 75.5804685230635,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 114.90752373721172,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 125.03478420833332,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 20,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 84.81618548666059,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 39.06622679583234,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 362.36584041999606,
                        "hasRDI": true,
                        "daily": 557.4859083384555,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 204.62457623499938,
                                "hasRDI": true,
                                "daily": 1023.1228811749968,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 8.1099460935,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 93.62477087549965,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 25.120768488998362,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 529.6272674023643,
                        "hasRDI": true,
                        "daily": 176.54242246745477,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 522.556454902375,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 7.070812499989301,
                                "hasRDI": true,
                                "daily": 28.283249999957203,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 397.5876142513322,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 316.0333333333333,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 97.03339863245917,
                        "hasRDI": true,
                        "daily": 194.06679726491836,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1497.20644055,
                        "hasRDI": true,
                        "daily": 499.0688135166667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3951.6650793666586,
                        "hasRDI": true,
                        "daily": 164.65271164027743,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1122.5787900166074,
                        "hasRDI": true,
                        "daily": 112.25787900166074,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 169.12221994991287,
                        "hasRDI": true,
                        "daily": 40.26719522616973,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1670.8873509329092,
                        "hasRDI": true,
                        "daily": 35.550794700700195,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.167920743814944,
                        "hasRDI": true,
                        "daily": 62.04400413230524,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.390871941663894,
                        "hasRDI": true,
                        "daily": 67.18974492421722,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1410.898253849572,
                        "hasRDI": true,
                        "daily": 201.5568934070817,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3134.2939494,
                        "hasRDI": true,
                        "daily": 348.2548832666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 54.449999999999996,
                        "hasRDI": true,
                        "daily": 60.5,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8969427426468892,
                        "hasRDI": true,
                        "daily": 74.74522855390744,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.0279025931647094,
                        "hasRDI": true,
                        "daily": 232.91558408959304,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 9.90884408502662,
                        "hasRDI": true,
                        "daily": 61.93027553141638,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.9825460907998256,
                        "hasRDI": true,
                        "daily": 75.5804685230635,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 459.6300949488469,
                        "hasRDI": true,
                        "daily": 114.90752373721172,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 191.5838449498851,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 157.05374999938974,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.0008348209999998,
                        "hasRDI": true,
                        "daily": 125.03478420833332,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3,
                        "hasRDI": true,
                        "daily": 20,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 12.722427822999089,
                        "hasRDI": true,
                        "daily": 84.81618548666059,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 46.879472154998815,
                        "hasRDI": true,
                        "daily": 39.06622679583234,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 666.0581757632862,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "yoghurt cake",
                    "cheesecake yogurt",
                    "cream cheese yogurt dessert",
                    "key lime cream cheese",
                    "all natural fruit desserts",
                    "yogurt lime dessert",
                    "lime topping for cheesecake",
                    "cheesecake with yogurt",
                    "avocado egg toast",
                    "key lime cheese cake",
                    "fat free natural yoghurt",
                    "greek yogurt cheese cake",
                    "pur body",
                    "key lime puree",
                    "cheesecake yoghurt",
                    "key lime greek yogurt",
                    "non bake key lime cheesecake",
                    "cottage cheese yogurt cheesecake",
                    "no bake cheesecake with yogurt",
                    "lime yogurt cake"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/0b19108d30d57b611c4819697201bba1?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6bfc3afc67ae89e21ac3e48dda49bdb9",
                "label": "Pumpkin Cheesecake Shooters",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/89e/89e0f1deb044e42bbc4a9aafa2dced9a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b7a41283f923472b61c3d0c7714c2c355a67fa1a8b1108dddc4583c640287e5e",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/89e/89e0f1deb044e42bbc4a9aafa2dced9a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=78fc49e2e56dc98e81094f925ae18d694471d3bb935c2e9f1f706b2db1e88e08",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/89e/89e0f1deb044e42bbc4a9aafa2dced9a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2bba80a708f97dc0fb1f2e3639caac16907d87f6a69a9a6e520b9fec2f781a05",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/89e/89e0f1deb044e42bbc4a9aafa2dced9a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b7a41283f923472b61c3d0c7714c2c355a67fa1a8b1108dddc4583c640287e5e",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/89e/89e0f1deb044e42bbc4a9aafa2dced9a-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a310ee0afa1589296849158500d1b63b3b0fb96a46f6833a74abe059b6276eee",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Skinnytaste",
                "url": "http://www.skinnytaste.com/2012/10/pumpkin-cheesecake-shooters.html",
                "shareAs": "http://www.edamam.com/recipe/pumpkin-cheesecake-shooters-6bfc3afc67ae89e21ac3e48dda49bdb9/cheesecake",
                "yield": 8,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 (1.5 oz total) whole chocolate graham crackers",
                    "4 oz 1/3 fat cream cheese, softened",
                    "1/2 cup pure canned pumpkin",
                    "1 tsp pure vanilla extract",
                    "3 tbsp dark brown sugar, unpacked",
                    "1 tsp pumpkin pie spice",
                    "1/4 tsp nutmeg",
                    "1/4 tsp cinnamon",
                    "8 oz light whipped topping (I used Truwhip light)"
                ],
                "ingredients": [
                    {
                        "text": "3 (1.5 oz total) whole chocolate graham crackers",
                        "quantity": 3,
                        "measure": "ounce",
                        "food": "graham crackers",
                        "weight": 85.048569375,
                        "foodCategory": "pastries",
                        "foodId": "food_aipm8mobslonobbbkxmhbb8a4iox",
                        "image": "https://www.edamam.com/food-img/448/448b5544a8ac969e88525f6bc44f5c12.jpg"
                    },
                    {
                        "text": "4 oz 1/3 fat cream cheese, softened",
                        "quantity": 4,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 113.3980925,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1/2 cup pure canned pumpkin",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "canned pumpkin",
                        "weight": 122.5,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_by3qw9tbk1v1n3ap2c6bmat51nnx",
                        "image": null
                    },
                    {
                        "text": "1 tsp pure vanilla extract",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "3 tbsp dark brown sugar, unpacked",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "dark brown sugar",
                        "weight": 27.187499999540343,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1 tsp pumpkin pie spice",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "pumpkin pie spice",
                        "weight": 1.7,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_any64dqbjqgymrbp7a2s4a8im10r",
                        "image": "https://www.edamam.com/food-img/be9/be9f44bb5fa838e7e1bf02e16ff29740.jpg"
                    },
                    {
                        "text": "1/4 tsp nutmeg",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "nutmeg",
                        "weight": 0.55,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                        "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                    },
                    {
                        "text": "1/4 tsp cinnamon",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "cinnamon",
                        "weight": 0.65,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "8 oz light whipped topping (I used Truwhip light)",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "whipped topping",
                        "weight": 226.796185,
                        "foodCategory": "Dairy",
                        "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                        "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
                    }
                ],
                "calories": 1512.8338675107534,
                "totalCO2Emissions": 8610.18482061728,
                "co2EmissionsClass": "E",
                "totalWeight": 582.0303468745403,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1512.8338675107534,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 99.14027524375001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 56.02555239581251,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.37353439540625,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 26.882558210062506,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 8.1676481845625,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 139.77537373492407,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 132.62007237617408,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 7.15530135875,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 74.60555328255414,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 26.371874999554134,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 21.459829899936956,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 286.897174025,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 828.2168232248715,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 478.53131999336847,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 104.00721142495863,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 938.3813169868888,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.759493166621737,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.5076388629998623,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 528.3324169687316,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1729.0389527,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 5.5840000000000005,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.36950985856875,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.75088609791875,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.589312323924495,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.3787110108748115,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 153.61555738749536,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 49.005817056245405,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 61.23496995000001,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.9071847400000002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.9071847400000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.0573425770625,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 39.138032878125,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 314.6271020618064,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 75.64169337553767,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 152.523500375,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 280.12776197906254,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 46.59179124497469,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 28.621205435,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 42.91965979987392,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 95.63239134166668,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 34.50903430103631,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 47.853131999336846,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 24.76362176784729,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 19.965559935891253,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 31.99718425900965,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 22.796716936362387,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 75.47605956696167,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 192.1154391888889,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 6.204444444444445,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 30.7924882140625,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 57.760469070673075,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 28.683202024528093,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 29.131616221139346,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 38.40388934687384,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 37.79936416666668,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.047898266666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 33.71561718041667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 32.615027398437505,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 99.14027524375001,
                        "hasRDI": true,
                        "daily": 152.523500375,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 56.02555239581251,
                                "hasRDI": true,
                                "daily": 280.12776197906254,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.37353439540625,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 26.882558210062506,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 8.1676481845625,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 139.77537373492407,
                        "hasRDI": true,
                        "daily": 46.59179124497469,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 132.62007237617408,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 7.15530135875,
                                "hasRDI": true,
                                "daily": 28.621205435,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 74.60555328255414,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 26.371874999554134,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 21.459829899936956,
                        "hasRDI": true,
                        "daily": 42.91965979987392,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 286.897174025,
                        "hasRDI": true,
                        "daily": 95.63239134166668,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 828.2168232248715,
                        "hasRDI": true,
                        "daily": 34.50903430103631,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 478.53131999336847,
                        "hasRDI": true,
                        "daily": 47.853131999336846,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 104.00721142495863,
                        "hasRDI": true,
                        "daily": 24.76362176784729,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 938.3813169868888,
                        "hasRDI": true,
                        "daily": 19.965559935891253,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.759493166621737,
                        "hasRDI": true,
                        "daily": 31.99718425900965,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.5076388629998623,
                        "hasRDI": true,
                        "daily": 22.796716936362387,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 528.3324169687316,
                        "hasRDI": true,
                        "daily": 75.47605956696167,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1729.0389527,
                        "hasRDI": true,
                        "daily": 192.1154391888889,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 5.5840000000000005,
                        "hasRDI": true,
                        "daily": 6.204444444444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.36950985856875,
                        "hasRDI": true,
                        "daily": 30.7924882140625,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.75088609791875,
                        "hasRDI": true,
                        "daily": 57.760469070673075,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 4.589312323924495,
                        "hasRDI": true,
                        "daily": 28.683202024528093,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.3787110108748115,
                        "hasRDI": true,
                        "daily": 29.131616221139346,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 153.61555738749536,
                        "hasRDI": true,
                        "daily": 38.40388934687384,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 49.005817056245405,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 61.23496995000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.9071847400000002,
                        "hasRDI": true,
                        "daily": 37.79936416666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.9071847400000002,
                        "hasRDI": true,
                        "daily": 6.047898266666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.0573425770625,
                        "hasRDI": true,
                        "daily": 33.71561718041667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 39.138032878125,
                        "hasRDI": true,
                        "daily": 32.615027398437505,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 314.6271020618064,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/6bfc3afc67ae89e21ac3e48dda49bdb9?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3de2b7c19f250f5fbe9e5b70b8f9611c",
                "label": "Toffee Apple Cheesecake Bars recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5fe/5fedf3088d3e6296e3d6b1e6c147ea83?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=811ce5a8491d53d6d088ed8314e25c27a08ff19e9efae64c00d48b69618241fc",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5fe/5fedf3088d3e6296e3d6b1e6c147ea83-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6d810be0702b460aba642dc99993d33ea60d85bd45b285051f88bf5aeb241585",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5fe/5fedf3088d3e6296e3d6b1e6c147ea83-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=141bcf7798da1db58ec59682f582839ea27663616f90644ccb81f531898080aa",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5fe/5fedf3088d3e6296e3d6b1e6c147ea83?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=811ce5a8491d53d6d088ed8314e25c27a08ff19e9efae64c00d48b69618241fc",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "littlefiggy.com",
                "url": "http://www.littlefiggy.com/toffee-apple-cheesecake-bars/",
                "shareAs": "http://www.edamam.com/recipe/toffee-apple-cheesecake-bars-recipes-3de2b7c19f250f5fbe9e5b70b8f9611c/cheesecake",
                "yield": 12,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 Tbsp. butter",
                    "1 large Granny Smith apple, thinly sliced",
                    "1/4 cup packed brown sugar, divided",
                    "1/2 tsp. ground cinnamon",
                    "9-1/4 HONEY MAID Honey Grahams, divided",
                    "1 pkg. (8 oz.) Neufchatel cheese, softened",
                    "3 Tbsp. toffee bits",
                    "1-1/2 cup thawed frozen light whipped topping, divided"
                ],
                "ingredients": [
                    {
                        "text": "1 Tbsp. butter",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 14.2,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1 large Granny Smith apple, thinly sliced",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "Granny Smith apple",
                        "weight": 206,
                        "foodCategory": "fruit",
                        "foodId": "food_b4m99bgatuhmfybeq0d7xa9uvr1b",
                        "image": "https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg"
                    },
                    {
                        "text": "1/4 cup packed brown sugar, divided",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "brown sugar",
                        "weight": 55,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1/2 tsp. ground cinnamon",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "ground cinnamon",
                        "weight": 1.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "9-1/4 HONEY MAID Honey Grahams, divided",
                        "quantity": 9.25,
                        "measure": "<unit>",
                        "food": "HONEY MAID Honey Grahams",
                        "weight": 129.5,
                        "foodCategory": "pastries",
                        "foodId": "food_aipm8mobslonobbbkxmhbb8a4iox",
                        "image": "https://www.edamam.com/food-img/448/448b5544a8ac969e88525f6bc44f5c12.jpg"
                    },
                    {
                        "text": "1 pkg. (8 oz.) Neufchatel cheese, softened",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "Neufchatel cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_bmzodeabrckoyfbl3fcuoa4v2x3s",
                        "image": "https://www.edamam.com/food-img/3c1/3c1d53275d70860d26bed4410e498e35.jpg"
                    },
                    {
                        "text": "3 Tbsp. toffee bits",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "toffee bits",
                        "weight": 33.74999999942939,
                        "foodCategory": "candy",
                        "foodId": "food_ajw1zhba0x7mb3aurtthjakbwpzc",
                        "image": "https://www.edamam.com/food-img/4da/4da417b7b2ea5101e6ba71efcd54cbb3.jpg"
                    },
                    {
                        "text": "1-1/2 cup thawed frozen light whipped topping, divided",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "whipped topping",
                        "weight": 90,
                        "foodCategory": "Dairy",
                        "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                        "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
                    }
                ],
                "calories": 1984.4493480468047,
                "totalCO2Emissions": 8482.309237798174,
                "co2EmissionsClass": "E",
                "totalWeight": 756.5461849994294,
                "totalTime": 50,
                "cuisineType": [
                    "british"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1984.4493480468047,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 108.41025017981286,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 57.68874667988247,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.2986999999961541,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 28.487267492948874,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 10.762526994493037,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 224.8770530411308,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 214.01575304113084,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.8613,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 141.12417830113768,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 74.78124999963767,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 33.8014959274939,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 301.85917689940663,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1497.6337578992297,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 539.799536449806,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 102.04361849997719,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1043.753701199709,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 6.055560040499827,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.6118987169993155,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 674.6137352998174,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 931.0643058481799,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.1168999999988588,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.46920616069995436,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.900360086749612,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 6.642173488499836,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.43619393584994864,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 220.07046589998856,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 66.96546589998859,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 93.24,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.0026535549993725,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.36000000000000004,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.486284739994637,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 33.02063514498403,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 382.15926773499694,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 99.22246740234023,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 166.78500027663517,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 288.44373339941234,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 74.95901768037695,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 43.44520000000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 67.6029918549878,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 100.61972563313554,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 62.40140657913457,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 53.979953644980604,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 24.29609964285171,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 22.20752555744062,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 33.64200022499904,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 32.83544288181196,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 96.37339075711678,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 103.45158953868665,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.1298888888876209,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 39.100513391662865,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 69.25846821150861,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 41.51358430312398,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 33.55337968076528,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 55.01761647499714,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 41.777231458307185,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.4000000000000004,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 29.908564933297576,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 27.517195954153355,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 108.41025017981286,
                        "hasRDI": true,
                        "daily": 166.78500027663517,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 57.68874667988247,
                                "hasRDI": true,
                                "daily": 288.44373339941234,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.2986999999961541,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 28.487267492948874,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 10.762526994493037,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 224.8770530411308,
                        "hasRDI": true,
                        "daily": 74.95901768037695,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 214.01575304113084,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 10.8613,
                                "hasRDI": true,
                                "daily": 43.44520000000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 141.12417830113768,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 74.78124999963767,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 33.8014959274939,
                        "hasRDI": true,
                        "daily": 67.6029918549878,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 301.85917689940663,
                        "hasRDI": true,
                        "daily": 100.61972563313554,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1497.6337578992297,
                        "hasRDI": true,
                        "daily": 62.40140657913457,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 539.799536449806,
                        "hasRDI": true,
                        "daily": 53.979953644980604,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 102.04361849997719,
                        "hasRDI": true,
                        "daily": 24.29609964285171,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1043.753701199709,
                        "hasRDI": true,
                        "daily": 22.20752555744062,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 6.055560040499827,
                        "hasRDI": true,
                        "daily": 33.64200022499904,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.6118987169993155,
                        "hasRDI": true,
                        "daily": 32.83544288181196,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 674.6137352998174,
                        "hasRDI": true,
                        "daily": 96.37339075711678,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 931.0643058481799,
                        "hasRDI": true,
                        "daily": 103.45158953868665,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.1168999999988588,
                        "hasRDI": true,
                        "daily": 0.1298888888876209,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.46920616069995436,
                        "hasRDI": true,
                        "daily": 39.100513391662865,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.900360086749612,
                        "hasRDI": true,
                        "daily": 69.25846821150861,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 6.642173488499836,
                        "hasRDI": true,
                        "daily": 41.51358430312398,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.43619393584994864,
                        "hasRDI": true,
                        "daily": 33.55337968076528,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 220.07046589998856,
                        "hasRDI": true,
                        "daily": 55.01761647499714,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 66.96546589998859,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 93.24,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.0026535549993725,
                        "hasRDI": true,
                        "daily": 41.777231458307185,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.36000000000000004,
                        "hasRDI": true,
                        "daily": 2.4000000000000004,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.486284739994637,
                        "hasRDI": true,
                        "daily": 29.908564933297576,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 33.02063514498403,
                        "hasRDI": true,
                        "daily": 27.517195954153355,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 382.15926773499694,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "cheesecake",
                    "kid friendly",
                    "desserts",
                    "apple dessert",
                    "bars",
                    "neufchatel cheese",
                    "granny smith apples",
                    "fruit dessert",
                    "cheesecake bars",
                    "dessert bars",
                    "apple cheese cake",
                    "fruit candy",
                    "toffee bits",
                    "frozen apples",
                    "toffee cheesecake",
                    "neufchatel",
                    "neufchatel cheese dessert",
                    "apple cheesecake bars",
                    "toffee apple cheesecake bars"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/3de2b7c19f250f5fbe9e5b70b8f9611c?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_70e9e273ee9c204ea8e35de6cb6cea28",
                "label": "PHILLY Chocolate Turtles® Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4d5/4d5a1bfd622b9c2493feda4ce6a63472.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cd777fb1593ff33858e406b80473a5be9698fda3583896c295f46aba71d56025",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d5/4d5a1bfd622b9c2493feda4ce6a63472-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a26309961bddccf6be0d22a49b43693af23b7d2066873552842344fa73b4cd59",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d5/4d5a1bfd622b9c2493feda4ce6a63472-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c74ba914576a81aed0e2e122a4ede127219696e89b111ab1992c30af8d36defd",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d5/4d5a1bfd622b9c2493feda4ce6a63472.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cd777fb1593ff33858e406b80473a5be9698fda3583896c295f46aba71d56025",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Allrecipes",
                "url": "https://www.allrecipes.com/recipe/179695/philly-chocolate-turtles-cheesecake/",
                "shareAs": "http://www.edamam.com/recipe/philly-chocolate-turtles-cheesecake-70e9e273ee9c204ea8e35de6cb6cea28/cheesecake",
                "yield": 16,
                "dietLabels": [],
                "healthLabels": [
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Soy",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 1/4 cups finely chopped toasted pecans",
                    "2 tablespoons non-hydrogenated margarine, melted",
                    "2 tablespoons sugar",
                    "32 KRAFT Caramels, chopped",
                    "3 tablespoons milk",
                    "3 (250 g) packages PHILADELPHIA Brick Cream Cheese, softened",
                    "3/4 cup white sugar",
                    "3 eggs",
                    "1 (8 ounce) package BAKERS Semi-Sweet Chocolate, melted, cooled slightly",
                    "1/2 cup pecan halves, toasted"
                ],
                "ingredients": [
                    {
                        "text": "1 1/4 cups finely chopped toasted pecans",
                        "quantity": 1.25,
                        "measure": "cup",
                        "food": "pecans",
                        "weight": 123.75,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a9apeypa4rgl7eax9hbjradaa4ry",
                        "image": "https://www.edamam.com/food-img/42f/42ff4c36d4d0b4e8069604c97af1cfef.jpg"
                    },
                    {
                        "text": "2 tablespoons non-hydrogenated margarine, melted",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "margarine",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bpy417na9x14isbywkw04a21r148",
                        "image": "https://www.edamam.com/food-img/33e/33ef6c4bf7db16d574a3f68fa31c4b09.jpg"
                    },
                    {
                        "text": "2 tablespoons sugar",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "32 KRAFT Caramels, chopped",
                        "quantity": 32,
                        "measure": "<unit>",
                        "food": "Caramels",
                        "weight": 323.2,
                        "foodCategory": "candy",
                        "foodId": "food_ajss0k6atge1gdac6tkc8a6cmej0",
                        "image": "https://www.edamam.com/food-img/35d/35db465599fb33cd15bc79f5acd77456.jpg"
                    },
                    {
                        "text": "3 tablespoons milk",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "milk",
                        "weight": 45,
                        "foodCategory": "Milk",
                        "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                        "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                    },
                    {
                        "text": "3 (250 g) packages PHILADELPHIA Brick Cream Cheese, softened",
                        "quantity": 750,
                        "measure": "gram",
                        "food": "Cream Cheese",
                        "weight": 750,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "3/4 cup white sugar",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "white sugar",
                        "weight": 150,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "3 eggs",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 129,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 (8 ounce) package BAKERS Semi-Sweet Chocolate, melted, cooled slightly",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "Semi-Sweet Chocolate",
                        "weight": 226.796185,
                        "foodCategory": "chocolate",
                        "foodId": "food_beu5dozavhrqdpblca414a55qow3",
                        "image": "https://www.edamam.com/food-img/0a1/0a1b6f30cb99e1842cac6167f6f424d7.jpg"
                    },
                    {
                        "text": "1/2 cup pecan halves, toasted",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "pecan",
                        "weight": 49.5,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a9apeypa4rgl7eax9hbjradaa4ry",
                        "image": "https://www.edamam.com/food-img/42f/42ff4c36d4d0b4e8069604c97af1cfef.jpg"
                    }
                ],
                "calories": 7235.333187998365,
                "totalCO2Emissions": 31089.110459363652,
                "co2EmissionsClass": "F",
                "totalWeight": 1850.2461849995773,
                "totalTime": 310,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 7235.333187998365,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 513.2844555,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 219.72263093,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 12.99602,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 181.0786596445,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 71.31586114710001,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 637.5533122145774,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 607.5403372995775,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 30.012974915000004,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 547.7777458245782,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 509.94992082457827,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 104.12096477000001,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1264.504,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3559.1875803499956,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1493.0457791999959,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 613.15211275,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3465.7390752499914,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.15152559049979,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 18.57330319699996,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2244.8414642,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2581.0815000000002,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.19855,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.8492439017500002,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.68056356649992,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.29392070995,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.2796956647500002,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 211.18650405,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 211.18650405,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.9702,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.165,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.802290081,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 61.853936360000006,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 572.2559732949999,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 361.7666593999183,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 789.6683930769232,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1098.61315465,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 212.5177707381925,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 120.05189966000002,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 208.24192954000003,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 421.5013333333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 148.29948251458313,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 149.3045779199996,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 145.98859827380952,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 73.73912926063811,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 84.17514216944329,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 168.8482108818178,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 320.6916377428571,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 286.78683333333333,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.553944444444445,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 154.10365847916668,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 283.1202743461477,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 26.8370044371875,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 98.43812805769232,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 52.7966260125,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 165.425,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 21.1,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 92.01526720666668,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 51.54494696666667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 513.2844555,
                        "hasRDI": true,
                        "daily": 789.6683930769232,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 219.72263093,
                                "hasRDI": true,
                                "daily": 1098.61315465,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 12.99602,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 181.0786596445,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 71.31586114710001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 637.5533122145774,
                        "hasRDI": true,
                        "daily": 212.5177707381925,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 607.5403372995775,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 30.012974915000004,
                                "hasRDI": true,
                                "daily": 120.05189966000002,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 547.7777458245782,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 509.94992082457827,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 104.12096477000001,
                        "hasRDI": true,
                        "daily": 208.24192954000003,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1264.504,
                        "hasRDI": true,
                        "daily": 421.5013333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3559.1875803499956,
                        "hasRDI": true,
                        "daily": 148.29948251458313,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1493.0457791999959,
                        "hasRDI": true,
                        "daily": 149.3045779199996,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 613.15211275,
                        "hasRDI": true,
                        "daily": 145.98859827380952,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3465.7390752499914,
                        "hasRDI": true,
                        "daily": 73.73912926063811,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.15152559049979,
                        "hasRDI": true,
                        "daily": 84.17514216944329,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 18.57330319699996,
                        "hasRDI": true,
                        "daily": 168.8482108818178,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2244.8414642,
                        "hasRDI": true,
                        "daily": 320.6916377428571,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2581.0815000000002,
                        "hasRDI": true,
                        "daily": 286.78683333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 3.19855,
                        "hasRDI": true,
                        "daily": 3.553944444444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.8492439017500002,
                        "hasRDI": true,
                        "daily": 154.10365847916668,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.68056356649992,
                        "hasRDI": true,
                        "daily": 283.1202743461477,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 4.29392070995,
                        "hasRDI": true,
                        "daily": 26.8370044371875,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.2796956647500002,
                        "hasRDI": true,
                        "daily": 98.43812805769232,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 211.18650405,
                        "hasRDI": true,
                        "daily": 52.7966260125,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 211.18650405,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.9702,
                        "hasRDI": true,
                        "daily": 165.425,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3.165,
                        "hasRDI": true,
                        "daily": 21.1,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.802290081,
                        "hasRDI": true,
                        "daily": 92.01526720666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 61.853936360000006,
                        "hasRDI": true,
                        "daily": 51.54494696666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 572.2559732949999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Cheesecake",
                    "Desserts",
                    "Chocolate",
                    "Gourmet",
                    "Chocolate Cheesecake",
                    "Cakes",
                    "More Holidays and Events",
                    "Events and Gatherings",
                    "Bake Sale",
                    "Fundraising Favorites",
                    "Easter Recipes",
                    "Cake Recipes"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/70e9e273ee9c204ea8e35de6cb6cea28?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_fde80ab0f10a3e0a24f4d380214fb333",
                "label": "Blueberry Cheesecake Danishes Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/eb8/eb8ea150afe4545fa31218ba4c2ebe94.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=690c7d093faebe7d28678b9b96ed6fa870f71e5698dc942b88d11a0653f44ef7",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eb8/eb8ea150afe4545fa31218ba4c2ebe94-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=942df60f522b8bf0d1c4884d6bcf9cbcd9046113ec62ec5cb5472b4aa7ea022b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eb8/eb8ea150afe4545fa31218ba4c2ebe94-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b078ffd67c565f86056b000e111b6d461b8ac206025fd735bf050208e86e364",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eb8/eb8ea150afe4545fa31218ba4c2ebe94.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=690c7d093faebe7d28678b9b96ed6fa870f71e5698dc942b88d11a0653f44ef7",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "familycookbookproject.com",
                "url": "https://familycookbookproject.com/recipe/3025852/blueberry-cheesecake-danishes.html",
                "shareAs": "http://www.edamam.com/recipe/blueberry-cheesecake-danishes-recipe-fde80ab0f10a3e0a24f4d380214fb333/cheesecake",
                "yield": 16,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 cans (8 oz. each) refrigerated crescent rolls",
                    "1 (8 oz.) container Philadelphia Indulgences white chocolate cream cheese",
                    "1/2 c. canned blueberry pie filling"
                ],
                "ingredients": [
                    {
                        "text": "2 cans (8 oz. each) refrigerated crescent rolls",
                        "quantity": 16,
                        "measure": "ounce",
                        "food": "refrigerated crescent rolls",
                        "weight": 453.59237,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_apqpbdfbujbtraane617eaxwsjcw",
                        "image": null
                    },
                    {
                        "text": "1 (8 oz.) container Philadelphia Indulgences white chocolate cream cheese",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1/2 c. canned blueberry pie filling",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "canned blueberry pie filling",
                        "weight": 131,
                        "foodCategory": "sugars",
                        "foodId": "food_at01h0cae6wrsfa2gvlhlb52lts1",
                        "image": "https://www.edamam.com/food-img/a7b/a7b37b8839e461c66650c3d43d3d7633.jpg"
                    }
                ],
                "calories": 2359.9222916000003,
                "totalCO2Emissions": 6328.462918700001,
                "co2EmissionsClass": "D",
                "totalWeight": 811.388555,
                "totalTime": 0,
                "cuisineType": [
                    "nordic"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2359.9222916000003,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 129.53582545,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 64.274038829,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 6.6451282205,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 20.207540083500003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 3.356583538,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 263.006314292,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 252.79642874200002,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.209885550000001,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 78.910785576,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 49.518,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 42.42635536950001,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 229.06414685000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5581.298379900001,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 359.68854455,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 33.511656650000006,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 450.0209642000001,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.9115372615,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 1.2649809250000001,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 258.39191795000005,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 699.8422498,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.9169999999999999,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.08229312255,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5661712255000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.32559452835,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.16499586360000001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 21.72165665,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 21.72165665,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.4989516070000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.251747191,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 9.871719885000001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 354.6986388800001,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 117.99611458000003,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 199.28588530769233,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 321.370194145,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 87.66877143066668,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 40.839542200000004,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 84.85271073900002,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 76.35471561666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 232.55409916250005,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 35.968854455,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 7.97896586904762,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 9.574914131914895,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 66.17520700833333,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 11.499826590909093,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 36.913131135714295,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 77.76024997777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.0188888888888887,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 6.857760212500001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 43.551632730769235,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 2.0349658021875,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 12.691989507692309,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 5.4304141625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 20.78965029166667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.011647940000001,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.2264332375,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 129.53582545,
                        "hasRDI": true,
                        "daily": 199.28588530769233,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 64.274038829,
                                "hasRDI": true,
                                "daily": 321.370194145,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 6.6451282205,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 20.207540083500003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 3.356583538,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 263.006314292,
                        "hasRDI": true,
                        "daily": 87.66877143066668,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 252.79642874200002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 10.209885550000001,
                                "hasRDI": true,
                                "daily": 40.839542200000004,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 78.910785576,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 49.518,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 42.42635536950001,
                        "hasRDI": true,
                        "daily": 84.85271073900002,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 229.06414685000001,
                        "hasRDI": true,
                        "daily": 76.35471561666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5581.298379900001,
                        "hasRDI": true,
                        "daily": 232.55409916250005,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 359.68854455,
                        "hasRDI": true,
                        "daily": 35.968854455,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 33.511656650000006,
                        "hasRDI": true,
                        "daily": 7.97896586904762,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 450.0209642000001,
                        "hasRDI": true,
                        "daily": 9.574914131914895,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.9115372615,
                        "hasRDI": true,
                        "daily": 66.17520700833333,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 1.2649809250000001,
                        "hasRDI": true,
                        "daily": 11.499826590909093,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 258.39191795000005,
                        "hasRDI": true,
                        "daily": 36.913131135714295,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 699.8422498,
                        "hasRDI": true,
                        "daily": 77.76024997777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.9169999999999999,
                        "hasRDI": true,
                        "daily": 1.0188888888888887,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.08229312255,
                        "hasRDI": true,
                        "daily": 6.857760212500001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5661712255000001,
                        "hasRDI": true,
                        "daily": 43.551632730769235,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.32559452835,
                        "hasRDI": true,
                        "daily": 2.0349658021875,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.16499586360000001,
                        "hasRDI": true,
                        "daily": 12.691989507692309,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 21.72165665,
                        "hasRDI": true,
                        "daily": 5.4304141625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 21.72165665,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.4989516070000001,
                        "hasRDI": true,
                        "daily": 20.78965029166667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.251747191,
                        "hasRDI": true,
                        "daily": 15.011647940000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 9.871719885000001,
                        "hasRDI": true,
                        "daily": 8.2264332375,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 354.6986388800001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/fde80ab0f10a3e0a24f4d380214fb333?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2b4d02affd502165759b9b292f316f73",
                "label": "Paleo Salted Caramel “Cheesecake” Bars recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f66cda896133dd1e067925f80cd376?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f24272f6eff793dab92f974bd848e7a8bd19d7730859864e65637506c238f5fc",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f66cda896133dd1e067925f80cd376-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=433178ac6af4060f72bd1ab77476dcdee0e63212a7afe93c034c3a858df47402",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f66cda896133dd1e067925f80cd376-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=84baf69c5bbed7c0b3c0d13df263665e179dd44f44bf3fcb3354f3c915d98c40",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f66cda896133dd1e067925f80cd376?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f24272f6eff793dab92f974bd848e7a8bd19d7730859864e65637506c238f5fc",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "paleogrubs.com",
                "url": "http://paleogrubs.com/caramel-cheesecake-bar-recipe",
                "shareAs": "http://www.edamam.com/recipe/paleo-salted-caramel-cheesecake-bars-recipes-2b4d02affd502165759b9b292f316f73/cheesecake",
                "yield": 4,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Tree-Nuts",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 cup walnuts",
                    "1/2 cup almonds",
                    "5 pitted Medjool dates",
                    "2 tbsp unsweetened coconut flakes",
                    "Pinch of salt",
                    "2.5 cups raw cashews",
                    "1/4 cup coconut oil, melted",
                    "1/4 cup honey",
                    "2 tbsp lemon juice",
                    "1 tsp vanilla extract",
                    "1/4 tsp salt",
                    "2 tbsp almond milk",
                    "3/4 cup coconut cream",
                    "1/4 cup ghee",
                    "1 cup palm sugar",
                    "3 tbsp honey",
                    "Pinch of salt",
                    "1/3 cup palm shortening"
                ],
                "ingredients": [
                    {
                        "text": "1 cup walnuts",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "walnuts",
                        "weight": 120,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
                        "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
                    },
                    {
                        "text": "1/2 cup almonds",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 71.5,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "5 pitted Medjool dates",
                        "quantity": 5,
                        "measure": "<unit>",
                        "food": "Medjool dates",
                        "weight": 120,
                        "foodCategory": "fruit",
                        "foodId": "food_aq6d442amcodjrah72l55bzoqenc",
                        "image": "https://www.edamam.com/food-img/051/05168bdd7c88ca141e28c49ccf5a04a9.jpg"
                    },
                    {
                        "text": "2 tbsp unsweetened coconut flakes",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "coconut flakes",
                        "weight": 10.624999999820364,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a9ua70bboyd4rebvrdwb0benu8pn",
                        "image": "https://www.edamam.com/food-img/d76/d76b9333b99d55d69b023d81d179aa39.jpg"
                    },
                    {
                        "text": "Pinch of salt",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "salt",
                        "weight": 0.380208333815447,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "2.5 cups raw cashews",
                        "quantity": 2.5,
                        "measure": "cup",
                        "food": "cashews",
                        "weight": 350,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aa3vawdabgm9zmapkfl78bk049g2",
                        "image": "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg"
                    },
                    {
                        "text": "1/4 cup coconut oil, melted",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "coconut oil",
                        "weight": 54.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
                        "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
                    },
                    {
                        "text": "1/4 cup honey",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "honey",
                        "weight": 84.75,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "2 tbsp lemon juice",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "lemon juice",
                        "weight": 30.4999999994844,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    },
                    {
                        "text": "1 tsp vanilla extract",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "1/4 tsp salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "2 tbsp almond milk",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "almond milk",
                        "weight": 29.9999999994928,
                        "foodCategory": "Vegan products",
                        "foodId": "food_aa8o4pkbhgkey4btmg1daaclqmww",
                        "image": "https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg"
                    },
                    {
                        "text": "3/4 cup coconut cream",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "coconut cream",
                        "weight": 180,
                        "foodCategory": "non-dairy beverages",
                        "foodId": "food_bk45m76audguqfb2mytsbbannom2",
                        "image": "https://www.edamam.com/food-img/9ab/9ab9561c5090adb4f86631c26c89a391.jpg"
                    },
                    {
                        "text": "1/4 cup ghee",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "ghee",
                        "weight": 51.25,
                        "foodCategory": "Dairy",
                        "foodId": "food_bt9uvvxacpohzjblxojh1behk63g",
                        "image": "https://www.edamam.com/food-img/2b5/2b504c036c64481b224c9d74cc4a82e0.jpg"
                    },
                    {
                        "text": "1 cup palm sugar",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "palm sugar",
                        "weight": 145,
                        "foodCategory": "sugars",
                        "foodId": "food_bukxr3fbjauuvabn5sigqaeufiyj",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "3 tbsp honey",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 63,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "Pinch of salt",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "salt",
                        "weight": 0.380208333815447,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/3 cup palm shortening",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "palm shortening",
                        "weight": 68.33333333333333,
                        "foodCategory": "Oils",
                        "foodId": "food_a0nl8jwatjf93ob4vrjgwb0aczzk",
                        "image": "https://www.edamam.com/food-img/0fe/0fee7d75247484bb8c622b6e350568fe.jpg"
                    }
                ],
                "calories": 6693.4326666652905,
                "totalCO2Emissions": 3809.025097746513,
                "co2EmissionsClass": "E",
                "totalWeight": 1385.918749999762,
                "totalTime": 85,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 6693.4326666652905,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 510.4539283332106,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 238.0126385332286,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.026398999999993,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 140.10011593331367,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 97.4795242333262,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 509.0311999999162,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 466.21082499995,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 42.820374999966226,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 370.75873749997385,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 261.95275000000004,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 107.58201999998285,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 131.2,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1004.0059170403551,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 732.5419999991545,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 1549.874104166448,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5171.343083331564,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 36.880599374995036,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 29.06606791666341,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 3179.717599999364,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 443.9699999999345,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 21.05162499979777,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.182944499999464,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.3620974999995048,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.648288749998066,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.732174499999148,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 308.63564999986016,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 308.63564999986016,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.005124999999999999,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 25.921337999986473,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 159.9797083333328,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 235.34872083237212,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 334.6716333332645,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 785.3137358972472,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1190.063192666143,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 169.67706666663872,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 171.2814999998649,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 215.16403999996567,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 43.73333333333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 41.83357987668146,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 73.25419999991546,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 369.0176438491543,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 110.0285762410971,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 204.89221874997241,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 264.23698106057645,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 454.2453714284806,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 49.32999999999272,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 23.390694444219744,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 181.912041666622,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 104.77673076919267,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 72.80180468748792,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 210.16726923070368,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 77.15891249996504,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.21354166666666666,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 172.80891999990982,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 133.31642361111068,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 510.4539283332106,
                        "hasRDI": true,
                        "daily": 785.3137358972472,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 238.0126385332286,
                                "hasRDI": true,
                                "daily": 1190.063192666143,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.026398999999993,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 140.10011593331367,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 97.4795242333262,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 509.0311999999162,
                        "hasRDI": true,
                        "daily": 169.67706666663872,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 466.21082499995,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 42.820374999966226,
                                "hasRDI": true,
                                "daily": 171.2814999998649,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 370.75873749997385,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 261.95275000000004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 107.58201999998285,
                        "hasRDI": true,
                        "daily": 215.16403999996567,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 131.2,
                        "hasRDI": true,
                        "daily": 43.73333333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1004.0059170403551,
                        "hasRDI": true,
                        "daily": 41.83357987668146,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 732.5419999991545,
                        "hasRDI": true,
                        "daily": 73.25419999991546,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 1549.874104166448,
                        "hasRDI": true,
                        "daily": 369.0176438491543,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5171.343083331564,
                        "hasRDI": true,
                        "daily": 110.0285762410971,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 36.880599374995036,
                        "hasRDI": true,
                        "daily": 204.89221874997241,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 29.06606791666341,
                        "hasRDI": true,
                        "daily": 264.23698106057645,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3179.717599999364,
                        "hasRDI": true,
                        "daily": 454.2453714284806,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 443.9699999999345,
                        "hasRDI": true,
                        "daily": 49.32999999999272,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 21.05162499979777,
                        "hasRDI": true,
                        "daily": 23.390694444219744,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.182944499999464,
                        "hasRDI": true,
                        "daily": 181.912041666622,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.3620974999995048,
                        "hasRDI": true,
                        "daily": 104.77673076919267,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.648288749998066,
                        "hasRDI": true,
                        "daily": 72.80180468748792,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.732174499999148,
                        "hasRDI": true,
                        "daily": 210.16726923070368,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 308.63564999986016,
                        "hasRDI": true,
                        "daily": 77.15891249996504,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 308.63564999986016,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.005124999999999999,
                        "hasRDI": true,
                        "daily": 0.21354166666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 25.921337999986473,
                        "hasRDI": true,
                        "daily": 172.80891999990982,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 159.9797083333328,
                        "hasRDI": true,
                        "daily": 133.31642361111068,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 235.34872083237212,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "creme caramel",
                    "5 minute desserts",
                    "paleo lunch",
                    "desserts with coconut sugar",
                    "coconut palm sugar",
                    "paleo cake",
                    "honey soaked cake",
                    "almond flour cake",
                    "caramel almond flakes",
                    "unsweetened vanilla almond milk",
                    "almond caramel bars",
                    "sweet almond water",
                    "salted caramel bars",
                    "paleo dates",
                    "ghee desserts",
                    "paleo caramel",
                    "coconut oil caramel",
                    "caramel nuts",
                    "soaked cashews",
                    "date coconut lemon"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/2b4d02affd502165759b9b292f316f73?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_62b03234004c2ad5d292e68e05f393d4",
                "label": "Ham and baked ricotta cheesecake platter",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f46/f468412b5c69d607f20b174d22d43f38.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d12223f57beb71ddfdaf084c0d0b1c5f680df656259acf8bbdaa727aa778381",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f46/f468412b5c69d607f20b174d22d43f38-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc2d7c313ec4bde94414c7b42cab8653a8152fcedf235009878c55e86313245b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f46/f468412b5c69d607f20b174d22d43f38-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=da3a7b53b29d8318fa2083c8804af2dccdfc73171a6867b01ee2e6b5280fe452",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f46/f468412b5c69d607f20b174d22d43f38.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d12223f57beb71ddfdaf084c0d0b1c5f680df656259acf8bbdaa727aa778381",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f46/f468412b5c69d607f20b174d22d43f38-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad673709f3130f26ffd03a2ac1d9ba119935252a2e5db6a290b60c86029ba8f6",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "taste.com.au",
                "url": "https://www.taste.com.au/recipes/ham-baked-ricotta-cheesecake-platter/d61a4087-3504-4d32-b2b8-6abaff761e22",
                "shareAs": "http://www.edamam.com/recipe/ham-and-baked-ricotta-cheesecake-platter-62b03234004c2ad5d292e68e05f393d4/cheesecake",
                "yield": 8,
                "dietLabels": [],
                "healthLabels": [
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "300g fresh ricotta",
                    "1/2 cup vintage cheddar, grated",
                    "1/3 cup parmesan, grated",
                    "2 egg yolks",
                    "1 tablespoon fresh thyme leaves",
                    "1 tablespoon fresh chives, finely chopped",
                    "1/2 cup walnuts",
                    "1 tablespoon icing sugar",
                    "1 bunch watercress, sprigs picked",
                    "Leftover ham, chilled, sliced (see Notes)",
                    "2 bunches asparagus, trimmed, steamed",
                    "250g Amoroso truss tomatoes",
                    "400g tomato medley mix, large tomatoes halved",
                    "1/4 cup fresh basil leaves",
                    "400g loaf crusty bread, sliced",
                    "1/4 cup honey",
                    "1/4 cup extra virgin olive oil",
                    "1 1/2 tablespoons cider vinegar",
                    "2 tablespoons fresh basil leaves, finely shredded"
                ],
                "ingredients": [
                    {
                        "text": "300g fresh ricotta",
                        "quantity": 300,
                        "measure": "gram",
                        "food": "ricotta",
                        "weight": 300,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "1/2 cup vintage cheddar, grated",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "cheddar",
                        "weight": 66,
                        "foodCategory": "Cheese",
                        "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                        "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
                    },
                    {
                        "text": "1/3 cup parmesan, grated",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "parmesan",
                        "weight": 49.56875,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "2 egg yolks",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "egg yolks",
                        "weight": 26.933333333333334,
                        "foodCategory": "Eggs",
                        "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                        "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
                    },
                    {
                        "text": "1 tablespoon fresh thyme leaves",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "fresh thyme",
                        "weight": 2.3999999998376933,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                        "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                    },
                    {
                        "text": "1 tablespoon fresh chives, finely chopped",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "chives",
                        "weight": 3,
                        "foodCategory": "vegetables",
                        "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                        "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
                    },
                    {
                        "text": "1/2 cup walnuts",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "walnuts",
                        "weight": 60,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
                        "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
                    },
                    {
                        "text": "1 tablespoon icing sugar",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "icing sugar",
                        "weight": 8,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "1 bunch watercress, sprigs picked",
                        "quantity": 1,
                        "measure": "bunch",
                        "food": "watercress",
                        "weight": 100,
                        "foodCategory": "vegetables",
                        "foodId": "food_bqj8tvnav5gmivasnvvlea9fnhpv",
                        "image": "https://www.edamam.com/food-img/5bd/5bde2c99df9b69be97523877ffd891b2.jpg"
                    },
                    {
                        "text": "Leftover ham, chilled, sliced (see Notes)",
                        "quantity": 0,
                        "measure": null,
                        "food": "ham",
                        "weight": 0,
                        "foodCategory": "Cured meats",
                        "foodId": "food_bd97wcfb5tcjnybmibiyeaqrernd",
                        "image": "https://www.edamam.com/food-img/a4b/a4ba02f547d69f0ab89ae266903f1e49.jpg"
                    },
                    {
                        "text": "2 bunches asparagus, trimmed, steamed",
                        "quantity": 2,
                        "measure": "bunch",
                        "food": "asparagus",
                        "weight": 453,
                        "foodCategory": "vegetables",
                        "foodId": "food_b7bgzddbqq26mia27xpv7acn083m",
                        "image": "https://www.edamam.com/food-img/159/159dec8bbcabf7ed641a57b40a2d2eb9.jpg"
                    },
                    {
                        "text": "250g Amoroso truss tomatoes",
                        "quantity": 250,
                        "measure": "gram",
                        "food": "tomatoes",
                        "weight": 250,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "400g tomato medley mix, large tomatoes halved",
                        "quantity": 400,
                        "measure": "gram",
                        "food": "tomatoes",
                        "weight": 400,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "1/4 cup fresh basil leaves",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "fresh basil",
                        "weight": 6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                        "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
                    },
                    {
                        "text": "400g loaf crusty bread, sliced",
                        "quantity": 400,
                        "measure": "gram",
                        "food": "bread",
                        "weight": 400,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                        "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
                    },
                    {
                        "text": "1/4 cup honey",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "honey",
                        "weight": 84.75,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "1/4 cup extra virgin olive oil",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "extra virgin olive oil",
                        "weight": 54,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 1/2 tablespoons cider vinegar",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "cider vinegar",
                        "weight": 22.35,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                        "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                    },
                    {
                        "text": "2 tablespoons fresh basil leaves, finely shredded",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "fresh basil",
                        "weight": 5.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                        "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
                    }
                ],
                "calories": 3480.7513333331694,
                "totalCO2Emissions": 13022.578396349381,
                "co2EmissionsClass": "F",
                "totalWeight": 2291.302083333171,
                "totalTime": 125,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3480.7513333331694,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 185.42566083333057,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 55.970729333332564,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.1310000000000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 68.50640799999988,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 44.705701187499145,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 348.01002541662706,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 309.41572541664976,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 38.59429999997728,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 129.21210229166667,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 77.40375,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 130.50975249999098,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 536.9267500000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3341.084749999985,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2598.525749999342,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 530.841416666407,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4514.197083332345,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 30.951003749971758,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 15.99816729166373,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2402.2971249998272,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1435.4673124996136,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 167.03874999974033,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.9590984791665886,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.520553249999235,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 32.381638812497044,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.351711229166102,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 883.0814791665938,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 747.0814791665938,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 80,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 4.396025,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.6982437500000005,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 20.28413125,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 602.7262020833334,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1599.295408333228,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 174.03756666665848,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 285.2702474358932,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 279.8536466666628,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 116.00334180554235,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 154.37719999990912,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 261.01950499998196,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 178.97558333333336,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 139.21186458333273,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 259.85257499993423,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 126.39081349200167,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 96.04674645387968,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 171.9500208331764,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 145.43788446967028,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 343.1853035714039,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 159.49636805551262,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 185.5986111108226,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 246.59153993054906,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 270.81178846147964,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 202.38524257810653,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 180.90086378200783,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 220.77036979164845,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 183.16770833333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 17.98829166666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 135.22754166666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 502.27183506944453,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 185.42566083333057,
                        "hasRDI": true,
                        "daily": 285.2702474358932,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 55.970729333332564,
                                "hasRDI": true,
                                "daily": 279.8536466666628,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.1310000000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 68.50640799999988,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 44.705701187499145,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 348.01002541662706,
                        "hasRDI": true,
                        "daily": 116.00334180554235,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 309.41572541664976,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 38.59429999997728,
                                "hasRDI": true,
                                "daily": 154.37719999990912,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 129.21210229166667,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 77.40375,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 130.50975249999098,
                        "hasRDI": true,
                        "daily": 261.01950499998196,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 536.9267500000001,
                        "hasRDI": true,
                        "daily": 178.97558333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3341.084749999985,
                        "hasRDI": true,
                        "daily": 139.21186458333273,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 2598.525749999342,
                        "hasRDI": true,
                        "daily": 259.85257499993423,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 530.841416666407,
                        "hasRDI": true,
                        "daily": 126.39081349200167,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4514.197083332345,
                        "hasRDI": true,
                        "daily": 96.04674645387968,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 30.951003749971758,
                        "hasRDI": true,
                        "daily": 171.9500208331764,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 15.99816729166373,
                        "hasRDI": true,
                        "daily": 145.43788446967028,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2402.2971249998272,
                        "hasRDI": true,
                        "daily": 343.1853035714039,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1435.4673124996136,
                        "hasRDI": true,
                        "daily": 159.49636805551262,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 167.03874999974033,
                        "hasRDI": true,
                        "daily": 185.5986111108226,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.9590984791665886,
                        "hasRDI": true,
                        "daily": 246.59153993054906,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.520553249999235,
                        "hasRDI": true,
                        "daily": 270.81178846147964,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 32.381638812497044,
                        "hasRDI": true,
                        "daily": 202.38524257810653,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.351711229166102,
                        "hasRDI": true,
                        "daily": 180.90086378200783,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 883.0814791665938,
                        "hasRDI": true,
                        "daily": 220.77036979164845,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 747.0814791665938,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 80,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 4.396025,
                        "hasRDI": true,
                        "daily": 183.16770833333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.6982437500000005,
                        "hasRDI": true,
                        "daily": 17.98829166666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 20.28413125,
                        "hasRDI": true,
                        "daily": 135.22754166666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 602.7262020833334,
                        "hasRDI": true,
                        "daily": 502.27183506944453,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1599.295408333228,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "bread"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/62b03234004c2ad5d292e68e05f393d4?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0d3cb939d855d5745a232dd42b15e940",
                "label": "Cherry Balsamic Cheesecake Bars",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d01/d0135cf38e1ac35f7a1a7071a4fecffa.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6649d8a983fc62765987151c66978e61d20f56c5405e9516350edeebdb88d092",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d01/d0135cf38e1ac35f7a1a7071a4fecffa-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=31431a95c49d5577e5365359fdac967d521a8c2a53b2bbe10386b84ffda4df08",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d01/d0135cf38e1ac35f7a1a7071a4fecffa-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4597e3e7422d2a4b8f038599a1b4e2b2a74d8a04a9a147f8d3ef6d637fc82b75",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d01/d0135cf38e1ac35f7a1a7071a4fecffa.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6649d8a983fc62765987151c66978e61d20f56c5405e9516350edeebdb88d092",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d01/d0135cf38e1ac35f7a1a7071a4fecffa-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cbf4bd40961ef3523e760be3943d05059b89e87862496e677e56b3ab38c4f4c5",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Honest Cooking",
                "url": "http://honestcooking.com/cherry-balsamic-cheesecake-bars/",
                "shareAs": "http://www.edamam.com/recipe/cherry-balsamic-cheesecake-bars-0d3cb939d855d5745a232dd42b15e940/cheesecake",
                "yield": 6,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "One pre-made graham-cracker crust (shh, i won’t tell)",
                    "Or",
                    "7-8 graham crackers, broken into 1″ pieces",
                    "6 tablespoons butter, melted",
                    "3 tablespoons brown sugar",
                    "1 tablespoon flour",
                    "Pinch of salt",
                    "16oz cream cheese, softened to room temperature",
                    "⅔ cup white sugar",
                    "2 eggs",
                    "3 tablespoons heavy cream",
                    "1 teaspoon lemon juice",
                    "1 teaspoon vanilla extract",
                    "1 cup roughly diced fresh cherries",
                    "For the balsamic glaze:",
                    "½ cup balsamic vinegar"
                ],
                "ingredients": [
                    {
                        "text": "One pre-made graham-cracker crust (shh, i won’t tell)",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "graham-cracker crust",
                        "weight": 183,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_b8vrgr0brtdwj0b3m6qo0a2ychpk",
                        "image": "https://www.edamam.com/food-img/50b/50b797ae3aebfd0e60bf592ca2cec80e.jpg"
                    },
                    {
                        "text": "7-8 graham crackers, broken into 1″ pieces",
                        "quantity": 7.5,
                        "measure": "<unit>",
                        "food": "graham crackers",
                        "weight": 105,
                        "foodCategory": "pastries",
                        "foodId": "food_aipm8mobslonobbbkxmhbb8a4iox",
                        "image": "https://www.edamam.com/food-img/448/448b5544a8ac969e88525f6bc44f5c12.jpg"
                    },
                    {
                        "text": "6 tablespoons butter, melted",
                        "quantity": 6,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 85.19999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3 tablespoons brown sugar",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "brown sugar",
                        "weight": 27.187499999540343,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1 tablespoon flour",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "flour",
                        "weight": 7.8124999998679145,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "Pinch of salt",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "salt",
                        "weight": 0.380208333815447,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "16oz cream cheese, softened to room temperature",
                        "quantity": 16,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "⅔ cup white sugar",
                        "quantity": 0.6666666666666666,
                        "measure": "cup",
                        "food": "white sugar",
                        "weight": 133.33333333333331,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "2 eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 86,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "3 tablespoons heavy cream",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "heavy cream",
                        "weight": 45,
                        "foodCategory": "Dairy",
                        "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
                        "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                    },
                    {
                        "text": "1 teaspoon lemon juice",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "lemon juice",
                        "weight": 5.083333333591166,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    },
                    {
                        "text": "1 teaspoon vanilla extract",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "1 cup roughly diced fresh cherries",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "cherries",
                        "weight": 154,
                        "foodCategory": "fruit",
                        "foodId": "food_bv3hog1bd5qa4oafi7lb3bjz8i92",
                        "image": "https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg"
                    },
                    {
                        "text": "½ cup balsamic vinegar",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "balsamic vinegar",
                        "weight": 127.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
                        "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
                    }
                ],
                "calories": 4712.951628331162,
                "totalCO2Emissions": 15984.93840070201,
                "co2EmissionsClass": "G",
                "totalWeight": 1417.2892450001482,
                "totalTime": 70,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "teatime"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4712.951628331162,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 306.46985777999936,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 158.6280414483332,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 5.955460729,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 101.23688204199989,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 20.4559682009995,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 439.40077715679945,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 428.8935896568022,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.507187499997208,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 276.85532852822695,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 159.4385416662208,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 60.20640492165341,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1012.0782937,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3158.0287919869315,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 752.5866822330632,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 177.3057403832832,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1709.257595066218,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.626857127830316,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.151060808332883,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1177.280502566526,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2307.0024995999997,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 13.017250000099782,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8195932450999033,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.3565212843333194,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.483651390031412,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.8148724355332053,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 421.68910496667934,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 149.7991049666793,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 159.78000000000003,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.9801432140000004,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.44,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.285646882000307,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 75.3538772699996,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 587.666130370217,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 235.64758141655813,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 471.4920888923067,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 793.140207241666,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 146.46692571893314,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 42.02874999998883,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 120.41280984330682,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 337.35943123333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 131.5845329994555,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 75.25866822330632,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 42.21565247221028,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 36.36718287374932,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 70.14920626572399,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 65.00964371211711,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 168.18292893807515,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 256.33361106666666,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 14.46361111122198,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 68.2994370916586,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 181.27086802563994,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 71.77282118769632,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 62.682495041015784,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 105.42227624166985,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 82.50596725000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.266666666666666,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 81.90431254666872,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 62.79489772499967,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 306.46985777999936,
                        "hasRDI": true,
                        "daily": 471.4920888923067,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 158.6280414483332,
                                "hasRDI": true,
                                "daily": 793.140207241666,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 5.955460729,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 101.23688204199989,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 20.4559682009995,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 439.40077715679945,
                        "hasRDI": true,
                        "daily": 146.46692571893314,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 428.8935896568022,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 10.507187499997208,
                                "hasRDI": true,
                                "daily": 42.02874999998883,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 276.85532852822695,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 159.4385416662208,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 60.20640492165341,
                        "hasRDI": true,
                        "daily": 120.41280984330682,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1012.0782937,
                        "hasRDI": true,
                        "daily": 337.35943123333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3158.0287919869315,
                        "hasRDI": true,
                        "daily": 131.5845329994555,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 752.5866822330632,
                        "hasRDI": true,
                        "daily": 75.25866822330632,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 177.3057403832832,
                        "hasRDI": true,
                        "daily": 42.21565247221028,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1709.257595066218,
                        "hasRDI": true,
                        "daily": 36.36718287374932,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.626857127830316,
                        "hasRDI": true,
                        "daily": 70.14920626572399,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.151060808332883,
                        "hasRDI": true,
                        "daily": 65.00964371211711,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1177.280502566526,
                        "hasRDI": true,
                        "daily": 168.18292893807515,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2307.0024995999997,
                        "hasRDI": true,
                        "daily": 256.33361106666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 13.017250000099782,
                        "hasRDI": true,
                        "daily": 14.46361111122198,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8195932450999033,
                        "hasRDI": true,
                        "daily": 68.2994370916586,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.3565212843333194,
                        "hasRDI": true,
                        "daily": 181.27086802563994,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.483651390031412,
                        "hasRDI": true,
                        "daily": 71.77282118769632,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.8148724355332053,
                        "hasRDI": true,
                        "daily": 62.682495041015784,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 421.68910496667934,
                        "hasRDI": true,
                        "daily": 105.42227624166985,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 149.7991049666793,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 159.78000000000003,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.9801432140000004,
                        "hasRDI": true,
                        "daily": 82.50596725000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.44,
                        "hasRDI": true,
                        "daily": 16.266666666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 12.285646882000307,
                        "hasRDI": true,
                        "daily": 81.90431254666872,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 75.3538772699996,
                        "hasRDI": true,
                        "daily": 62.79489772499967,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 587.666130370217,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/0d3cb939d855d5745a232dd42b15e940?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7b580ff63f3c11e43d72771ee7f78134",
                "label": "Cheesecake Filled Cupcakes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bf9/bf916ea92f7656f3dd4407c223403782.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e718cec273b80b899c55c703c2085568ece36a40e99d5dbfc9a94e71c3b3bc87",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf9/bf916ea92f7656f3dd4407c223403782-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c9bc5198edf2a9d305aa70415d89de2520e1d8fba54f7c6d296ca5641218ad65",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf9/bf916ea92f7656f3dd4407c223403782-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b951ee5f8dd8d8079b3b510a414a6cb5793f3f10f64d3cd2fda2af98a3870630",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf9/bf916ea92f7656f3dd4407c223403782.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e718cec273b80b899c55c703c2085568ece36a40e99d5dbfc9a94e71c3b3bc87",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BigOven",
                "url": "http://www.bigoven.com/recipe/Cheesecake-Filled-Cupcakes/193599",
                "shareAs": "http://www.edamam.com/recipe/cheesecake-filled-cupcakes-7b580ff63f3c11e43d72771ee7f78134/cheesecake",
                "yield": 24,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 1/2 cup flour",
                    "1 cup sugar, granulated",
                    "1/4 cup unsweetened cocoa",
                    "1 tsp baking soda",
                    "1/2 tsp salt",
                    "1 cup water",
                    "1/3 cup cooking oil (canola or veg)",
                    "1 tbsp vinegar",
                    "1 tbsp vanilla",
                    "Cheesecake filling",
                    "8 ounces cream cheese",
                    "1/3 cup sugar, granulated",
                    "1 whole egg",
                    "1/8 tsp salt",
                    "6 ounces chocolate chips"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 cup flour",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "flour",
                        "weight": 187.5,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "1 cup sugar, granulated",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "sugar, granulated",
                        "weight": 200,
                        "foodCategory": null,
                        "foodId": "food_bqpiaa5afrutf6b0ge7coa3jjrel",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/4 cup unsweetened cocoa",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "cocoa",
                        "weight": 21.5,
                        "foodCategory": "chocolate",
                        "foodId": "food_afcmkjjaqwjkezbfz7htdb7mpkwz",
                        "image": "https://www.edamam.com/food-img/89a/89af89595db3cf2c3007f2b064c5fef6.jpg"
                    },
                    {
                        "text": "1 tsp baking soda",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "baking soda",
                        "weight": 4.6,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
                        "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
                    },
                    {
                        "text": "1/2 tsp salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 cup water",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "water",
                        "weight": 236.5882365,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1/3 cup cooking oil (canola or veg)",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "cooking oil",
                        "weight": 72.66666666666666,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    },
                    {
                        "text": "1 tbsp vinegar",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "vinegar",
                        "weight": 14.9,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bxdqsxkax2vgmpbv8e4ygb6zfnkn",
                        "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
                    },
                    {
                        "text": "1 tbsp vanilla",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "vanilla",
                        "weight": 13,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "Cheesecake filling",
                        "quantity": 0,
                        "measure": null,
                        "food": "Cheesecake",
                        "weight": 0,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_bg8aehmb16xexyakhejbha9r1nei",
                        "image": "https://www.edamam.com/food-img/999/999121f0a2563dada95daa26c15db531.jpg"
                    },
                    {
                        "text": "8 ounces cream cheese",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1/3 cup sugar, granulated",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "sugar, granulated",
                        "weight": 66.66666666666666,
                        "foodCategory": null,
                        "foodId": "food_bqpiaa5afrutf6b0ge7coa3jjrel",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 whole egg",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1/8 tsp salt",
                        "quantity": 0.125,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 0.75,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "6 ounces chocolate chips",
                        "quantity": 6,
                        "measure": "ounce",
                        "food": "chocolate chips",
                        "weight": 170.09713875,
                        "foodCategory": "chocolate",
                        "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
                        "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
                    }
                ],
                "calories": 4155.179617358333,
                "totalCO2Emissions": 16642.79302018203,
                "co2EmissionsClass": "E",
                "totalWeight": 1259.254922880636,
                "totalTime": 60,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "snack"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4155.179617358333,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 199.36738477416668,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 79.19805615541668,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 3.2698674331333333,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 68.9263150835,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 25.46671187133333,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 552.9968189836667,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 535.3866962374167,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 17.61012274625,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 383.65714160808335,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 372.4440450520833,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 51.03090860975,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 414.5387176625,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2923.8606387301697,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 509.5839011930194,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 178.20093930797302,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 911.1624998771176,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 8.436226040139433,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.533386444613969,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 689.49791795,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 881.63752704,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.0205828325,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.31256312254999996,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.9079728921666668,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.10633452835,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.3113558636,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 96.25165665,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 96.25165665,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.881651607,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.8600000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.252613857666665,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 57.803053218333325,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 434.951012046678,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 207.75898086791665,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 306.719053498718,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 395.9902807770834,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 184.33227299455555,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 70.440490985,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 102.06181721950001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 138.17957255416667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 121.82752661375707,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 50.95839011930194,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 42.42879507332691,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 19.386436167598248,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 46.86792244521907,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 41.21260404194517,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 98.49970256428571,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 97.95972522666666,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.133980925,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 26.046926879166666,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 69.84406862820514,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 19.4145908021875,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 23.950451046153848,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 24.0629141625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 36.735483625,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.733333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 101.68409238444444,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 48.169211015277774,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 199.36738477416668,
                        "hasRDI": true,
                        "daily": 306.719053498718,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 79.19805615541668,
                                "hasRDI": true,
                                "daily": 395.9902807770834,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 3.2698674331333333,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 68.9263150835,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 25.46671187133333,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 552.9968189836667,
                        "hasRDI": true,
                        "daily": 184.33227299455555,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 535.3866962374167,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 17.61012274625,
                                "hasRDI": true,
                                "daily": 70.440490985,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 383.65714160808335,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 372.4440450520833,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 51.03090860975,
                        "hasRDI": true,
                        "daily": 102.06181721950001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 414.5387176625,
                        "hasRDI": true,
                        "daily": 138.17957255416667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2923.8606387301697,
                        "hasRDI": true,
                        "daily": 121.82752661375707,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 509.5839011930194,
                        "hasRDI": true,
                        "daily": 50.95839011930194,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 178.20093930797302,
                        "hasRDI": true,
                        "daily": 42.42879507332691,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 911.1624998771176,
                        "hasRDI": true,
                        "daily": 19.386436167598248,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 8.436226040139433,
                        "hasRDI": true,
                        "daily": 46.86792244521907,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.533386444613969,
                        "hasRDI": true,
                        "daily": 41.21260404194517,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 689.49791795,
                        "hasRDI": true,
                        "daily": 98.49970256428571,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 881.63752704,
                        "hasRDI": true,
                        "daily": 97.95972522666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.0205828325,
                        "hasRDI": true,
                        "daily": 1.133980925,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.31256312254999996,
                        "hasRDI": true,
                        "daily": 26.046926879166666,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.9079728921666668,
                        "hasRDI": true,
                        "daily": 69.84406862820514,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.10633452835,
                        "hasRDI": true,
                        "daily": 19.4145908021875,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.3113558636,
                        "hasRDI": true,
                        "daily": 23.950451046153848,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 96.25165665,
                        "hasRDI": true,
                        "daily": 24.0629141625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 96.25165665,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.881651607,
                        "hasRDI": true,
                        "daily": 36.735483625,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.8600000000000001,
                        "hasRDI": true,
                        "daily": 5.733333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 15.252613857666665,
                        "hasRDI": true,
                        "daily": 101.68409238444444,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 57.803053218333325,
                        "hasRDI": true,
                        "daily": 48.169211015277774,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 434.951012046678,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/7b580ff63f3c11e43d72771ee7f78134?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c5b06f71b2c424bc28c94859cdc8b110",
                "label": "Savory Tex-Mex Cheesecake Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bd6/bd6f09cc699781abd5bf0bd63a424f80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bea753c5436d751c4ef445800e4b6800ac0e79694007627109d267780949cc6a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bd6/bd6f09cc699781abd5bf0bd63a424f80-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0173934d181f58f233e8ace4e59bbacb8cf279c9536762787185116f069dc925",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bd6/bd6f09cc699781abd5bf0bd63a424f80-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08bc682d2397659ac8b9f4a147620481106bf0fbc4e41c3a382ba7df1ca25728",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bd6/bd6f09cc699781abd5bf0bd63a424f80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bea753c5436d751c4ef445800e4b6800ac0e79694007627109d267780949cc6a",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bd6/bd6f09cc699781abd5bf0bd63a424f80-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b284924fd96f92b27c23a9226d67eda8d8d339a517ac0d1fb269fcf0b7f50dae",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "thebudgetdiet.com",
                "url": "http://www.thebudgetdiet.com/a-little-help-for-the-holidays-from-kraft-2",
                "shareAs": "http://www.edamam.com/recipe/savory-tex-mex-cheesecake-recipe-c5b06f71b2c424bc28c94859cdc8b110/cheesecake",
                "yield": 6,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "* 2, 8 oz package cream cheese, softened",
                    "* 2 egg",
                    "* 8 oz mexican blend cheese, shredded",
                    "* 1, 4 oz can chopped green chile",
                    "* 1, 4 oz can chopped jalapeno",
                    "* 1/2 cup sour cream",
                    "* garnish with: shredded lettuce, diced tomato, sliced black olive,"
                ],
                "ingredients": [
                    {
                        "text": "* 2, 8 oz package cream cheese, softened",
                        "quantity": 2,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 56.69904625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "* 2 egg",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 86,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "* 8 oz mexican blend cheese, shredded",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "mexican blend cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
                        "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
                    },
                    {
                        "text": "* 1, 4 oz can chopped green chile",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "green chile",
                        "weight": 45,
                        "foodCategory": "vegetables",
                        "foodId": "food_bv2gevdbd1orbiarnp1vfaez1r85",
                        "image": "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg"
                    },
                    {
                        "text": "* 1, 4 oz can chopped jalapeno",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "jalapeno",
                        "weight": 14,
                        "foodCategory": "vegetables",
                        "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                        "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
                    },
                    {
                        "text": "* 1/2 cup sour cream",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "sour cream",
                        "weight": 115,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                    },
                    {
                        "text": "* garnish with: shredded lettuce, diced tomato, sliced black olive,",
                        "quantity": 0,
                        "measure": null,
                        "food": "lettuce",
                        "weight": 0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bf5fxtkbc9alwoajuvsi7amonr5w",
                        "image": "https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg"
                    },
                    {
                        "text": "* garnish with: shredded lettuce, diced tomato, sliced black olive,",
                        "quantity": 0,
                        "measure": null,
                        "food": "tomato",
                        "weight": 0,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "* garnish with: shredded lettuce, diced tomato, sliced black olive,",
                        "quantity": 0,
                        "measure": null,
                        "food": "black olive",
                        "weight": 0,
                        "foodCategory": "canned fruit",
                        "foodId": "food_atlv2r9b29ejzeb1o3wgkaxqajcb",
                        "image": "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg"
                    }
                ],
                "calories": 1442.084012275,
                "totalCO2Emissions": 10040.99612225,
                "co2EmissionsClass": "F",
                "totalWeight": 543.49523125,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1442.084012275,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 122.936447295,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 62.29652312750002,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.6114588411250002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 31.335854780375005,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.4259949229,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 14.535322393500003,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 13.468322393500001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.0670000000000002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 9.243384139000002,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 71.45349481937501,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 660.4924124625,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1716.0278481750006,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1723.6749340125002,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 96.97196041250001,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 717.7694983000001,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 3.5609664423750003,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 8.75356039975,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1336.0552697875005,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 883.56842435,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 126.595,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.1687039031875,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.4881396746750002,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.0882937829875001,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.54720713875,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 96.0364182125,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 96.0364182125,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.9212309772500005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.853980925,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.20630226025,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 17.868584596250003,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 323.57615325250003,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 72.10420061375,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 189.13299583846154,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 311.4826156375001,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 4.845107464500001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.268000000000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 142.90698963875002,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 220.16413748750003,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 71.50116034062503,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 172.36749340125002,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 23.088562002976193,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 15.271691453191492,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 19.783146902083335,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 79.57782181590909,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 190.8650385410715,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 98.17426937222223,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 140.6611111111111,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 14.058658598958335,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 114.47228266730771,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 6.801836143671876,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 42.092856826923075,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 24.009104553125,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 163.38462405208335,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 19.026539500000002,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 21.375348401666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 14.89048716354167,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 122.936447295,
                        "hasRDI": true,
                        "daily": 189.13299583846154,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 62.29652312750002,
                                "hasRDI": true,
                                "daily": 311.4826156375001,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.6114588411250002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 31.335854780375005,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.4259949229,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 14.535322393500003,
                        "hasRDI": true,
                        "daily": 4.845107464500001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 13.468322393500001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.0670000000000002,
                                "hasRDI": true,
                                "daily": 4.268000000000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 9.243384139000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 71.45349481937501,
                        "hasRDI": true,
                        "daily": 142.90698963875002,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 660.4924124625,
                        "hasRDI": true,
                        "daily": 220.16413748750003,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1716.0278481750006,
                        "hasRDI": true,
                        "daily": 71.50116034062503,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1723.6749340125002,
                        "hasRDI": true,
                        "daily": 172.36749340125002,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 96.97196041250001,
                        "hasRDI": true,
                        "daily": 23.088562002976193,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 717.7694983000001,
                        "hasRDI": true,
                        "daily": 15.271691453191492,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.5609664423750003,
                        "hasRDI": true,
                        "daily": 19.783146902083335,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 8.75356039975,
                        "hasRDI": true,
                        "daily": 79.57782181590909,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1336.0552697875005,
                        "hasRDI": true,
                        "daily": 190.8650385410715,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 883.56842435,
                        "hasRDI": true,
                        "daily": 98.17426937222223,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 126.595,
                        "hasRDI": true,
                        "daily": 140.6611111111111,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.1687039031875,
                        "hasRDI": true,
                        "daily": 14.058658598958335,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.4881396746750002,
                        "hasRDI": true,
                        "daily": 114.47228266730771,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.0882937829875001,
                        "hasRDI": true,
                        "daily": 6.801836143671876,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.54720713875,
                        "hasRDI": true,
                        "daily": 42.092856826923075,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 96.0364182125,
                        "hasRDI": true,
                        "daily": 24.009104553125,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 96.0364182125,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.9212309772500005,
                        "hasRDI": true,
                        "daily": 163.38462405208335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.853980925,
                        "hasRDI": true,
                        "daily": 19.026539500000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.20630226025,
                        "hasRDI": true,
                        "daily": 21.375348401666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 17.868584596250003,
                        "hasRDI": true,
                        "daily": 14.89048716354167,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 323.57615325250003,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/c5b06f71b2c424bc28c94859cdc8b110?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c3cdbc2e2368103f09372c154a55d3c9",
                "label": "Mini Ginger-Almond Cheesecakes recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/76c/76c7bb77d756177b364b1c606102791e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11da311125f491d7db04c8713f0037ab62df4ed9552c3943031bb2932eb2dc53",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76c/76c7bb77d756177b364b1c606102791e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ac54efc02ac721af30f32ab929de92494ba7be9f9396dd09b7092f6efea07501",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76c/76c7bb77d756177b364b1c606102791e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=85d1841ca2f532860045154fed3d973975e69a0546d3fe8614a95305b89bae90",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76c/76c7bb77d756177b364b1c606102791e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11da311125f491d7db04c8713f0037ab62df4ed9552c3943031bb2932eb2dc53",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/340694/mini-ginger-almond-cheesecakes",
                "shareAs": "http://www.edamam.com/recipe/mini-ginger-almond-cheesecakes-recipes-c3cdbc2e2368103f09372c154a55d3c9/cheesecake",
                "yield": 10,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 1/2 cups gingersnap crumbs (from about 30 cookies)",
                    "3 tablespoons granulated sugar",
                    "1/4 teaspoon coarse salt",
                    "5 tablespoons unsalted butter",
                    "1 package (8 ounces) cream cheese, room temperature",
                    "1/2 cup confectioners' sugar",
                    "1/2 teaspoon pure almond extract",
                    "3/4 cup cold heavy cream",
                    "2 tablespoons sliced blanched almonds (optional), toasted"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 cups gingersnap crumbs (from about 30 cookies)",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "cookies",
                        "weight": 300,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_b8hkw37asceztnbj3sfiuajjet67",
                        "image": "https://www.edamam.com/food-img/376/376e4b71a4c4f3a57b554dce6652cca2.jpg"
                    },
                    {
                        "text": "3 tablespoons granulated sugar",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "granulated sugar",
                        "weight": 37.4999999993661,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/4 teaspoon coarse salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "coarse salt",
                        "weight": 1.2135416667282188,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "5 tablespoons unsalted butter",
                        "quantity": 5,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 71,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1 package (8 ounces) cream cheese, room temperature",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1/2 cup confectioners' sugar",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "confectioners' sugar",
                        "weight": 60,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "1/2 teaspoon pure almond extract",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "almond extract",
                        "weight": 2.1,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_biu6i4oaew6s2ra1wpmjeba8kme2",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "3/4 cup cold heavy cream",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "heavy cream",
                        "weight": 178.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
                        "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                    },
                    {
                        "text": "2 tablespoons sliced blanched almonds (optional), toasted",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "blanched almonds",
                        "weight": 18.2,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a10bnd0bmm2on6alob9j5btgu42u",
                        "image": "https://www.edamam.com/food-img/a2b/a2b45160204372c7fc68667dd5bf29a3.jpg"
                    }
                ],
                "calories": 3865.709647497547,
                "totalCO2Emissions": 12264.821238423077,
                "co2EmissionsClass": "F",
                "totalWeight": 894.825143183367,
                "totalTime": 60,
                "cuisineType": [
                    "british"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3865.709647497547,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 294.79364763999996,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 165.74193936999995,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 4.870373364500001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 83.86405008349999,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 24.173017538000003,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 293.27914941136606,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 291.47734941136605,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.8018,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 110.99459655536737,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 96.10499999936737,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 40.616925377499996,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 793.4191468500001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2079.202796292326,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 513.175249414154,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 248.36194623184002,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1274.0402808547076,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 8.538811365506884,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.999609883183937,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 750.9099179500001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2334.8072498,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.671,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.67840612255,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.5622732254998797,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 5.07636952835,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.46508686360000007,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 179.59965665,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 77.59965665000001,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 60,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.145251607,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.8560000000000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 9.571447191,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 15.444719885000001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 252.96367122636792,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 193.28548237487735,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 453.52868867692297,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 828.7096968499998,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 97.75971647045534,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 7.2072,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 81.23385075499999,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 264.47304895,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 86.6334498455136,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 51.3175249414154,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 59.133796721866666,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 27.107240018185266,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 47.43784091948269,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 45.450998938035795,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 107.27284542142858,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 259.42302775555555,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.8566666666666667,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 56.533843545833335,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 120.17486349999075,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 31.7273095521875,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 35.77591258461539,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 44.8999141625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 47.718816958333335,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 19.040000000000003,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 63.809647940000005,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 12.870599904166669,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 294.79364763999996,
                        "hasRDI": true,
                        "daily": 453.52868867692297,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 165.74193936999995,
                                "hasRDI": true,
                                "daily": 828.7096968499998,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 4.870373364500001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 83.86405008349999,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 24.173017538000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 293.27914941136606,
                        "hasRDI": true,
                        "daily": 97.75971647045534,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 291.47734941136605,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.8018,
                                "hasRDI": true,
                                "daily": 7.2072,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 110.99459655536737,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 96.10499999936737,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 40.616925377499996,
                        "hasRDI": true,
                        "daily": 81.23385075499999,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 793.4191468500001,
                        "hasRDI": true,
                        "daily": 264.47304895,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2079.202796292326,
                        "hasRDI": true,
                        "daily": 86.6334498455136,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 513.175249414154,
                        "hasRDI": true,
                        "daily": 51.3175249414154,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 248.36194623184002,
                        "hasRDI": true,
                        "daily": 59.133796721866666,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1274.0402808547076,
                        "hasRDI": true,
                        "daily": 27.107240018185266,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 8.538811365506884,
                        "hasRDI": true,
                        "daily": 47.43784091948269,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.999609883183937,
                        "hasRDI": true,
                        "daily": 45.450998938035795,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 750.9099179500001,
                        "hasRDI": true,
                        "daily": 107.27284542142858,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2334.8072498,
                        "hasRDI": true,
                        "daily": 259.42302775555555,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.671,
                        "hasRDI": true,
                        "daily": 1.8566666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.67840612255,
                        "hasRDI": true,
                        "daily": 56.533843545833335,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.5622732254998797,
                        "hasRDI": true,
                        "daily": 120.17486349999075,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 5.07636952835,
                        "hasRDI": true,
                        "daily": 31.7273095521875,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.46508686360000007,
                        "hasRDI": true,
                        "daily": 35.77591258461539,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 179.59965665,
                        "hasRDI": true,
                        "daily": 44.8999141625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 77.59965665000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 60,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.145251607,
                        "hasRDI": true,
                        "daily": 47.718816958333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.8560000000000003,
                        "hasRDI": true,
                        "daily": 19.040000000000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 9.571447191,
                        "hasRDI": true,
                        "daily": 63.809647940000005,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 15.444719885000001,
                        "hasRDI": true,
                        "daily": 12.870599904166669,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 252.96367122636792,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "mini cheesecakes",
                    "mini cheesecake",
                    "almond baked goods",
                    "almond butter cheesecake",
                    "ginger cheesecake",
                    "mini cheesecake flavors",
                    "almond extract cheesecake",
                    "almond cheesecake no bake",
                    "cheesecake ginger",
                    "ginger baked goods",
                    "martha stewart cupcakes",
                    "martha stewart no bake cheesecake",
                    "martha stewart cheesecake",
                    "mini cheesecakes martha stewart",
                    "ginger nut cheesecake",
                    "no bake cheesecake cupcakes",
                    "cheesecake savory",
                    "ginger cheesecake cream cheese",
                    "mini almond cheesecake",
                    "mini cheesecake with gingersnap"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/c3cdbc2e2368103f09372c154a55d3c9?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f3d4900474589c9bcae8fbf253a77bea",
                "label": "Philadelphia Classic Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/535/53533df26938f0d5a1ecdfdf5577587a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c44c705ee1b343cd2bd21c191565599d7968edd19525df7673f62fc51bd9448a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/535/53533df26938f0d5a1ecdfdf5577587a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f62cd46777b7b3d583e9a0d564a52584b100b44dff4a36127f9c95932d42dfc",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/535/53533df26938f0d5a1ecdfdf5577587a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8d83bc7785c14094ab1affa1b491494c0238c7177ec6f9dd9f442266c73025b8",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/535/53533df26938f0d5a1ecdfdf5577587a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c44c705ee1b343cd2bd21c191565599d7968edd19525df7673f62fc51bd9448a",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/philadelphia-classic-cheesecake",
                "shareAs": "http://www.edamam.com/recipe/philadelphia-classic-cheesecake-f3d4900474589c9bcae8fbf253a77bea/cheesecake",
                "yield": 16,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 1/2 cups graham cracker crumbs",
                    "3 tablespoons plus 1 cup sugar, divided",
                    "1/3 cup butter, melted",
                    "4 packages (8 oz. each) Philadelphia Cream Cheese, softened",
                    "1 teaspoon vanilla",
                    "4 eggs"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 cups graham cracker crumbs",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "cracker crumbs",
                        "weight": 78,
                        "foodCategory": "crackers",
                        "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
                        "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
                    },
                    {
                        "text": "3 tablespoons plus 1 cup sugar, divided",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 37.4999999993661,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "3 tablespoons plus 1 cup sugar, divided",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 200,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/3 cup butter, melted",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "butter",
                        "weight": 75.66666666666666,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "4 packages (8 oz. each) Philadelphia Cream Cheese, softened",
                        "quantity": 32,
                        "measure": "ounce",
                        "food": "Cream Cheese",
                        "weight": 907.18474,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1 teaspoon vanilla",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "vanilla",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "4 eggs",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 172,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    }
                ],
                "calories": 5292.657589997547,
                "totalCO2Emissions": 25352.121591197974,
                "co2EmissionsClass": "F",
                "totalWeight": 1474.5514066660328,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5292.657589997547,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 410.38893722666666,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 231.1838041466667,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 11.521821458,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 109.94078033400001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 29.207268818666666,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 337.2035976473661,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 335.4095976473661,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.7939999999999998,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 278.7265462233674,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 237.02499999936737,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 83.28874817666667,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1718.7799207333333,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3670.156416933328,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1090.8861977999936,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 118.34395993333334,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1556.0098567999873,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.290226547333017,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.2333936999999375,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1523.0996718,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3586.8889992,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6061778235333333,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.3030865686665463,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.397168113399999,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.8529254544,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 281.7566266,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 170.9966266,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 65.52,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.655239761333333,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.44,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.726655430666668,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 78.91754620666667,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 625.2070732399999,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 264.63287949987733,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 631.3675957333334,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1155.9190207333336,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 112.40119921578871,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 7.175999999999999,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 166.57749635333334,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 572.9266402444445,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 152.92318403888865,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 109.08861977999936,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 28.177133317460317,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 33.106592697872074,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 40.50125859629454,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 65.75812454545398,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 217.58566739999998,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 398.5432221333333,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 50.51481862777777,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 254.08358220511894,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 27.482300708749996,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 65.60965033846153,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 70.43915665,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 152.30165672222222,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 22.933333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 91.51103620444445,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 65.7646218388889,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 410.38893722666666,
                        "hasRDI": true,
                        "daily": 631.3675957333334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 231.1838041466667,
                                "hasRDI": true,
                                "daily": 1155.9190207333336,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 11.521821458,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 109.94078033400001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 29.207268818666666,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 337.2035976473661,
                        "hasRDI": true,
                        "daily": 112.40119921578871,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 335.4095976473661,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.7939999999999998,
                                "hasRDI": true,
                                "daily": 7.175999999999999,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 278.7265462233674,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 237.02499999936737,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 83.28874817666667,
                        "hasRDI": true,
                        "daily": 166.57749635333334,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1718.7799207333333,
                        "hasRDI": true,
                        "daily": 572.9266402444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3670.156416933328,
                        "hasRDI": true,
                        "daily": 152.92318403888865,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1090.8861977999936,
                        "hasRDI": true,
                        "daily": 109.08861977999936,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 118.34395993333334,
                        "hasRDI": true,
                        "daily": 28.177133317460317,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1556.0098567999873,
                        "hasRDI": true,
                        "daily": 33.106592697872074,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.290226547333017,
                        "hasRDI": true,
                        "daily": 40.50125859629454,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.2333936999999375,
                        "hasRDI": true,
                        "daily": 65.75812454545398,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1523.0996718,
                        "hasRDI": true,
                        "daily": 217.58566739999998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3586.8889992,
                        "hasRDI": true,
                        "daily": 398.5432221333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6061778235333333,
                        "hasRDI": true,
                        "daily": 50.51481862777777,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.3030865686665463,
                        "hasRDI": true,
                        "daily": 254.08358220511894,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 4.397168113399999,
                        "hasRDI": true,
                        "daily": 27.482300708749996,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.8529254544,
                        "hasRDI": true,
                        "daily": 65.60965033846153,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 281.7566266,
                        "hasRDI": true,
                        "daily": 70.43915665,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 170.9966266,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 65.52,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.655239761333333,
                        "hasRDI": true,
                        "daily": 152.30165672222222,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3.44,
                        "hasRDI": true,
                        "daily": 22.933333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.726655430666668,
                        "hasRDI": true,
                        "daily": 91.51103620444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 78.91754620666667,
                        "hasRDI": true,
                        "daily": 65.7646218388889,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 625.2070732399999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Cheesecake",
                    "Dessert",
                    "Cake",
                    "Bake"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/f3d4900474589c9bcae8fbf253a77bea?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cf7b3d29f09bbdc03a1557237d8a5c93",
                "label": "Orange Caramel Cheesecake Crumble recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/43e/43ed9a5f3bda8044a0287e8efd40c073?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=500b5bf2b7f9f55cd837207552aed1d43b5f73f4e80a8d9346e3bf79e49614ab",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/43e/43ed9a5f3bda8044a0287e8efd40c073-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf8e4ca0c6b0854c414910c7609b66fe74946334a8f2422f504dd9138005e2e5",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/43e/43ed9a5f3bda8044a0287e8efd40c073-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d237baf61cd54a36dd0205368b7fadff6cacbb611c4a22aab00d7c1d5af2374c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/43e/43ed9a5f3bda8044a0287e8efd40c073?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAlPlo9CvneaM6hJKJcGXO0jM9qK9SkRDYHQk1zJA0z9AiEA3ZD6tuu1bZheAofC5RVgtuJ8JGmLikXIe17hlFV05%2BUquQUIexAAGgwxODcwMTcxNTA5ODYiDBjWHOoJjmcNdJ2%2BCyqWBZ8vyR%2BBTDrV6wzI1SdHDdpsIvKBxDdOjNak0IPmzDQQZlYr1hh7b2pKxVHI%2BB8vQoSzmUD%2FxXHBi1QFHV3TyJKqlklyyvc54AdOhQVnYdNUe6h3smeEqjBq4VrVUkKJW8r%2Bz9HlhlN%2BedESQzi8PyM%2BZ9MmrbM3IqiD6o3qkEpZ2f0osxwmT4QVfna63QKfDR06n88ICchIJ4HNVUrxyb7tnML0v81jX%2BzqR55oQAEGT6U%2FNz0gt4ADpsPpGF79m8K7NKFJVFcQD9uM%2Fyzv8yjpZmPTYHch2CtINZDpqNwfwzmlQPUCVCecZ7o3Z6L3HwptYq3JGLyKkmdzYmx1Ho5yLz8W6zDGybJlOsu8FMe8SnGHNykCWJgi2WibVGaw7ZHifgcCglX2cpfTdCRuKWbUo9HvYGi1pCVQJvh6yvANcTyU%2FhkxBgKNpDjCtW%2B9UwCUe5TQypy%2BwndcerKofML6JS5wBwjRCdk4oxa41b6hUAwMhxLHf%2F9QJwHX2b6PzSRnm22PU6qe9MKY0IGA8DNWOBGinCuTD7GkZf5LF4T8aFLR8XDF4jLcDr%2Bvp9QZtGKvOB1PzWNTBrBYUQCulZUFYESFFYOxs2lMbm79p0ZmObfsQfMXAgM0e%2BDn8PdfjCgHsthjKfttnAtMYe0lXvP5xp3%2F4sfHN1UGDU6DYMKVZtPNbhpehMvfABmbP2C3WSbgxodh64qTFwqBfxU2qxezqEtp2b3wjw4qVCKVlTCYDYnIQxJN7hGmntW88og2WI5FTrIT06tv6khfcu3t0WjcF2n%2BSvtRkpnIP3C6bBfHd17eMUztHM9EsmvQIFlhc58QDEMTRYK0U9RzJx45TzqXYXdiLfDqzE9FuUHz6xZzXPmlzG6WMNybxa0GOrEBWJcbUhhlV1ZNrBXlxvrUum5a4lHyehm2KlGbQUJLsjJicpRzOcHxs%2BYndj7n1pHeGOQssL5OmcfFV3Xn2OqF%2FtC%2Bbby4mKMJfc7GsADuy6drHZiyUYO3AYdJi0Xy5BZg4veAwK0gSZ0IOc%2FZUpy3QDyZx%2BYvCLLseERRjJkB8ldp4Y%2BAJXJVKgMjOaAOX%2FyIvCuM6n0gqe3czZajUhpk%2BODRK1RXe3GafD6%2FHlvn38JH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240124T181335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDEN365EN%2F20240124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=500b5bf2b7f9f55cd837207552aed1d43b5f73f4e80a8d9346e3bf79e49614ab",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "recipes-plus.com",
                "url": "http://recipes-plus.com/recipe/orange-caramel-cheesecake-crumble-20012",
                "shareAs": "http://www.edamam.com/recipe/orange-caramel-cheesecake-crumble-recipes-cf7b3d29f09bbdc03a1557237d8a5c93/cheesecake",
                "yield": 16,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "7 medium eggs, 3 separated",
                    "12 tbsp butter",
                    "3/4 cup + 1 tsp sugar",
                    "2 1/3 cup flour",
                    "1 heaping tsp baking powder",
                    "5 tbsp milk",
                    "16 oz full-fat cream cheese",
                    "1 cup sour cream",
                    "3 tbsp cornstarch",
                    "1/2 cup caramel sauce, plus more for decoration",
                    "2 oranges, peeled with pith and membrane removed"
                ],
                "ingredients": [
                    {
                        "text": "7 medium eggs, 3 separated",
                        "quantity": 7,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 308,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "12 tbsp butter",
                        "quantity": 12,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 170.39999999999998,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3/4 cup + 1 tsp sugar",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 150,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "3/4 cup + 1 tsp sugar",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "sugar",
                        "weight": 4.2,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "2 1/3 cup flour",
                        "quantity": 2.3333333333333335,
                        "measure": "cup",
                        "food": "flour",
                        "weight": 291.6666666666667,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "1 heaping tsp baking powder",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "baking powder",
                        "weight": 4.6,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
                        "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
                    },
                    {
                        "text": "5 tbsp milk",
                        "quantity": 5,
                        "measure": "tablespoon",
                        "food": "milk",
                        "weight": 75,
                        "foodCategory": "Milk",
                        "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                        "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                    },
                    {
                        "text": "16 oz full-fat cream cheese",
                        "quantity": 16,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1 cup sour cream",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "sour cream",
                        "weight": 230,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                    },
                    {
                        "text": "3 tbsp cornstarch",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "cornstarch",
                        "weight": 23.999999999594234,
                        "foodCategory": "grains",
                        "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                        "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                    },
                    {
                        "text": "1/2 cup caramel sauce, plus more for decoration",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "caramel sauce",
                        "weight": 164.0000000027725,
                        "foodCategory": "sugars",
                        "foodId": "food_bhnrqhbangozxza4114gkb6fihyw",
                        "image": "https://www.edamam.com/food-img/d74/d74059ba08b94985b18ea9eb81712fb1.jpg"
                    },
                    {
                        "text": "2 oranges, peeled with pith and membrane removed",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "oranges",
                        "weight": 262,
                        "foodCategory": "fruit",
                        "foodId": "food_b0bnl8oayiqhs2at63ifxbm6i3o3",
                        "image": "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg"
                    }
                ],
                "calories": 5980.51796167111,
                "totalCO2Emissions": 23684.3053942999,
                "co2EmissionsClass": "F",
                "totalWeight": 2137.4590366690336,
                "totalTime": 75,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5980.51796167111,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 373.76320861333306,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 212.4366020733333,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 7.254870729,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 103.04533016699993,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 20.987340409333232,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 565.7654054918765,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 551.3772054918802,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 14.388199999996349,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 302.5835131135803,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 247.3716000015803,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 110.68269742169916,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 2113.4482937,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2915.6493751427515,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1539.9025989013503,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 212.77197996679314,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2349.755261735151,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.490731606998095,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 9.686828516666425,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2248.959835901029,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3435.080499600527,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 142.27400000001387,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8944862451000001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.272673117666667,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 5.380660390033333,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.1895570605333334,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 365.9586466333888,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 365.9586466333888,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.14448321400499,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.135,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.743274382001388,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 26.927439769999996,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1066.0153599544253,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 299.0258980835555,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 575.0203209435894,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1062.1830103666666,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 188.58846849729218,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 57.5527999999854,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 221.36539484339832,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 704.4827645666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 121.48539063094798,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 153.99025989013504,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 50.65999523018885,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 49.99479280287556,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 58.28184226110053,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 88.06207742424023,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 321.27997655728984,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 381.67561106672525,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 158.08222222223765,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 74.54052042500001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 251.744085974359,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 33.629127437708334,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 91.50438927179488,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 91.48966165834719,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 214.35346725020793,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 47.56666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 84.95516254667592,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 22.439533141666665,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 373.76320861333306,
                        "hasRDI": true,
                        "daily": 575.0203209435894,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 212.4366020733333,
                                "hasRDI": true,
                                "daily": 1062.1830103666666,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 7.254870729,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 103.04533016699993,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 20.987340409333232,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 565.7654054918765,
                        "hasRDI": true,
                        "daily": 188.58846849729218,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 551.3772054918802,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 14.388199999996349,
                                "hasRDI": true,
                                "daily": 57.5527999999854,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 302.5835131135803,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 247.3716000015803,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 110.68269742169916,
                        "hasRDI": true,
                        "daily": 221.36539484339832,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 2113.4482937,
                        "hasRDI": true,
                        "daily": 704.4827645666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2915.6493751427515,
                        "hasRDI": true,
                        "daily": 121.48539063094798,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1539.9025989013503,
                        "hasRDI": true,
                        "daily": 153.99025989013504,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 212.77197996679314,
                        "hasRDI": true,
                        "daily": 50.65999523018885,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2349.755261735151,
                        "hasRDI": true,
                        "daily": 49.99479280287556,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.490731606998095,
                        "hasRDI": true,
                        "daily": 58.28184226110053,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 9.686828516666425,
                        "hasRDI": true,
                        "daily": 88.06207742424023,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2248.959835901029,
                        "hasRDI": true,
                        "daily": 321.27997655728984,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3435.080499600527,
                        "hasRDI": true,
                        "daily": 381.67561106672525,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 142.27400000001387,
                        "hasRDI": true,
                        "daily": 158.08222222223765,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8944862451000001,
                        "hasRDI": true,
                        "daily": 74.54052042500001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.272673117666667,
                        "hasRDI": true,
                        "daily": 251.744085974359,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 5.380660390033333,
                        "hasRDI": true,
                        "daily": 33.629127437708334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.1895570605333334,
                        "hasRDI": true,
                        "daily": 91.50438927179488,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 365.9586466333888,
                        "hasRDI": true,
                        "daily": 91.48966165834719,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 365.9586466333888,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.14448321400499,
                        "hasRDI": true,
                        "daily": 214.35346725020793,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 7.135,
                        "hasRDI": true,
                        "daily": 47.56666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 12.743274382001388,
                        "hasRDI": true,
                        "daily": 84.95516254667592,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 26.927439769999996,
                        "hasRDI": true,
                        "daily": 22.439533141666665,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1066.0153599544253,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "cheesecake",
                    "desserts",
                    "orange",
                    "caramel sauce",
                    "crumble",
                    "caramel cheesecake",
                    "orange crumble",
                    "orange caramel",
                    "cheesecake crumble",
                    "orange caramel cheesecake"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/cf7b3d29f09bbdc03a1557237d8a5c93?type=public&app_id=fe38140b&app_key=9458afc7ed4bbd275c4ca83e4d421e8a"
                }
            }
        }
    ]
}