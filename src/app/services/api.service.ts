import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData(url:string){
      return this.http.get(url)
  }

  saveData(url,body) {
    return this.http.post(url,body);
    
    }

    updateData(url: string) {
      return this.http.get(url)
      
      } 
      
//       checkOut(data) {
//         if (this.checkForm(data) == true) {
//         console.log(data);
//         this.saving = true;
//         let url = 'https://wbm-system.herokuapp.com/api/staff/create';
//         this.apiService.saveData(url, data).subscribe(
//         result => {
//         this.saved = true;
//         this.saving = false;
//         setTimeout(() => {
//         this.router.navigate(['/employee']);
//         }, 1000);
//         console.log(result);
//         },
//         error => {
//         this.saving = false;
//         console.log(error);
//         }
//         );
//         }
//         }


 }
