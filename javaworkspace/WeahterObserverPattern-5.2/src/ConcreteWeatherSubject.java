
public class ConcreteWeatherSubject extends WeatherSubject {
	
	// "晴天"，"下雨","下雪"
	// 目标对象的状态
	private String weatherContent;
	public String getWeatherContent() {
		return weatherContent;
	}
	public void setWeatherContent(String weatherContent) {
		this.weatherContent = weatherContent;
		this.notifyObserver();
	}
	@Override
	public void notifyObserver() {
		for (Observer observer : observers) {
			//规则是:
			//黄明的女朋友需要下雨
			//黄明的老妈 下雨 下雪
			
			//如果天气是晴天
			// do nothing
			
			if ("下雨".equals(this.getWeatherContent())) {
				if ("黄明的女朋友".equals(observer.getObserverName())) {
					observer.update(this);
				}
				if ("黄明的老妈".equals(observer.getObserverName())){
					observer.update(this);
				}
			}
			
			if ("下雪".equals(this.getWeatherContent())) {
				if ("黄明的老妈".equals(observer.getObserverName())) {
					observer.update(this);
				}
			}
		}
	}

}
