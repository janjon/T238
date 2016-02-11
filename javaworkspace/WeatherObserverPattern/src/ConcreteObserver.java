/**
 * 具体的观察者对象，实现更新的方法，使自身的状态和目标状态一致
 * 
 * @author lzz
 *
 */
public class ConcreteObserver implements Observer {

	// 观察者的名字，是谁收到了这个讯息，黄明的女朋友还是他老妈
	private String observerName;

	// 天气内容的情况，这个消息从目标处获取
	private String weatherContent;

	// 提醒的内容:黄明的女朋友提醒约会，而他老妈则提醒购物
	private String remindThing;

	public String getObserverName() {
		return observerName;
	}

	public void setObserverName(String observerName) {
		this.observerName = observerName;
	}

	public String getWeatherContent() {
		return weatherContent;
	}

	public void setWeatherContent(String weatherContent) {
		this.weatherContent = weatherContent;
	}

	public String getRemindThing() {
		return remindThing;
	}

	public void setRemindThing(String remindThing) {
		this.remindThing = remindThing;
	}

	/**
	 * 获取目标类的状态同步到观察者的状态中
	 */
	@Override
	public void update(String content) {
		weatherContent = content;
		System.out.println(observerName + "收到了" + weatherContent + "," + remindThing);
	}
}
