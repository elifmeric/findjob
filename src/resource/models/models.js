

export default class JobListItem{
    construct(jobId,positionName,companyName,durationDay, durationDayText,imageUrl,distance,latitude,longitude,cityName, townName){
        this.jobId=jobId;
        this.positionName=positionName;
        this.companyName=companyName;
        this.durationDay=durationDay;
        this.durationDayText=durationDayText;
        this.imageUrl=imageUrl;
        this.distance=distance;
        this.latitude=latitude;
        this.longitude=longitude;
        this.cityName=cityName;
        this.townName=townName; 
    }
}

export class GetListResponse{

    construct(version, statusCode, result, total){
        this.version = version;
        this.statusCode = statusCode;
        this.result = result;
        this.total = total;
    }
}

export class ContactPhone{
    construct(countryCallingCode, areaCode, number){
        this.countryCallingCode = countryCallingCode;
        this.areaCode =areaCode;
        this.number =number;
    }
}

export class JobDetail{
    construct(jobId,
    positionName,
    companyName,
    durationDay,
    durationDayText,
    imageUrl,
    countryCode,
    cityName,
    address,
    postalCode,
    hasLatitude,
    hasLongitude,
    latitude,
    longitude,
    description,
    status,
    contactPhone){
    this.jobId = jobId; 
    this.positionName = positionName;
    this.companyName = companyName;
    this.durationDay = durationDay;
    this.durationDayText = durationDayText;
    this.imageUrl = imageUrl;
    this.countryCode = countryCode;
    this.cityName = cityName;
    this.address = address;
    this.postalCode = postalCode;
    this.hasLatitude = hasLatitude;
    this.hasLongitude = hasLongitude;
    this.latitude = latitude;
    this.longitude = longitude;
    this.description = description;
    this.status = status;
    this.contactPhone = contactPhone;
    }

    
    }



 export class GetJobDetailResponse{
   
    construct(  version,statusCode,result){
            this.version=version;
            this.statusCode=statusCode;
            this.result =result;
        }
}