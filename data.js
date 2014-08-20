exports.getData = function(siteId, org){
	var data;
	var iterator = 1;
	
	
	var orgs = new Array();
	var org2;
	orgs.push("HLSC");
	orgs.push("TCS");
	orgs.push("RM");
	for(var i=0; i<orgs.length; i++){
		if(org == orgs[i]){
			org2 = "org"+(i+1);
		}
	}	
	
	for(var j = 1; j<=orgs.length;j++){
		for(var k = 1; k<4;k++){
			if(siteId == 10+k && org2 === "org"+j)
			{
				data = 
				[
					{
						"_id": "53965d9df0ccd69ac5dd1394",
						"SiteId": 10+k,
						"Org": org
					}
				];
				for(var i = 1;i<18;i++){
					var newFieldName = 'S'+i;
					var newFieldValue = {};
					newFieldValue["G"] = Math.round(Math.random()*150*(iterator))+((iterator-1)*150);
					newFieldValue["R"] = Math.round(Math.random()*150*(iterator))+((iterator-1)*150);
					data[0][newFieldName] = newFieldValue;					
				}
				
				data = JSON.stringify(data);
			}
			iterator++;
		}
	}
	
	if(siteId == "lastSevenDays"){
		data =  [{
					"D1" :    {
						"Date" : "2012-06-19",
						"Files Processed" : 2,
						"Files in Error" : 6,
						"Files in Processing" : 10
					},
					"D2" :     {
						"Date" : "2012-06-20",
						"Files Processed" : 3,
						"Files in Error" : 8,
						"Files in Processing" : 9
					},
					"D3" :     {
						"Date" : "2012-06-21",
						"Files Processed" : 4,
						"Files in Error" : 10,
						"Files in Processing" : 8
					},
					"D4" :     {
						"Date" : "2012-06-22",
						"Files Processed" : 5,
						"Files in Error" : 12,
						"Files in Processing" : 7
					},
					"D5" :     {
						"Date" : "2012-06-23",
						"Files Processed" : 6,
						"Files in Error" : 14,
						"Files in Processing" : 6
					},
					"D6" :     {
						"Date" : "2012-06-24",
						"Files Processed" : 7,
						"Files in Error" : 16,
						"Files in Processing" : 4
					},
					"D7" :     {
						"Date" : "2012-06-25",
						"Files Processed" : 8,
						"Files in Error" : 18,
						"Files in Processing" : 3
					}
				}]
		
	
		data = JSON.stringify(data);
	}
	
		if(siteId.indexOf("date=") > -1 ){
			if(siteId.indexOf("06-19-2014") > -1){
			data = [{ 
				"date":'06-19-2014',
				"s1" : [10,2,5,10,2,4,6,1],
				"s2" : [5,2,5,5,3,4,6,2],
				"s3" : [1,2,5,1,3,4,6,3],
				tickData : ['Waiting to be Processed','Inbound File Processing','Batch File Processing','Worklist Load','Output Generation','Split & Merge','Ra Packaging','File Transmission']
				}]
				data = JSON.stringify(data);
			}
		}

	
		
	
	
	if(data === undefined)
	{
		data = "Site " + siteId + " does not exist for " + org;
	}
	/*
	else if(siteId == 11 && org === "org2")
	{
		data = JSON.stringify([
			  {
				"_id": "53965d9df0ccd69ac5dd1394",
				"SiteId": siteId,
				"Org": org,
				"S20": {
				  "G": 211,
				  "R": 211
				},
				"S19": {
				  "G": 211,
				  "R": 211
				},
				"S18": {
				  "G": 211,
				  "R": 211
				},
				"S17": {
				  "G": 211,
				  "R": 211
				},
				"S16": {
				  "G": 211,
				  "R": 211
				},
				"S15": {
				  "G": 211,
				  "R": 211
				},
				"S14": {
				  "G": 211,
				  "R": 211
				},
				"S13": {
				  "G": 211,
				  "R": 211
				},
				"S12": {
				  "G": 211,
				  "R": 211
				},
				"S11": {
				  "G": 211,
				  "R": 211
				},
				"S10": {
				  "G": 211,
				  "R": 211
				},
				"S9": {
				  "G": 211,
				  "R": 211
				},
				"S8": {
				  "G": 211,
				  "R": 211
				},
				"S7": {
				  "G": 211,
				  "R": 211
				},
				"S6": {
				  "G": 211,
				  "R": 211
				},
				"S5": {
				  "G": 211,
				  "R": 211
				},
				"S4": {
				  "G": 211,
				  "R": 211
				},
				"S3": {
				  "G": 211,
				  "R": 211
				},
				"S2": {
				  "G": 211,
				  "R": 211
				},
				"S1": {
				  "G": 211,
				  "R": 211
				}
			  }
		]);
	}
	}}
	
	else if(siteId == 12 && org === "org2")
	{
		data = JSON.stringify([
			  {
				"_id": "53965d9df0ccd69ac5dd1394",
				"SiteId": siteId,
				"Org": org,
				"S20": {
				  "G": 212,
				  "R": 212
				},
				"S19": {
				  "G": 212,
				  "R": 212
				},
				"S18": {
				  "G": 212,
				  "R": 212
				},
				"S17": {
				  "G": 212,
				  "R": 212
				},
				"S16": {
				  "G": 212,
				  "R": 212
				},
				"S15": {
				  "G": 212,
				  "R": 212
				},
				"S14": {
				  "G": 212,
				  "R": 212
				},
				"S13": {
				  "G": 212,
				  "R": 212
				},
				"S12": {
				  "G": 212,
				  "R": 212
				},
				"S11": {
				  "G": 212,
				  "R": 212
				},
				"S10": {
				  "G": 212,
				  "R": 212
				},
				"S9": {
				  "G": 212,
				  "R": 212
				},
				"S8": {
				  "G": 212,
				  "R": 212
				},
				"S7": {
				  "G": 212,
				  "R": 212
				},
				"S6": {
				  "G": 212,
				  "R": 212
				},
				"S5": {
				  "G": 212,
				  "R": 212
				},
				"S4": {
				  "G": 212,
				  "R": 12
				},
				"S3": {
				  "G": 212,
				  "R": 212
				},
				"S2": {
				  "G": 212,
				  "R": 212
				},
				"S1": {
				  "G": 212,
				  "R": 212
				}
			  }
		]);
	}*/


	return data;
};