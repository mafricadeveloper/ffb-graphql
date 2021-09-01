import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SitesService {
  constructor(
    @Inject('FFB_SERVICE') private client: ClientProxy,
    private readonly http: HttpService,
  ) {}
  async findAllSite(year, month) {
    try {
      const res = await lastValueFrom(
        this.http.post(
          `http://192.168.1.12/site/api/AllSiteYearly`,
          {
            year: year,
            month: month,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            responseType: 'json',
          },
        ),
      );

      return res.data;
    } catch (err) {
      return err;
    }

    // const res = [
    //   {
    //     name: 'Palmcol',
    //     production: 50505,
    //     color: '#d3326a',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Meruan',
    //     production: 39526,
    //     color: '#dfe96a',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Worldsign',
    //     production: 35915,
    //     color: '#87c024',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Jobenar BL',
    //     production: 32784,
    //     color: '#ab9272',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Saradu',
    //     production: 32628,
    //     color: '#70aa11',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Victoria',
    //     production: 22715,
    //     color: '#04ec79',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Jobenar',
    //     production: 21805,
    //     color: '#25763c',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Rosebay 2',
    //     production: 18913,
    //     color: '#7a8ab6',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Palmcol BL',
    //     production: 18325,
    //     color: '#ac49ca',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Sikat',
    //     production: 17610,
    //     color: '#f859a1',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Spapa',
    //     production: 6807,
    //     color: '#042461',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Titasa',
    //     production: 651,
    //     color: '#4171f5',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    //   {
    //     name: 'Rosebay 1',
    //     production: 0,
    //     color: '#eb7adb',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 12,
    //   },
    // ];
    // return res;

    // return [...res];
    // const pattern = { cmd: 'QUERY' };
    // const payload = [1, 2, 3];
    // const res = await lastValueFrom(this.client.send<any>(pattern, payload));

    // return res;
  }
}
