import {GetListResponse } from "./models/models";


const getListResponseJson = {
    "version":"1.0",
    "statusCode":200,
    "result":{
    "items":[ {
             "jobId":"C71CD1954BA149BCAF42B25F775EA4FB",
             "positionName":"Test Engineer",
             "companyName":"Compact Company",
             "durationDay":6,
             "durationDayText":"Newly arrived!",
             "imageUrl":"https://dummyimage.com/100x100/0e5870/fff",
             "distance":"8,53 km yakınında",
             "latitude":41.050968170166023,
             "longitude":29.062856674194339,
             "cityName":"İstanbul",
             "townName":"Go Mahallesi"
 },{
    "jobId":"C71CD1954BA149BCAF42B25F775EA4BJ",
    "positionName":"Call Center",
    "companyName":"Meric saksı boyamacılık a.ş.",
    "durationDay":17,
    "durationDayText":"",
    "imageUrl":"https://dummyimage.com/100x100/0e5881/fff",
    "distance":"2,53 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"Çanakkale",
    "townName":"Gökçeada"
},{
    "jobId":"C71CD1954BA149BCAF42B25F775EA4GS",
    "positionName":"Cookie Chef",
    "companyName":"Kukis Patiserrie",
    "durationDay":2,
    "durationDayText":"",
    "imageUrl":"https://dummyimage.com/100x100/0e5890/fff",
    "distance":"3,53 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"Bartın",
    "townName":"Kedi Mahallesi"
},
{
    "jobId":"C71CD1954BA149BCAF42B25F775EA7YH",
    "positionName":"Coffee Barista",
    "companyName":"Manifesto Coffee and Restaurant",
    "durationDay":10,
    "durationDayText":"Be the first who applies !",
    "imageUrl":"https://dummyimage.com/100x100/6e5889/fff",
    "distance":"8,57 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"Bursa",
    "townName":"Ekrem Mahallesi"
},
{
    "jobId":"C71CD1954BA149BCAF42B25F775EALK8",
    "positionName":"Cat Whisperer",
    "companyName":"Discovery Channel",
    "durationDay":0,
    "durationDayText":"Come and play",
    "imageUrl":"https://dummyimage.com/100x100/0f5889/fff",
    "distance":"8,13 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"İstanbul",
    "townName":"Ortaköy Mahallesi"
},
{
    "jobId":"C71CD1954BA149BCAF42B25F775EAOP7",
    "positionName":"Front end Web Developer",
    "companyName":"Kariyer.net",
    "durationDay":0,
    "durationDayText":"Taze çıktı!",
    "imageUrl":"https://dummyimage.com/100x100/0e5689/fff",
    "distance":"9,53 km yakınında",
    "latitude":41.050968170166023,
    "longitude":29.062856674194339,
    "cityName":"Manisa",
    "townName":"Çengelköy Mahallesi"
} ],
 "total":6 }
}

const getJobDetailRespJson = {
    "list" : [
        {
            "version":"1.0",
            "statusCode":200,
            "result":{
                "jobId":"C71CD1954BA149BCAF42B25F775EA4FB",
                "positionName":"Test Engineer",
                "companyName":"Compact Company",
                "durationDay":6,
                "durationDayText":"Newly arrived!",
                "imageUrl":"https://dummyimage.com/100x100/0e5870/fff",
                "latitude":41.050968170166023,
                "longitude":29.062856674194339,
                "cityName":"İstanbul",
                "townName":"Go Mahallesi",
                "countryCode":"TR",
               "countryName":"Turkey",               
               "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
               "postalCode":34768,
               "hasLatitude":true,
               "hasLongitude":true,
               "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               "status":1,
               "contactPhone":{
                  "countryCallingCode":"+90",
                  "areaCode":"879",
                  "number":"9797979"
         } }},
         {
            "version":"1.0",
            "statusCode":200,
            "result":{
                "jobId":"C71CD1954BA149BCAF42B25F775EA4BJ",
                "positionName":"Call Center",
                "companyName":"Meric saksı boyamacılık a.ş.",
                "durationDay":17,
                "durationDayText":"",
                "imageUrl":"https://dummyimage.com/100x100/0e5881/fff",
                "latitude":41.050968170166023,
                "longitude":29.062856674194339,
                "cityName":"Çanakkale",
                "townName":"Gökçeada",
               "countryCode":"TR",
               "countryName":"Turkey",
               "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
               "postalCode":34768,
               "hasLatitude":true,
               "hasLongitude":true,
               "description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
               "status":1,
               "contactPhone":{
                  "countryCallingCode":"+90",
                  "areaCode":"879",
                  "number":"9797979"
         } }},
        {
            "version":"1.0",
            "statusCode":200,
            "result":{
                "jobId":"C71CD1954BA149BCAF42B25F775EA4GS",
                "positionName":"Cookie Chef",
                "companyName":"Kukis Patiserrie",
                "durationDay":2,
                "durationDayText":"",
                "imageUrl":"https://dummyimage.com/100x100/0e5890/fff",
                "distance":"3,53 km yakınında",
                "latitude":41.050968170166023,
                "longitude":29.062856674194339,
                "cityName":"Bartın",
                "townName":"Kedi Mahallesi",
                 "countryCode":"TR",
               "countryName":"Turkey",
               "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
               "postalCode":34768,
               "hasLatitude":true,
               "hasLongitude":true,
               "description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
               "status":1,
               "contactPhone":{
                  "countryCallingCode":"+90",
                  "areaCode":"879",
                  "number":"9797979"
         } }},
        {
            "version":"1.0",
            "statusCode":200,
            "result":{
                "jobId":"C71CD1954BA149BCAF42B25F775EA7YH",
                "positionName":"Coffee Barista",
                "companyName":"Manifesto Coffee and Restaurant",
                "durationDay":10,
                "durationDayText":"Be the first who applies !",
                "imageUrl":"https://dummyimage.com/100x100/6e5889/fff",
                "latitude":41.050968170166023,
                "longitude":29.062856674194339,
                "cityName":"Bursa",
                "townName":"Ekrem Mahallesi",
                "countryCode":"TR",
               "countryName":"Turkey",
               "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
               "postalCode":34768,
               "hasLatitude":true,
               "hasLongitude":true,
               "description":"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
               "status":1,
               "contactPhone":{
                  "countryCallingCode":"+90",
                  "areaCode":"879",
                  "number":"9797979"
         } }},
        {
            "version":"1.0",
            "statusCode":200,
            "result":{
                "jobId":"C71CD1954BA149BCAF42B25F775EALK8",
                "positionName":"Cat Whisperer",
                "companyName":"Discovery Channel",
                "durationDay":0,
                "durationDayText":"Come and play",
                "imageUrl":"https://dummyimage.com/100x100/0f5889/fff",
                "latitude":41.050968170166023,
                "longitude":29.062856674194339,
                "cityName":"İstanbul",
                "townName":"Ortaköy Mahallesi",
                "countryCode":"TR",
               "countryName":"Turkey",
               "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
               "postalCode":34768,
               "hasLatitude":true,
               "hasLongitude":true,
               "description":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
               "status":1,
               "contactPhone":{
                  "countryCallingCode":"+90",
                  "areaCode":"879",
                  "number":"9797979"
         } }},
        {
            "version":"1.0",
            "statusCode":200,
            "result":{
                "jobId":"C71CD1954BA149BCAF42B25F775EAOP7",
                "positionName":"Front end Web Developer",
                "companyName":"Kariyer.net",
                "durationDay":0,
                "durationDayText":"Taze çıktı!",
                "imageUrl":"https://dummyimage.com/100x100/0e5689/fff",
                "latitude":41.050968170166023,
                "longitude":29.062856674194339,
                "cityName":"Manisa",
                "townName":"Çengelköy Mahallesi",
                "countryCode":"TR",
               "countryName":"Turkey",
               "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
               "postalCode":34768,
               "hasLatitude":true,
               "hasLongitude":true,
               "description":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
               "status":1,
               "contactPhone":{
                  "countryCallingCode":"+90",
                  "areaCode":"879",
                  "number":"9797979"
         } }}
    ]
}

export default class JobResource {

getList(){
    var getListResponse = new GetListResponse();
    getListResponse = JSON.parse(JSON.stringify(getListResponseJson));
    return getListResponse.result.items;
}

getDetail(jobId){
    var getDetailResponseList = JSON.parse(JSON.stringify(getJobDetailRespJson));
    return getDetailResponseList.list.filter((resp)=>
    resp.result.jobId === jobId)[0];
}

findByKey(searchKey, list) { 
  return list ? list.filter( item => Object.keys(item).some((key) => {
        return item[key] ? item[key].toString().toLowerCase().includes(searchKey) : ''
    })):[];
}

}