
public class Client {

	public static void main(String[] args) {
		 ConcreteWeatherSubject subject = new ConcreteWeatherSubject();
		 
		 ConcreteObserver girl = new ConcreteObserver();
		 girl.setObserverName("黄明的女朋友");
		 girl.setRemindThing("下雨了，安静的呆在家里");
		 
		 ConcreteObserver mum = new ConcreteObserver();
		 mum.setObserverName("黄明的老妈");
		 mum.setRemindThing("不管下雨下雪，我都不出门");
		 
		 subject.attach(girl);
		 subject.attach(mum);
		 
		 subject.setWeatherContent("下雪");
		 
		 
	}

}
