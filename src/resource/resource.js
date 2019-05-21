import { GetJobDetailResponse, GetListResponse } from "./models/models";

const jsonn = {
    "version":"1.0",
    "statusCode":200,
    "result":{
       "jobId":"199A9ED66BFE4CF593DBDF5402F1702A",
       "positionName":"Jandarma Bölge Komutanı",
       "companyName":"Vosyoyvsyvosyv",
       "durationDay":0,
       "durationDayText":"Taze çıktı!",
       "imageUrl":"https://dummyimage.com/200x200/0e5870/fff",
       "countryCode":"TR",
       "countryName":"Turkey",
       "cityName":"İstanbul",
       "townName":"Ümraniye",
       "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
       "postalCode":34768,
       "hasLatitude":true,
       "hasLongitude":true,
       "latitude":41.0266502,
       "longitude":29.1157803,
       "description":"syovsvyosvyoyvsoby",
       "status":1,
       "contactPhone":{
          "countryCallingCode":"+90",
          "areaCode":"879",
          "number":"9797979"
 } }
}

const json = {
    "version":"1.0",
    "statusCode":200,
    "result":{
 "items":[ {
             "jobId":"C71CD1954BA149BCAF42B25F775EA4FB",
             "positionName":"Gerber Operatörü",
             "companyName":"Testoğlu Lahmacun Pide Ve Kebap",
             "durationDay":0,
             "durationDayText":"Taze çıktı!",
             "imageUrl":"https://dummyimage.com/200x200/0e5870/fff",
             "distance":"8,53 km yakınında",
             "latitude":41.050968170166023,
             "longitude":29.062856674194339,
             "cityName":"İstanbul",
             "townName":"Çengelköy Mahallesi"
 },{
    "jobId":"C71CD1954BA149BCAF42B25F775EA4BJ",
    "positionName":"Gerber ",
    "companyName":"Meric saksı boyamacılık a.ş.",
    "durationDay":0,
    "durationDayText":null,
    "imageUrl":"https://dummyimage.com/200x200/0e5881/fff",
    "distance":"2,53 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"İstanbul",
    "townName":"Ümraniye Mahallesi"
},{
    "jobId":"C71CD1954BA149BCAF42B25F775EA4GS",
    "positionName":"Operatörü",
    "companyName":"SomeJob",
    "durationDay":0,
    "durationDayText":"Tazxsdsdsdedsd dsddddd!",
    "imageUrl":"https://dummyimage.com/200x200/0e5889/fff",
    "distance":"8,53 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"Bartın",
    "townName":"Çengelköy Mahallesi"
} ],
 "total":3 }
 }

export default class JobResource {

getList(){
 var getListResponse = new GetListResponse();
 getListResponse = JSON.parse(JSON.stringify(json));
 return getListResponse.result.items;
}

getDetail(){
    var getDetailResponse = new GetJobDetailResponse();
    getDetailResponse = JSON.parse(JSON.stringify(jsonn));
    return getDetailResponse.result;
}

findByKey(searchKey, arr){
  /*   var filtered =  list.filter(obj => obj.toString().toLowerCase().includes(searchKey));
    console.log(filtered);
    return filtered; */

    return arr?arr.filter(obj => Object.keys(obj).some(key => obj[key].toString().toLowerCase().includes(searchKey))):[];

}

}