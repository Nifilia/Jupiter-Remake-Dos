import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../model/content.type';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  http = inject(HttpClient);

  getContentFromApi() {
    const url = `https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee`;
    return this.http.get<ApiResponse>(url);
  }
}
