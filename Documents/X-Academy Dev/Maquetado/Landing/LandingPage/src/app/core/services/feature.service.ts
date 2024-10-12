import { Feature } from '../models/feature.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FeatureService {
     apiURL = 'http://localhost:4200/features';

    constructor(private httpClient: HttpClient) { }
        getFeatures() : Observable < Feature[] > {
            return this.httpClient.get<Feature[]>(this.apiURL);
        }

        getFeature(id: number) : Observable < Feature > {
            return this.httpClient.get<Feature>(this.apiURL + '/' + id);
        }

        postFeature(newfeature: Feature): Observable < { message: string } > {
            return this.httpClient.post<{ message: string }>(this.apiURL, newfeature);
        }

        putFeature(updatedFeature: Feature): Observable < { message: string } > {
            return this.httpClient.put<{ message: string }>(`${this.apiURL}/${updatedFeature}`, updatedFeature);
        }

        deleteFeature(featureId: number): Observable < { message: string } > {
            return this.httpClient.delete<{ message: string }>(`${this.apiURL}/${featureId}`);
        }
        sendEmail(email: string): Observable < { message: string } > {
        return this.httpClient.post<{ message: string }>(`${this.apiURL}/email`, email);
        } 
}

