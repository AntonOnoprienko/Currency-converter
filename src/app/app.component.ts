import { Component, OnInit} from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	
})
export class AppComponent implements OnInit {
	
	ngOnInit(): void {
		this.getCurrencies();
	}

	date = new Date();

	rates = [
		{ current: "USD", value: 0 },
		{ current: "EUR", value: 0 },
		{ current: "UAH", value: 1 }
	];

	input: any
	output: any


	async getCurrencies() {
		const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
		const data = await response.json()
		const result = await data
		
		function getCurrencyRate(rates: any[], cc: string) {
			return rates.find(r => r.cc === cc).rate
		}

		this.rates[0].value = getCurrencyRate(result, 'USD')
		this.rates[1].value = getCurrencyRate(result, 'EUR')
	}


	getOutputValue(input: any, leftselect: any, rightselect: any) {
		const value = input * leftselect / rightselect 
		this.output = value.toFixed(2)
	}

	getInptValue(output: any, rightselect: any, leftselect: any) {
		const value = output * rightselect / leftselect 
		this.input = value.toFixed(2)
	}


}