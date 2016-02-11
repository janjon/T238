import java.util.ArrayList;
import java.util.List;

/**
 * 目标对象,它知道观察它的观察者,并提供注册，添加，删除观察者的接口
 * 
 * @author lzz
 *
 */
public class WeatherSubject {
	private List<Observer> observers = new ArrayList<Observer>();

	/**
	 * 把订阅天气的人添加到订阅者列表中
	 * 
	 * @param observer
	 */
	public void attach(Observer observer) {
		observers.add(observer);
	}

	/**
	 * 删除集合中的指定订阅者
	 * 
	 * @param observer
	 */
	public void dettach(Observer observer) {
		observers.remove(observer);
	}

	/**
	 * 通知所有注册的订阅者
	 */
	protected void notifyObserver(String content) {
		for (Observer observer : observers) {
			observer.update(content);
		}
	}
}
