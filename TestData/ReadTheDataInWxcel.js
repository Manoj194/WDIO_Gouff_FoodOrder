var Excel=require("xlsx")
let wb=Excel.readFile("./test/specs/TestData/manu777.xlsx")
 var sheet=wb.SheetNames
 console.log(sheet);
 ws=wb.Sheets['Sheet4']
let exceldata= Excel.utils.sheet_to_json(ws)
console.log(exceldata);
console.log(exceldata[0].URL);
console.log(exceldata[0].UN);
console.log(exceldata[0].PWD);




