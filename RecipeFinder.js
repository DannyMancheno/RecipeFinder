// Raw data function

async function searchRecipeAPI(queryString, random){
    return new Promise((resolve)=>{
        var appId = 'fe38140b'
        var apiKey = '9458afc7ed4bbd275c4ca83e4d421e8a'
        var accessPoint = 'https://api.edamam.com/api/recipes/v2';
        var searchURL = `${accessPoint}?type=public&q=${queryString}&app_id=${appId}&app_key=${apiKey}&random=${random}`
    
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, searchURL);
        xhr.setRequestHeader('Content-Type', 'application/json');   
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                resolve(xhr.responseText);
            }
        }
        xhr.send();
    })
}


let temp = {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_84a07bd0f7ef44799660529f2db58ad3",
    "label": "Grilled Cheesecake",
    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0a1/0a16a23d1920e4711c019a5771f4eb24.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIElbw2hsYuuuAPU4DcBCJt8OrsWrmmcInHOOCFESbd87AiEA7jCUcsWTl2Rq1ahHQfi0mtsgvvziq4vwMGjBxnpgIRgqwgUI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDClpT5KnyByrQhggGCqWBUJdD7uwzUOr5%2FuDyDCIhkxFCba92C9Opqybh2b2FvvM9s2Wx6tr1VQHjvAOMcI%2Fgae6ggo22rx10yRp5IO%2Bm3lXtonNCSQAlPfA%2FoPITx4ImrKArwukuT1q1cJZjQ9wV8%2BMusRB3m7uUg5qR7QkRahKogvOIJ%2BS77sWTtZ7C1%2BCh7FWp6hNnKBCzD8g%2F%2BzF1YW3fjkUBcuVVq%2B1dIj%2F58HhinFsN5P9lwG2AE3%2BVkyK68x3OYu3t1tB6z%2FFM6bmBRfAY6nz%2FN2hCFfKvHsvP3DKzyi8p8J2GGKIM5ob5%2BiVdDrhP1wETY2tw5TXfd96kw%2BJJ2hF1NHj41yR1BFxlcTANO5Fs5pxrwg6I5Bd5M1k3M%2F%2FayxxhItu9DtRvDRwUNNkeJY2klwT%2FT%2FMaj9pEOxtb5TPmsGx692%2B38V6TxC%2BFfwIUQ6rmefcGgbrndPmxDDAixYcApFqM2lH26SWjx5vlW%2FhwvWvJ3oJd4bYUoIyFpSYWiXXeFiL0qhj3dTHJMAV%2FUHuRSMCZTDFYhykKcHSABi6Y8C%2FZ5dJ3s2yQnTOKp9O0d6BYGtUf2rajFcv0N1U%2FEuiramUIlNxj28WqzdbH%2BsE7MNib351iVNRyPgbVtPuixjzcjfNbTNcyZWwUucmOdegvykbjfVK1L6Y6ohv1zwUKEIISgghvJsspaY0z%2BzDX%2F3JCzMCfiGAwMfFSrT20eyDJutwbHMan0FXSuGmq2n8E10xfshDuz9aBWW%2FeRd4T9TVMI5iOtkY38%2Bo3YuVZIKv2KSn4EH%2F7%2FZ59K6arkfgv5JilQGVICCpY2e%2FGEsmWJAfz4PBCKfUm9pQjArxsZGb0Ze4mfQ5xBd7h4O8UHuB2cm9bML5OXkBBPtorM9WxddJMNfjpa0GOrEB6EqOjIo7EtfzmECqUSUn87UHxt3C4as4zs%2FzHaDP79vH6GVg6qJiiRREBCPeL%2BxAgYJzKuc6LRS7PYnBh4ZsCmqR97%2Fumeys6orPSNyp0ENXOqKsu8iwIfZPAG38MelCn2hvHmqcJyST9ggEyL%2BqNiHL6fGsyoR7OV8DexhGkZV5y5dZrIt2jPKI2duQTHJXH4fIzi9zA75cwT1nln5xI119h5lKc5ffycJ8sX7YET9j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240118T195051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEZSIONON%2F20240118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bf66454201de177749c421843d4d20934e09b58f7c4dfa3014202189bb841d8",
    "images": {
        "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0a1/0a16a23d1920e4711c019a5771f4eb24-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIElbw2hsYuuuAPU4DcBCJt8OrsWrmmcInHOOCFESbd87AiEA7jCUcsWTl2Rq1ahHQfi0mtsgvvziq4vwMGjBxnpgIRgqwgUI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDClpT5KnyByrQhggGCqWBUJdD7uwzUOr5%2FuDyDCIhkxFCba92C9Opqybh2b2FvvM9s2Wx6tr1VQHjvAOMcI%2Fgae6ggo22rx10yRp5IO%2Bm3lXtonNCSQAlPfA%2FoPITx4ImrKArwukuT1q1cJZjQ9wV8%2BMusRB3m7uUg5qR7QkRahKogvOIJ%2BS77sWTtZ7C1%2BCh7FWp6hNnKBCzD8g%2F%2BzF1YW3fjkUBcuVVq%2B1dIj%2F58HhinFsN5P9lwG2AE3%2BVkyK68x3OYu3t1tB6z%2FFM6bmBRfAY6nz%2FN2hCFfKvHsvP3DKzyi8p8J2GGKIM5ob5%2BiVdDrhP1wETY2tw5TXfd96kw%2BJJ2hF1NHj41yR1BFxlcTANO5Fs5pxrwg6I5Bd5M1k3M%2F%2FayxxhItu9DtRvDRwUNNkeJY2klwT%2FT%2FMaj9pEOxtb5TPmsGx692%2B38V6TxC%2BFfwIUQ6rmefcGgbrndPmxDDAixYcApFqM2lH26SWjx5vlW%2FhwvWvJ3oJd4bYUoIyFpSYWiXXeFiL0qhj3dTHJMAV%2FUHuRSMCZTDFYhykKcHSABi6Y8C%2FZ5dJ3s2yQnTOKp9O0d6BYGtUf2rajFcv0N1U%2FEuiramUIlNxj28WqzdbH%2BsE7MNib351iVNRyPgbVtPuixjzcjfNbTNcyZWwUucmOdegvykbjfVK1L6Y6ohv1zwUKEIISgghvJsspaY0z%2BzDX%2F3JCzMCfiGAwMfFSrT20eyDJutwbHMan0FXSuGmq2n8E10xfshDuz9aBWW%2FeRd4T9TVMI5iOtkY38%2Bo3YuVZIKv2KSn4EH%2F7%2FZ59K6arkfgv5JilQGVICCpY2e%2FGEsmWJAfz4PBCKfUm9pQjArxsZGb0Ze4mfQ5xBd7h4O8UHuB2cm9bML5OXkBBPtorM9WxddJMNfjpa0GOrEB6EqOjIo7EtfzmECqUSUn87UHxt3C4as4zs%2FzHaDP79vH6GVg6qJiiRREBCPeL%2BxAgYJzKuc6LRS7PYnBh4ZsCmqR97%2Fumeys6orPSNyp0ENXOqKsu8iwIfZPAG38MelCn2hvHmqcJyST9ggEyL%2BqNiHL6fGsyoR7OV8DexhGkZV5y5dZrIt2jPKI2duQTHJXH4fIzi9zA75cwT1nln5xI119h5lKc5ffycJ8sX7YET9j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240118T195051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEZSIONON%2F20240118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=342a47e31eb8c6100a0ba2e8d91c23689cb0ab33ab28ec1cb630afdb0eb89de1",
            "width": 100,
            "height": 100
        },
        "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0a1/0a16a23d1920e4711c019a5771f4eb24-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIElbw2hsYuuuAPU4DcBCJt8OrsWrmmcInHOOCFESbd87AiEA7jCUcsWTl2Rq1ahHQfi0mtsgvvziq4vwMGjBxnpgIRgqwgUI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDClpT5KnyByrQhggGCqWBUJdD7uwzUOr5%2FuDyDCIhkxFCba92C9Opqybh2b2FvvM9s2Wx6tr1VQHjvAOMcI%2Fgae6ggo22rx10yRp5IO%2Bm3lXtonNCSQAlPfA%2FoPITx4ImrKArwukuT1q1cJZjQ9wV8%2BMusRB3m7uUg5qR7QkRahKogvOIJ%2BS77sWTtZ7C1%2BCh7FWp6hNnKBCzD8g%2F%2BzF1YW3fjkUBcuVVq%2B1dIj%2F58HhinFsN5P9lwG2AE3%2BVkyK68x3OYu3t1tB6z%2FFM6bmBRfAY6nz%2FN2hCFfKvHsvP3DKzyi8p8J2GGKIM5ob5%2BiVdDrhP1wETY2tw5TXfd96kw%2BJJ2hF1NHj41yR1BFxlcTANO5Fs5pxrwg6I5Bd5M1k3M%2F%2FayxxhItu9DtRvDRwUNNkeJY2klwT%2FT%2FMaj9pEOxtb5TPmsGx692%2B38V6TxC%2BFfwIUQ6rmefcGgbrndPmxDDAixYcApFqM2lH26SWjx5vlW%2FhwvWvJ3oJd4bYUoIyFpSYWiXXeFiL0qhj3dTHJMAV%2FUHuRSMCZTDFYhykKcHSABi6Y8C%2FZ5dJ3s2yQnTOKp9O0d6BYGtUf2rajFcv0N1U%2FEuiramUIlNxj28WqzdbH%2BsE7MNib351iVNRyPgbVtPuixjzcjfNbTNcyZWwUucmOdegvykbjfVK1L6Y6ohv1zwUKEIISgghvJsspaY0z%2BzDX%2F3JCzMCfiGAwMfFSrT20eyDJutwbHMan0FXSuGmq2n8E10xfshDuz9aBWW%2FeRd4T9TVMI5iOtkY38%2Bo3YuVZIKv2KSn4EH%2F7%2FZ59K6arkfgv5JilQGVICCpY2e%2FGEsmWJAfz4PBCKfUm9pQjArxsZGb0Ze4mfQ5xBd7h4O8UHuB2cm9bML5OXkBBPtorM9WxddJMNfjpa0GOrEB6EqOjIo7EtfzmECqUSUn87UHxt3C4as4zs%2FzHaDP79vH6GVg6qJiiRREBCPeL%2BxAgYJzKuc6LRS7PYnBh4ZsCmqR97%2Fumeys6orPSNyp0ENXOqKsu8iwIfZPAG38MelCn2hvHmqcJyST9ggEyL%2BqNiHL6fGsyoR7OV8DexhGkZV5y5dZrIt2jPKI2duQTHJXH4fIzi9zA75cwT1nln5xI119h5lKc5ffycJ8sX7YET9j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240118T195051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEZSIONON%2F20240118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e15711ddadbb69d377a5776cab42394345476328e2122064fbf46389fa08606",
            "width": 200,
            "height": 200
        },
        "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0a1/0a16a23d1920e4711c019a5771f4eb24.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIElbw2hsYuuuAPU4DcBCJt8OrsWrmmcInHOOCFESbd87AiEA7jCUcsWTl2Rq1ahHQfi0mtsgvvziq4vwMGjBxnpgIRgqwgUI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDClpT5KnyByrQhggGCqWBUJdD7uwzUOr5%2FuDyDCIhkxFCba92C9Opqybh2b2FvvM9s2Wx6tr1VQHjvAOMcI%2Fgae6ggo22rx10yRp5IO%2Bm3lXtonNCSQAlPfA%2FoPITx4ImrKArwukuT1q1cJZjQ9wV8%2BMusRB3m7uUg5qR7QkRahKogvOIJ%2BS77sWTtZ7C1%2BCh7FWp6hNnKBCzD8g%2F%2BzF1YW3fjkUBcuVVq%2B1dIj%2F58HhinFsN5P9lwG2AE3%2BVkyK68x3OYu3t1tB6z%2FFM6bmBRfAY6nz%2FN2hCFfKvHsvP3DKzyi8p8J2GGKIM5ob5%2BiVdDrhP1wETY2tw5TXfd96kw%2BJJ2hF1NHj41yR1BFxlcTANO5Fs5pxrwg6I5Bd5M1k3M%2F%2FayxxhItu9DtRvDRwUNNkeJY2klwT%2FT%2FMaj9pEOxtb5TPmsGx692%2B38V6TxC%2BFfwIUQ6rmefcGgbrndPmxDDAixYcApFqM2lH26SWjx5vlW%2FhwvWvJ3oJd4bYUoIyFpSYWiXXeFiL0qhj3dTHJMAV%2FUHuRSMCZTDFYhykKcHSABi6Y8C%2FZ5dJ3s2yQnTOKp9O0d6BYGtUf2rajFcv0N1U%2FEuiramUIlNxj28WqzdbH%2BsE7MNib351iVNRyPgbVtPuixjzcjfNbTNcyZWwUucmOdegvykbjfVK1L6Y6ohv1zwUKEIISgghvJsspaY0z%2BzDX%2F3JCzMCfiGAwMfFSrT20eyDJutwbHMan0FXSuGmq2n8E10xfshDuz9aBWW%2FeRd4T9TVMI5iOtkY38%2Bo3YuVZIKv2KSn4EH%2F7%2FZ59K6arkfgv5JilQGVICCpY2e%2FGEsmWJAfz4PBCKfUm9pQjArxsZGb0Ze4mfQ5xBd7h4O8UHuB2cm9bML5OXkBBPtorM9WxddJMNfjpa0GOrEB6EqOjIo7EtfzmECqUSUn87UHxt3C4as4zs%2FzHaDP79vH6GVg6qJiiRREBCPeL%2BxAgYJzKuc6LRS7PYnBh4ZsCmqR97%2Fumeys6orPSNyp0ENXOqKsu8iwIfZPAG38MelCn2hvHmqcJyST9ggEyL%2BqNiHL6fGsyoR7OV8DexhGkZV5y5dZrIt2jPKI2duQTHJXH4fIzi9zA75cwT1nln5xI119h5lKc5ffycJ8sX7YET9j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240118T195051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEZSIONON%2F20240118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bf66454201de177749c421843d4d20934e09b58f7c4dfa3014202189bb841d8",
            "width": 300,
            "height": 300
        }
    },
    "source": "Serious Eats",
    "url": "http://www.seriouseats.com/recipes/2011/10/grilled-cheesecake-cakespy-book-dessert-recipe.html",
    "shareAs": "http://www.edamam.com/recipe/grilled-cheesecake-84a07bd0f7ef44799660529f2db58ad3/cheesecake",
    "yield": 1,
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
        "Sulfite-Free",
        "Kosher"
    ],
    "cautions": [],
    "ingredientLines": [
        "1 tablespoon butter",
        "2 slices pound cake (any flavor), each piece buttered on one side",
        "1 small slice cheesecake (any flavor), cut into very thin slices"
    ],
    "ingredients": [
        {
            "text": "1 tablespoon butter",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 14.2,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
        },
        {
            "text": "2 slices pound cake (any flavor), each piece buttered on one side",
            "quantity": 2,
            "measure": "slice",
            "food": "pound cake",
            "weight": 60,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_a3pow6yblg3j8eav7vyyvadbeijd",
            "image": "https://www.edamam.com/food-img/8e7/8e7bdc6077d53235955dca584b2ba568.jpg"
        },
        {
            "text": "1 small slice cheesecake (any flavor), cut into very thin slices",
            "quantity": 1,
            "measure": "slice",
            "food": "cheesecake",
            "weight": 93.75,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_bg8aehmb16xexyakhejbha9r1nei",
            "image": "https://www.edamam.com/food-img/999/999121f0a2563dada95daa26c15db531.jpg"
        }
    ],
    "calories": 614.5515,
    "totalCO2Emissions": 580.4834999999999,
    "co2EmissionsClass": "D",
    "totalWeight": 167.95,
    "totalTime": 5,
    "cuisineType": [
        "american"
    ],
    "mealType": [
        "breakfast"
    ],
    "dishType": [
        "desserts"
    ],
    "totalNutrients": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 614.5515,
            "unit": "kcal"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 41.009949999999996,
            "unit": "g"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 19.357,
            "unit": "g"
        },
        "FATRN": {
            "label": "Trans",
            "quantity": 0.1152,
            "unit": "g"
        },
        "FAMS": {
            "label": "Monounsaturated",
            "quantity": 13.225425000000001,
            "unit": "g"
        },
        "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.97942,
            "unit": "g"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 56.074769999999994,
            "unit": "g"
        },
        "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 55.339769999999994,
            "unit": "g"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 0.735,
            "unit": "g"
        },
        "SUGAR": {
            "label": "Sugars",
            "quantity": 40.486019999999996,
            "unit": "g"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 8.27695,
            "unit": "g"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 121.6925,
            "unit": "mg"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 638.387,
            "unit": "mg"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 79.4205,
            "unit": "mg"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 15.3965,
            "unit": "mg"
        },
        "K": {
            "label": "Potassium",
            "quantity": 177.183,
            "unit": "mg"
        },
        "FE": {
            "label": "Iron",
            "quantity": 1.481465,
            "unit": "mg"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 0.748905,
            "unit": "mg"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 174.59550000000002,
            "unit": "mg"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 288.1905,
            "unit": "µg"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 0.375,
            "unit": "mg"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.13076,
            "unit": "mg"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.3351655,
            "unit": "mg"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.1607764999999999,
            "unit": "mg"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.07077599999999999,
            "unit": "mg"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 50.376,
            "unit": "µg"
        },
        "FOLFD": {
            "label": "Folate (food)",
            "quantity": 31.2885,
            "unit": "µg"
        },
        "FOLAC": {
            "label": "Folic acid",
            "quantity": 11.2125,
            "unit": "µg"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.399515,
            "unit": "µg"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0.94875,
            "unit": "µg"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.24444,
            "unit": "mg"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.138999999999999,
            "unit": "µg"
        },
        "WATER": {
            "label": "Water",
            "quantity": 60.5904,
            "unit": "g"
        }
    },
    "totalDaily": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 30.727575,
            "unit": "%"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 63.09223076923077,
            "unit": "%"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 96.785,
            "unit": "%"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 18.691589999999998,
            "unit": "%"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 2.94,
            "unit": "%"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 16.5539,
            "unit": "%"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.564166666666665,
            "unit": "%"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 26.59945833333333,
            "unit": "%"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 7.94205,
            "unit": "%"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 3.665833333333333,
            "unit": "%"
        },
        "K": {
            "label": "Potassium",
            "quantity": 3.7698510638297873,
            "unit": "%"
        },
        "FE": {
            "label": "Iron",
            "quantity": 8.230361111111112,
            "unit": "%"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 6.808227272727273,
            "unit": "%"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 24.94221428571429,
            "unit": "%"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 32.021166666666666,
            "unit": "%"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 0.4166666666666667,
            "unit": "%"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 10.896666666666667,
            "unit": "%"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 25.78196153846154,
            "unit": "%"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.2548531249999995,
            "unit": "%"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.444307692307691,
            "unit": "%"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.594,
            "unit": "%"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 16.646458333333335,
            "unit": "%"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 6.325,
            "unit": "%"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.296266666666666,
            "unit": "%"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 5.115833333333333,
            "unit": "%"
        }
    },
    "digest": [
        {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 41.009949999999996,
            "hasRDI": true,
            "daily": 63.09223076923077,
            "unit": "g",
            "sub": [
                {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 19.357,
                    "hasRDI": true,
                    "daily": 96.785,
                    "unit": "g"
                },
                {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0.1152,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 13.225425000000001,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 3.97942,
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
            "total": 56.074769999999994,
            "hasRDI": true,
            "daily": 18.691589999999998,
            "unit": "g",
            "sub": [
                {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 55.339769999999994,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 0.735,
                    "hasRDI": true,
                    "daily": 2.94,
                    "unit": "g"
                },
                {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 40.486019999999996,
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
            "total": 8.27695,
            "hasRDI": true,
            "daily": 16.5539,
            "unit": "g"
        },
        {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 121.6925,
            "hasRDI": true,
            "daily": 40.564166666666665,
            "unit": "mg"
        },
        {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 638.387,
            "hasRDI": true,
            "daily": 26.59945833333333,
            "unit": "mg"
        },
        {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 79.4205,
            "hasRDI": true,
            "daily": 7.94205,
            "unit": "mg"
        },
        {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 15.3965,
            "hasRDI": true,
            "daily": 3.665833333333333,
            "unit": "mg"
        },
        {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 177.183,
            "hasRDI": true,
            "daily": 3.7698510638297873,
            "unit": "mg"
        },
        {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 1.481465,
            "hasRDI": true,
            "daily": 8.230361111111112,
            "unit": "mg"
        },
        {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 0.748905,
            "hasRDI": true,
            "daily": 6.808227272727273,
            "unit": "mg"
        },
        {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 174.59550000000002,
            "hasRDI": true,
            "daily": 24.94221428571429,
            "unit": "mg"
        },
        {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 288.1905,
            "hasRDI": true,
            "daily": 32.021166666666666,
            "unit": "µg"
        },
        {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0.375,
            "hasRDI": true,
            "daily": 0.4166666666666667,
            "unit": "mg"
        },
        {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.13076,
            "hasRDI": true,
            "daily": 10.896666666666667,
            "unit": "mg"
        },
        {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.3351655,
            "hasRDI": true,
            "daily": 25.78196153846154,
            "unit": "mg"
        },
        {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 1.1607764999999999,
            "hasRDI": true,
            "daily": 7.2548531249999995,
            "unit": "mg"
        },
        {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.07077599999999999,
            "hasRDI": true,
            "daily": 5.444307692307691,
            "unit": "mg"
        },
        {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 50.376,
            "hasRDI": true,
            "daily": 12.594,
            "unit": "µg"
        },
        {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 31.2885,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 11.2125,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.399515,
            "hasRDI": true,
            "daily": 16.646458333333335,
            "unit": "µg"
        },
        {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.94875,
            "hasRDI": true,
            "daily": 6.325,
            "unit": "µg"
        },
        {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 1.24444,
            "hasRDI": true,
            "daily": 8.296266666666666,
            "unit": "mg"
        },
        {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 6.138999999999999,
            "hasRDI": true,
            "daily": 5.115833333333333,
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
            "total": 60.5904,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
        }
    ]
}



// HTML string function
let exploreData = ``;



function expandExploredData(index){
    // let recipe = exploreData[index].recipe;

    let recipe = temp;

    $('body').append(
        `<div class='recipe-dialog-box'>
            <div class='dialog-box-recipe-container'>
                <img class='recipe-image' src='${recipe.image}'>         
                <div class='recipe-label'>${recipe.label}</div>
                <div class='recipe-calories'>${Math.floor(recipe.calories / recipe.yield)} Calories Per Serving</div>
                <div class='recipe-yield'>${recipe.yield} Servings Total</div>
                <h3>Ingredients</h3>
                <div class='recipe-ingredient-list'>
                    ${recipe.ingredientLines.map((item)=>{
                        return '<div>Test</div>'
                    })}
                </div>
                <button>close</button>
            </div>
        </div>`
  );
}

expandExploredData();



async function submitRecipeQuery(queryString, count = 18, random = false){
    
    // console.log(JSON.parse(await searchRecipeAPI(queryString, random)));
    // let data = JSON.parse(await searchRecipeAPI(queryString, random)).hits;
    exploreData = dataFile.hits;
    
    let recipes = ``;

    for(let i = 0; i < count; i++){
        let recipe = exploreData[i].recipe;
        recipes = recipes +  
        `<div class='recipe-container'>
            <img class='recipe-image' src='${recipe.image}'/>
            <div class='recipe-label'>${recipe.label}</div>
            <div class='recipe-info'>
                <div class='recipe-calories'>Calories per serving: ${Math.floor(recipe.calories / recipe.yield)}</div>
                <div class='recipe-servings'>Servings: ${recipe.yield}</div>
            </div>
            <button class='recipe-ingredient-expand' onClick='expandExploredData(${i})'>
                View Recipe
            </button>
        </div>`
    }
    return recipes;
}

