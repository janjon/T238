package com.immoc.pattern.cor.handler;

public class Director extends PriceHandler {

	@Override
	public void proccessDiscount(float discount) {
		if (discount<=0.4) {
			System.out.format("%s批准了折扣: %.2f%n",this.getClass().getName(),discount);
		}else {
			successor.proccessDiscount(discount);
		}
	}

}
