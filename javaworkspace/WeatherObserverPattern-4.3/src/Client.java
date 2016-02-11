
public class Client {

	public static void main(String[] args) {
		//创建天气作为一个目标，也可以说是被观察者
		ConcreteWeatherSubject subject = new ConcreteWeatherSubject();
		
		//创建黄明的女朋友为观察者
		ConcreteObserver girl = new ConcreteObserver();
		girl.setObserverName("黄明的女朋友");
		
		ConcreteObserver mum = new ConcreteObserver();
		mum.setObserverName("黄明的妈妈");
		
		subject.addObserver(girl);
		subject.addObserver(mum);
		
		subject.setContent("天气晴，气温28度");
		
		
	}

}
