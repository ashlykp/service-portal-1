import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfigService {
    private appConfig:any = null;
    configUrl = `${environment.production?'ec-emr/':''}assets/config/appConfig.json`;

    constructor(private http: HttpClient) { }

    public loadAppConfig(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.configUrl).subscribe((response: any) => {
                this.appConfig = response;
                resolve(true);
            });
        });
    }

    getConfig() {
        return this.appConfig;
    }
}