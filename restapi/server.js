const express = require('express');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');
const app = express();
//route, callback function.
app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Welcome to Pega");
});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/register.html')
})

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    const productsData =[
        {
          "_id": "5f5861a7f0e455aecd730a0d",
          "index": 0,
          "guid": "76f740af-7694-439b-a4f9-9ec1ffac9361",
          "isActive": true,
          "balance": "$2,111.10",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Gomez Bradshaw",
          "gender": "male",
          "company": "MAZUDA",
          "email": "gomezbradshaw@mazuda.com",
          "phone": "+1 (900) 590-3178",
          "address": "468 Lawton Street, Imperial, New Hampshire, 7543",
          "about": "Dolor ad aliquip proident laboris consequat tempor cupidatat ad. Amet incididunt amet est ex proident qui incididunt sunt. Amet nisi ex aute sit ad esse elit minim aliqua do Lorem laboris.\r\n",
          "registered": "2018-05-02T07:08:27 -06:-30",
          "latitude": -5.846889,
          "longitude": 70.355689,
          "tags": [
            "ex",
            "Lorem",
            "occaecat",
            "nisi",
            "amet",
            "sunt",
            "veniam"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Merritt Wilder"
            },
            {
              "id": 1,
              "name": "White Lewis"
            },
            {
              "id": 2,
              "name": "Medina Vincent"
            }
          ],
          "greeting": "Hello, Gomez Bradshaw! You have 3 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5861a79d93928e43a3e0ef",
          "index": 1,
          "guid": "6aa174ba-ff89-4c36-ac41-fc0c719f335b",
          "isActive": true,
          "balance": "$3,631.42",
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "blue",
          "name": "Franks Battle",
          "gender": "male",
          "company": "DEVILTOE",
          "email": "franksbattle@deviltoe.com",
          "phone": "+1 (933) 445-3668",
          "address": "978 Senator Street, Fairfield, Arkansas, 4900",
          "about": "Ipsum voluptate incididunt eu irure ex sint elit laborum fugiat tempor sit adipisicing consectetur. Dolore voluptate minim cillum nisi magna ullamco do enim commodo incididunt. Mollit anim occaecat nostrud nisi anim.\r\n",
          "registered": "2014-05-25T12:42:58 -06:-30",
          "latitude": -52.632599,
          "longitude": -88.509058,
          "tags": [
            "enim",
            "sit",
            "in",
            "incididunt",
            "commodo",
            "pariatur",
            "ut"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Roberson Trevino"
            },
            {
              "id": 1,
              "name": "Hogan Cook"
            },
            {
              "id": 2,
              "name": "Pratt Nolan"
            }
          ],
          "greeting": "Hello, Franks Battle! You have 8 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5861a7a95d8e01363d93eb",
          "index": 2,
          "guid": "48d79c0d-3339-428f-ae3b-d06fbe0819ab",
          "isActive": false,
          "balance": "$1,935.72",
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "eyeColor": "green",
          "name": "Leach Padilla",
          "gender": "male",
          "company": "DECRATEX",
          "email": "leachpadilla@decratex.com",
          "phone": "+1 (990) 517-3097",
          "address": "990 Bradford Street, Yardville, Missouri, 3230",
          "about": "Nisi sint cupidatat est duis ipsum do aliqua enim irure irure velit aliquip aute ullamco. Exercitation deserunt mollit id excepteur nostrud adipisicing magna. Exercitation ullamco et anim ex do proident. Ad cupidatat nisi minim ullamco magna officia laboris do. Est fugiat commodo non cillum nostrud incididunt incididunt ea cupidatat. Tempor quis laboris exercitation id. Irure qui culpa adipisicing ut eu esse nostrud.\r\n",
          "registered": "2016-10-04T04:30:23 -06:-30",
          "latitude": 72.24612,
          "longitude": 54.742477,
          "tags": [
            "anim",
            "enim",
            "quis",
            "quis",
            "consectetur",
            "voluptate",
            "ut"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Huber Mueller"
            },
            {
              "id": 1,
              "name": "Olga Callahan"
            },
            {
              "id": 2,
              "name": "Charlotte Dejesus"
            }
          ],
          "greeting": "Hello, Leach Padilla! You have 3 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5861a78d46dcf1b014711e",
          "index": 3,
          "guid": "98abfca9-45bd-4bca-a6e8-c24aa5508131",
          "isActive": false,
          "balance": "$1,216.13",
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "green",
          "name": "Juarez Wilkins",
          "gender": "male",
          "company": "NAXDIS",
          "email": "juarezwilkins@naxdis.com",
          "phone": "+1 (822) 519-3961",
          "address": "812 Story Court, Roy, Utah, 6852",
          "about": "Commodo aliqua occaecat cillum consectetur exercitation occaecat ad exercitation magna sit officia. Commodo id duis velit quis ipsum. Veniam consequat ad excepteur ea velit exercitation. Sunt eu sit culpa enim cillum non fugiat non eiusmod. Est nulla tempor eu reprehenderit sit elit incididunt.\r\n",
          "registered": "2019-02-01T03:57:24 -06:-30",
          "latitude": 49.699456,
          "longitude": 158.575414,
          "tags": [
            "ipsum",
            "est",
            "enim",
            "laborum",
            "labore",
            "ex",
            "dolor"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Jennifer Hooper"
            },
            {
              "id": 1,
              "name": "Mullen Chen"
            },
            {
              "id": 2,
              "name": "Callahan Barnes"
            }
          ],
          "greeting": "Hello, Juarez Wilkins! You have 6 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861a7b9e4302a67d1a1d0",
          "index": 4,
          "guid": "1663d1ea-f493-47bf-bc6d-38b380a75dd3",
          "isActive": true,
          "balance": "$1,806.54",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "brown",
          "name": "Dorothy Oconnor",
          "gender": "female",
          "company": "ACRODANCE",
          "email": "dorothyoconnor@acrodance.com",
          "phone": "+1 (818) 573-3774",
          "address": "800 Oceanview Avenue, Tolu, Mississippi, 376",
          "about": "Irure tempor veniam sunt aute officia dolore nisi sunt. Do aliquip incididunt excepteur ea ipsum duis esse cillum et amet velit. Consectetur nostrud laborum sint ipsum ullamco. Amet enim cillum ullamco dolore ex esse. Occaecat aliquip minim id dolor sint fugiat. Mollit proident elit cupidatat et esse exercitation aliqua.\r\n",
          "registered": "2015-06-24T08:24:53 -06:-30",
          "latitude": 88.265809,
          "longitude": -166.154662,
          "tags": [
            "dolor",
            "adipisicing",
            "qui",
            "commodo",
            "exercitation",
            "ex",
            "sunt"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Celeste Jensen"
            },
            {
              "id": 1,
              "name": "Delgado Montoya"
            },
            {
              "id": 2,
              "name": "Chambers Ray"
            }
          ],
          "greeting": "Hello, Dorothy Oconnor! You have 6 unread messages.",
          "favoriteFruit": "strawberry"
        }
      ];
    res.json(productsData)
});
app.get(ROUTE_CONTSTANTS.GET_FILE,function(req,res){
    res.sendFile(__dirname+"/files/demo.pdf");
})
app.listen(3000);