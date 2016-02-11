package com.immoc.pattern.cor.handler;

public class CEO extends PriceHandler {

	@Override
	public void proccessDiscount(float discount) {
		if (discount<=0.3) {
			System.out.format("%s批准了折扣: %.2f%n",this.getClass().getName(),discount);
		}else {
			System.out.format("%s拒绝了折扣: %.2f%n",this.getClass().getName(),discount);
		}
	}

}
