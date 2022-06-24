import { Component, OnInit} from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	
})
export class AppComponent implements OnInit{
	
	ngOnInit(): void {
		this.getCurrencies();
	}
	date = new Date().toDateString();
	rates = {
		USD: 0,
		EUR: 0,
		UAH: 1
	}
	async getCurrencies() {
		const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
		const data = await response.json()
		const result = await data

		function getCurrencyRate(rates: any[], cc: string) {
			return rates.find(r => r.cc === cc).rate.toFixed(3)
		}

		this.rates.USD = getCurrencyRate(result, 'USD')
		this.rates.EUR = getCurrencyRate(result, 'EUR')
	}

	input: any
	output: any

	getValueOutput(x:any,y:any,z:any) {
		const value = x * y / z 
		this.output = value.toFixed(2)
	}

	getValueInput(x:any,y:any,z:any) {
		const value = x * y / z 
		this.input = value.toFixed(2)
	}


}